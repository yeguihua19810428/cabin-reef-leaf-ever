export interface SentenceFeedback {
  isCorrect: boolean;
  score: number;
  praise: string;
  grammarAnalysis: string;
  betterAlternative: string;
  tips: string;
}

const FUTURE_TIP =
  "两件事都是以后才发生的。If 后面那件，却当成现在来说，不加 will。will 只放在后面那句，说你到时会怎么做。";
const ALREADY_TIP =
  "别人已经这么说了。嘴里却用 They say，不用 They said。听起来这消息现在还在起作用。";

export function localSentenceFeedback(sentence: string, context = ""): SentenceFeedback {
  const trimmed = sentence.trim();
  const already = /已经|they say/i.test(context) || /\bthey say\b/i.test(trimmed);
  const tips = already ? ALREADY_TIP : FUTURE_TIP;
  const hasCapital = /^[A-Z]/.test(trimmed);
  const hasPunctuation = /[.!?]$/.test(trimmed);

  let ok = true;
  let note = tips;
  if (already) {
    if (!/\bthey say\b/i.test(trimmed) || /\bthey said\b/i.test(trimmed)) {
      ok = false;
      note = "别人已经说过了。嘴里用 They say，别写成 They said。";
    }
  } else {
    const beforeMain = trimmed.split(/\b(i'll|i will)\b/i)[0] || trimmed;
    if (!/\bif\b/i.test(trimmed) || /\bwill\b/i.test(beforeMain)) {
      ok = false;
      note = "两件都是以后的事。If 后面当成现在来说，别加 will。后面那句再用 will。";
    } else if (!/\b(i'll|will)\b/i.test(trimmed)) {
      ok = false;
      note = "把后面那句也写上。will 放在后面，说你到时会怎么做。";
    }
  }

  const polished = hasCapital && hasPunctuation
    ? trimmed
    : `${trimmed.charAt(0).toUpperCase()}${trimmed.slice(1)}${hasPunctuation ? "" : "."}`;

  return {
    isCorrect: ok,
    score: ok ? (hasCapital && hasPunctuation ? 95 : 90) : 85,
    praise: ok ? "可以，听着就像歌里那样。" : "还差一点。",
    grammarAnalysis: note,
    betterAlternative: polished,
    tips,
  };
}
