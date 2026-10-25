// 一首歌只学一个点。学生看到的话不用术语。
// 现在先做一般现在时的两种特殊用法，各用一首 Bruno Mars。
import type { ClozeQuestion, LyricLine, Song } from "../types";

export const FUTURE_POINT = "以后的事，If 后面当现在说";
export const ALREADY_POINT = "已经说过的事，嘴里用现在说";
export const SIMPLE_IF_POINT = FUTURE_POINT;
export const SPOKEN_TIP =
  "两件事都是以后才发生的。If 后面那件，却当成现在来说，不加 will。will 只放在后面那句，说你到时会怎么做。";

const FUTURE_TIP = SPOKEN_TIP;
const ALREADY_TIP =
  "别人已经这么说了。嘴里却用 They say，不用 They said。听起来这消息现在还在起作用。";

function isIfLine(text: string): boolean {
  return /^\s*(and\s+)?if\b/i.test(text);
}

function isTheySayLine(text: string): boolean {
  return /\bthey say\b/i.test(text);
}

export function focusPoint(song: Pick<Song, "grammarTheme" | "title" | "lines">): string {
  const theme = song.grammarTheme || "";
  if (theme === FUTURE_POINT || theme === ALREADY_POINT || theme === "If 后面别加 will") {
    return theme === "If 后面别加 will" ? FUTURE_POINT : theme;
  }
  if (/talking to the moon/i.test(song.title || "") || song.lines.some((line) => isTheySayLine(line.text))) {
    return ALREADY_POINT;
  }
  if (song.lines.some((line) => isIfLine(line.text))) return FUTURE_POINT;
  return FUTURE_POINT;
}

export function spokenTip(song: Pick<Song, "grammarTheme" | "title" | "lines">): string {
  return focusPoint(song) === ALREADY_POINT ? ALREADY_TIP : FUTURE_TIP;
}

export function focusLines(song: Pick<Song, "grammarTheme" | "title" | "lines">): LyricLine[] {
  if (focusPoint(song) === ALREADY_POINT) {
    return song.lines.filter((line) => line.text.trim() && isTheySayLine(line.text));
  }
  return song.lines.filter((line) => line.text.trim() && isIfLine(line.text));
}

export function isStudyLine(song: Pick<Song, "grammarTheme" | "title" | "lines">, line: LyricLine): boolean {
  return focusLines(song).includes(line);
}

export function sungAfter(song: Pick<Song, "lines">, line: LyricLine): LyricLine | undefined {
  const index = song.lines.indexOf(line);
  const next = song.lines[index + 1];
  if (!next?.text.trim()) return undefined;
  return /\b(i'll|will|i've|i have)\b/i.test(next.text) ? next : undefined;
}

export function wholeBlank(song: Pick<Song, "lines">, line: LyricLine): {
  text: string;
  blank: string;
  translation: string;
} {
  const blank = line.cloze?.sentenceWithBlank || line.text;
  const next = sungAfter(song, line);
  const ifOnly = /^\s*(and\s+)?if\b/i.test(line.text) && !/\b(i'll|will)\b/i.test(line.text);
  if (!ifOnly || !next) {
    return { text: line.text, blank, translation: line.translation };
  }
  return {
    text: `${line.text}, ${next.text}`,
    blank: `${blank}, ${next.text}`,
    translation: [line.translation, next.translation].filter(Boolean).join("，"),
  };
}

export function madeExample(song: Pick<Song, "grammarTheme" | "title" | "lines">): {
  kind: "made";
  text: string;
  grammarPoint: string;
  patternTemplate: string;
  cloze: ClozeQuestion;
} {
  const point = focusPoint(song);
  if (point === ALREADY_POINT) {
    return {
      kind: "made",
      text: "They say I stay up too late.",
      grammarPoint: point,
      patternTemplate: "They say",
      cloze: {
        blankWord: "say",
        sentenceWithBlank: "They _____ I stay up too late.",
        hint: "别人已经这么说了。嘴里用 say，不用 said。",
        options: ["say", "said", "will say", "says"],
      },
    };
  }
  return {
    kind: "made",
    text: "If it rains tomorrow, I will stay at home.",
    grammarPoint: point,
    patternTemplate: "If + 现在",
    cloze: {
      blankWord: "rains",
      sentenceWithBlank: "If it _____ tomorrow, I will stay at home.",
      hint: "两件都是以后的事。If 后面说 rains，不说 will rain。will 留在 I will stay。",
      options: ["rains", "will rain", "rained", "raining"],
    },
  };
}
