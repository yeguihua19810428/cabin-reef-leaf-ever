/**
 * Client-Side Instant Grammar Heuristics & Analysis Engine
 * Extracts grammatical patterns, parts of speech, and cloze tests locally with zero latency.
 */

import { GrammarChunk, ClozeQuestion, LyricLine } from '../types';
import { ParsedSubtitleLine } from './srtParser';

// Common irregular verbs past & participle forms
const COMMON_VERBS = [
  'find', 'found', 'sail', 'sailed', 'see', 'saw', 'seen', 'be', 'am', 'is', 'are', 'was', 'were', 'been',
  'have', 'has', 'had', 'go', 'went', 'gone', 'do', 'did', 'done', 'make', 'made', 'take', 'took', 'taken',
  'come', 'came', 'know', 'knew', 'known', 'think', 'thought', 'get', 'got', 'gotten', 'give', 'gave', 'given',
  'feel', 'felt', 'say', 'said', 'try', 'tried', 'need', 'needed', 'want', 'wanted', 'love', 'loved',
  'listen', 'listened', 'wait', 'waited', 'sit', 'sat', 'sitting', 'hurts', 'hurt', 'guide', 'guided', 'fix', 'fixed'
];

export function analyzeLineGrammarLocally(text: string): {
  grammarPoint: string;
  patternTemplate: string;
  explanation: string;
  chunks: GrammarChunk[];
  cloze: ClozeQuestion;
} {
  const lower = text.toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);

  let grammarPoint = '核心谓语动词与语序搭配';
  let patternTemplate = 'Subject + Verb + Object/Complement';
  let explanation = '该句展现了地道英文原声的句式韵律与动词搭配。';
  let blankWord = words[Math.min(2, words.length - 1)] || 'word';
  let hint = '根据语境和句式结构选择正确的词汇';
  let options = [blankWord, 'is', 'was', 'to'];

  if (/\bthey say\b/i.test(text)) {
    grammarPoint = '已经说过的事，嘴里用现在说';
    patternTemplate = 'They say';
    explanation = '别人已经这么说了。嘴里用 They say，不用 They said。';
    blankWord = 'say';
    hint = '别人已经这么说了。嘴里用 say，不用 said。';
    options = ['say', 'said', 'will say', 'says'];
  } else if (lower.includes('if ') || lower.startsWith('if')) {
    if (lower.includes(' were ') || lower.includes("i'd") || lower.includes('would')) {
      grammarPoint = '虚拟语气 (Subjunctive Mood / Unreal Condition)';
      patternTemplate = 'If + 主语 + were/过去式..., 主语 + would/could + 动词原形';
      explanation = '经典虚拟语气句型：用来设想与事实相反或难以实现的愿望，主句通常搭配 would 或 could。';
      const wereIdx = words.findIndex((w) => w.toLowerCase() === 'were');
      if (wereIdx !== -1) {
        blankWord = words[wereIdx];
        hint = '与现在事实相反的虚拟语气，be 动词统一使用 were';
        options = ['were', 'was', 'am', 'are'];
      }
    } else {
      grammarPoint = '以后的事，If 后面当现在说';
      patternTemplate = 'If + 现在';
      explanation = '两件事都是以后才发生的。If 后面那件，却当成现在来说，不加 will。';
      const ifVerbIdx = words.findIndex((w) => COMMON_VERBS.includes(w.toLowerCase()));
      if (ifVerbIdx !== -1) {
        blankWord = words[ifVerbIdx];
        hint = '两件都是以后的事。If 后面用现在，不说 will。';
        options = [blankWord, 'will ' + blankWord, 'would ' + blankWord, blankWord + 'ing'];
      }
    }
  }
  // Present Continuous
  else if (/\b(am|is|are|'m|'re|'s)\s+\w+ing\b/i.test(text)) {
    grammarPoint = '现在进行时 (Present Continuous: be + V-ing)';
    patternTemplate = '主语 + am/is/are + 动词-ing + 状语';
    explanation = '用于生动描绘此时此刻正在进行的动作或当下的生活状态。';
    const ingWord = words.find((w) => w.toLowerCase().endsWith('ing'));
    if (ingWord) {
      blankWord = ingWord.replace(/[^a-zA-Z]/g, '');
      hint = '注意现在分词的拼写与变形规则';
      const root = blankWord.replace(/ing$/, '');
      options = [blankWord, root, root + 'ed', root + 's'];
    }
  }
  // Present Perfect
  else if (/\b(have|has|'ve)\s+\w+(ed|en|ne)\b/i.test(text) || /\b(have|has|'ve)\s+(been|seen|known|done|found|gotten)\b/i.test(text)) {
    grammarPoint = '现在完成时 (Present Perfect: have/has + done)';
    patternTemplate = '主语 + have/has + 过去分词 (V-ed/done)';
    explanation = '强调过去发生的动作对现在造成的影响，或动作从过去一直持续到现在。';
    const perfWord = words.find((w) => ['have', 'has', "'ve"].includes(w.toLowerCase()));
    if (perfWord) {
      blankWord = perfWord;
      hint = '现在完成时的核心助动词';
      options = [blankWord, 'had', 'was', 'did'];
    }
  }
  // Future will / 'll
  else if (/\b(will|'ll)\b/i.test(text)) {
    grammarPoint = '一般将来时 (will + 动词原形) 表达承诺或决心';
    patternTemplate = '主语 + will (\'ll) + 动词原形 (Base Form)';
    explanation = 'will 表态度的坚定承诺或未来的必然趋势，后接动词原形。';
    const willWord = words.find((w) => ["will", "'ll", "i'll"].includes(w.toLowerCase())) || 'will';
    blankWord = willWord;
    hint = '将来时助动词，表达意愿与承诺';
    options = [blankWord, 'would', 'am', 'was'];
  }
  // Modals (can, could, should, must)
  else if (/\b(can|could|should|must|might|can't)\b/i.test(text)) {
    grammarPoint = '情态动词 + 动词原形';
    patternTemplate = '主语 + modal verb + 动词原形 (Base Form)';
    explanation = '情态动词后必须紧跟动词原形，用来表达能力、推测、义务或建议。';
    const modalWord = words.find((w) => ['can', 'could', 'should', 'must', "can't"].includes(w.toLowerCase())) || 'can';
    blankWord = modalWord;
    hint = '情态动词原形，修饰后续动词';
    options = [blankWord, 'is', 'to', 'will'];
  }
  // Clauses (when, because, that, what)
  else if (/\b(when|because|'cause|that|what|where|why|how)\b/i.test(text)) {
    grammarPoint = '状语从句与名词性从句复合连接';
    patternTemplate = '连接连词 (Conjunction) + 主谓完整从句';
    explanation = '复合句中利用连词使句子逻辑层层递进，表达时间、因果或充当宾语。';
    const conjWord = words.find((w) => ['when', 'because', "'cause", 'that', 'what', 'how'].includes(w.toLowerCase())) || 'when';
    blankWord = conjWord;
    hint = '引导从句的关键连接词';
    options = [blankWord, 'which', 'and', 'but'];
  }

  // Deduplicate and pad options
  const uniqueOpts = Array.from(new Set(options));
  while (uniqueOpts.length < 4) {
    const filler = ['to', 'for', 'at', 'with', 'in', 'on', 'do', 'be'][uniqueOpts.length];
    if (!uniqueOpts.includes(filler)) uniqueOpts.push(filler);
  }

  // Generate chunks
  const chunks: GrammarChunk[] = [];
  if (words.length <= 4) {
    chunks.push({ phrase: text, role: '歌词主干句', posTag: 'clause' });
  } else {
    const mid = Math.floor(words.length / 2);
    chunks.push({
      phrase: words.slice(0, mid).join(' '),
      role: '主干前部 (主谓结构/从句)',
      posTag: 'subject',
    });
    chunks.push({
      phrase: words.slice(mid).join(' '),
      role: '主干后部 (宾语/状语搭配)',
      posTag: 'predicate',
    });
  }

  const cleanBlank = blankWord.replace(/^[^\w']+|[^\w']+$/g, '');
  const sentenceWithBlank = text.replace(cleanBlank, '_____');

  return {
    grammarPoint,
    patternTemplate,
    explanation,
    chunks,
    cloze: {
      blankWord: cleanBlank,
      sentenceWithBlank,
      hint,
      options: uniqueOpts.slice(0, 4),
    },
  };
}

export function buildLocalSongFromSrt(
  title: string,
  artist: string,
  audioUrl: string,
  parsedLines: ParsedSubtitleLine[]
): LyricLine[] {
  return parsedLines.map((line, idx) => {
    const analysis = analyzeLineGrammarLocally(line.text);
    return {
      id: line.id || `line-${idx + 1}`,
      startTime: line.startTime,
      endTime: line.endTime,
      text: line.text,
      translation: line.translation || '（跟随原唱音频沉浸听辨）',
      grammarPoint: analysis.grammarPoint,
      patternTemplate: analysis.patternTemplate,
      explanation: analysis.explanation,
      chunks: analysis.chunks,
      cloze: analysis.cloze,
    };
  });
}
