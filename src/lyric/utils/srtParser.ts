/**
 * Robust SRT, VTT, LRC, and Plain-Text Lyric Parser
 * Built to withstand messy real-world subtitle files (different line endings, missing hours/ms,
 * BOM markers, WebVTT tags, bilingual English/Chinese lines, and Windows UTF-16).
 */

export interface ParsedSubtitleLine {
  id: string;
  startTime: number; // in seconds
  endTime: number;   // in seconds
  text: string;
  translation?: string;
}

/**
 * Convert any time string format to seconds:
 * - "00:01:23,456" -> 83.456
 * - "00:01:23.456" -> 83.456
 * - "01:23,456"    -> 83.456 (missing hour)
 * - "01:23.45"     -> 83.45
 * - "00:01:23"     -> 83.0 (no milliseconds)
 * - "01:23"        -> 83.0
 */
export function timeStringToSeconds(timeStr: string): number {
  if (!timeStr) return 0;

  // Extract only the time portion, ignoring trailing WebVTT positioning tags (e.g. line:80% align:start)
  const match = timeStr.trim().match(/(?:(\d{1,2}):)?(\d{1,2}):(\d{2})(?:[.,](\d{1,4}))?/);
  if (!match) return 0;

  const hours = match[1] !== undefined ? parseFloat(match[1]) || 0 : 0;
  const minutes = parseFloat(match[2]) || 0;
  const seconds = parseFloat(match[3]) || 0;
  const fraction = match[4] ? parseFloat('0.' + match[4]) : 0;

  // If match[1] was undefined, it was MM:SS[.fff]
  if (match[1] === undefined) {
    return minutes * 60 + seconds + fraction;
  }

  return hours * 3600 + minutes * 60 + seconds + fraction;
}

/**
 * Detects whether a string contains Chinese characters
 */
function hasChinese(str: string): boolean {
  return /[\u4e00-\u9fa5]/.test(str);
}

/**
 * Separates bilingual lines (English on top, Chinese translation below or separated by / |)
 */
function extractBilingual(textLines: string[]): { text: string; translation?: string } {
  if (textLines.length === 0) return { text: '' };

  // If there are exactly 2 lines and one has Chinese and one is English
  if (textLines.length >= 2) {
    const chineseIdx = textLines.findIndex((l) => hasChinese(l));
    const englishIdx = textLines.findIndex((l) => !hasChinese(l) && /[a-zA-Z]/.test(l));

    if (chineseIdx !== -1 && englishIdx !== -1) {
      return {
        text: textLines[englishIdx].trim(),
        translation: textLines[chineseIdx].trim(),
      };
    }
  }

  const combined = textLines.join(' ').trim();

  // If a single line contains " / " or " | " separating English and Chinese
  if (combined.includes(' / ') || combined.includes(' | ')) {
    const parts = combined.split(/\s*[/|]\s*/);
    if (parts.length >= 2) {
      const chPart = parts.find((p) => hasChinese(p));
      const enPart = parts.find((p) => !hasChinese(p) && /[a-zA-Z]/.test(p));
      if (chPart && enPart) {
        return {
          text: enPart.trim(),
          translation: chPart.trim(),
        };
      }
    }
  }

  return { text: combined };
}

/**
 * Universal SRT and WebVTT Parser
 */
export function parseSrt(srtContent: string): ParsedSubtitleLine[] {
  const lines: ParsedSubtitleLine[] = [];
  // Strip UTF-8 BOM if present
  const cleanContent = srtContent.replace(/^\uFEFF/, '').replace(/WEBVTT/gi, '');
  const rawLines = cleanContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');

  let currentStart = -1;
  let currentEnd = -1;
  let currentTextLines: string[] = [];
  let counter = 1;

  const flushCue = () => {
    if (currentStart >= 0 && currentTextLines.length > 0) {
      const { text, translation } = extractBilingual(currentTextLines);
      const cleanText = text
        .replace(/<[^>]*>/g, '') // strip HTML formatting tags
        .replace(/\{[^}]*\}/g, '') // strip ASS/SSA styling tags
        .trim();

      if (cleanText) {
        lines.push({
          id: `srt-${counter++}`,
          startTime: Math.round(currentStart * 1000) / 1000,
          endTime: Math.round((currentEnd > currentStart ? currentEnd : currentStart + 4) * 1000) / 1000,
          text: cleanText,
          translation: translation ? translation.replace(/<[^>]*>/g, '').trim() : undefined,
        });
      }
    }
    currentStart = -1;
    currentEnd = -1;
    currentTextLines = [];
  };

  for (let i = 0; i < rawLines.length; i++) {
    const rawLine = rawLines[i].trim();

    // Check if this line is a timing arrow line (00:00:01,000 --> 00:00:04,500)
    if (rawLine.includes('-->') || rawLine.includes('->')) {
      flushCue();

      const separator = rawLine.includes('-->') ? '-->' : '->';
      const [startStr, endStr] = rawLine.split(separator).map((s) => s.trim());
      currentStart = timeStringToSeconds(startStr);
      currentEnd = timeStringToSeconds(endStr);
      continue;
    }

    // If we have an active timing cue, collect text
    if (currentStart >= 0) {
      // If this line is just an index integer for the NEXT cue, check next line
      if (/^\d+$/.test(rawLine)) {
        const nextLine = (rawLines[i + 1] || '').trim();
        if (nextLine.includes('-->') || nextLine.includes('->')) {
          flushCue();
          continue;
        }
      }

      if (rawLine.length > 0) {
        currentTextLines.push(rawLine);
      } else {
        // Blank line marks the end of this cue
        flushCue();
      }
    }
  }

  // Flush any trailing cue at end of file
  flushCue();

  // If cues have overlapping or missing endTimes, sanitize them
  return sanitizeSubtitleTimeline(lines);
}

/**
 * Universal LRC Parser
 */
export function parseLrc(lrcContent: string): ParsedSubtitleLine[] {
  const cleanContent = lrcContent.replace(/^\uFEFF/, '');
  const rawLines = cleanContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const timeRegex = /\[(\d{1,2}:\d{2}(?:[.:]\d{1,3})?)\]/g;
  const wordTimeRegex = /<\d{1,2}:\d{2}(?:[.:]\d{1,3})?>/g;

  const tempItems: Array<{ time: number; text: string }> = [];

  for (const line of rawLines) {
    const matches = [...line.matchAll(timeRegex)];
    if (!matches.length) continue;

    const pureText = line
      .replace(timeRegex, '')
      .replace(wordTimeRegex, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!pureText) continue;

    // Ignore LRC header tags like [ti:], [ar:], [al:], [by:]
    if (/^(ti|ar|al|by|offset|length):/i.test(pureText)) continue;

    for (const match of matches) {
      const timeSec = timeStringToSeconds(match[1]);
      tempItems.push({ time: timeSec, text: pureText });
    }
  }

  // Sort strictly by timestamp ascending
  tempItems.sort((a, b) => a.time - b.time);

  const lines: ParsedSubtitleLine[] = [];
  for (let i = 0; i < tempItems.length; i++) {
    const item = tempItems[i];
    const nextItem = tempItems[i + 1];
    const endTime = nextItem ? nextItem.time : item.time + 4.5;

    const { text, translation } = extractBilingual([item.text]);

    lines.push({
      id: `lrc-${i + 1}`,
      startTime: Math.round(item.time * 1000) / 1000,
      endTime: Math.round(Math.max(endTime, item.time + 1.0) * 1000) / 1000,
      text,
      translation,
    });
  }

  return sanitizeSubtitleTimeline(lines);
}

/**
 * Ensures lines are sorted ascending by startTime, and no endTime <= startTime
 */
function sanitizeSubtitleTimeline(lines: ParsedSubtitleLine[]): ParsedSubtitleLine[] {
  lines.sort((a, b) => a.startTime - b.startTime);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1];

    if (line.endTime <= line.startTime) {
      line.endTime = nextLine ? Math.min(nextLine.startTime, line.startTime + 5.0) : line.startTime + 4.0;
    }
  }

  return lines;
}

/**
 * Auto-detect and parse either SRT, VTT, LRC, or plain text lyrics
 */
export function parseSubtitles(content: string, estimatedDuration = 180): ParsedSubtitleLine[] {
  if (!content || !content.trim()) return [];

  // SRT or VTT timing arrow
  if (content.includes('-->') || content.includes('->')) {
    return parseSrt(content);
  }

  // LRC timestamp [mm:ss]
  if (/\[\d{1,2}:\d{2}/.test(content)) {
    return parseLrc(content);
  }

  // Plain text fallback (e.g. user pasted raw lyric lines without timestamps)
  const rawLines = content
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !/^\d+$/.test(l));

  if (!rawLines.length) return [];

  const interval = Math.max(3.5, estimatedDuration / (rawLines.length + 1));
  const lines: ParsedSubtitleLine[] = [];

  for (let i = 0; i < rawLines.length; i++) {
    const { text, translation } = extractBilingual([rawLines[i]]);
    const startTime = Math.round(i * interval * 10) / 10;
    const endTime = Math.round((i + 1) * interval * 10) / 10;

    lines.push({
      id: `plain-${i + 1}`,
      startTime,
      endTime,
      text,
      translation,
    });
  }

  return sanitizeSubtitleTimeline(lines);
}
