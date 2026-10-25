import { createFileRoute } from "@tanstack/react-router";
import { localSentenceFeedback, type SentenceFeedback } from "@/lyric/utils/sentenceCheck";
import { readDeepseekKey } from "@/server/deepseekKey";

const FUTURE_TIP =
  "两件事都是以后才发生的。If 后面那件，却当成现在来说，不加 will。will 只放在后面那句，说你到时会怎么做。";
const ALREADY_TIP =
  "别人已经这么说了。嘴里却用 They say，不用 They said。听起来这消息现在还在起作用。";

async function askConfiguredModel(input: {
  base: string;
  key: string;
  model: string;
  studentSentence: string;
  formula: string;
  promptContext: string;
}): Promise<SentenceFeedback | null> {
  const endpoint = input.base.replace(/\/$/, "") + "/chat/completions";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${input.key}`,
    },
    body: JSON.stringify({
      model: input.model,
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content: [
            "你在帮中国大学生看一句英文。只用口语，不要用语法术语。",
            "一首歌只练一件事。",
            "如果是以后的事：If 后面当现在说，不加 will。will 只放在后面那句。必须是完整句。",
            "如果是别人已经说过的事：用 They say，不要 They said。",
            "只返回 JSON，不要markdown：",
            '{"isCorrect":true,"score":90,"praise":"","grammarAnalysis":"","betterAlternative":"","tips":""}',
            `以后这件事的提示：${FUTURE_TIP}`,
            `已经说过这件事的提示：${ALREADY_TIP}`,
          ].join("\n"),
        },
        {
          role: "user",
          content: `句型：${input.formula}\n情境：${input.promptContext}\n学生写的：${input.studentSentence}`,
        },
      ],
    }),
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) return null;
  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (typeof text !== "string") return null;
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  const parsed = JSON.parse(text.slice(start, end + 1));
  if (typeof parsed.isCorrect !== "boolean") return null;
  return {
    isCorrect: parsed.isCorrect,
    score: Number(parsed.score) || (parsed.isCorrect ? 90 : 70),
    praise: String(parsed.praise || ""),
    grammarAnalysis: String(parsed.grammarAnalysis || ""),
    betterAlternative: String(parsed.betterAlternative || input.studentSentence),
    tips: String(parsed.tips || ""),
  };
}

export const Route = createFileRoute("/api/check-sentence")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));
        const studentSentence = String(body.studentSentence || "");
        const promptContext = String(body.promptContext || "");
        const formula = String(body.formula || "");
        const savedKey = await readDeepseekKey();
        const base = process.env.CHECK_AI_BASE_URL || (savedKey ? "https://api.deepseek.com/v1" : "");
        const key = process.env.CHECK_AI_API_KEY || savedKey;
        const model = process.env.CHECK_AI_MODEL || "deepseek-chat";
        if (base && key && studentSentence.trim()) {
          try {
            const feedback = await askConfiguredModel({
              base,
              key,
              model,
              studentSentence,
              formula,
              promptContext,
            });
            if (feedback) {
              return Response.json({ feedback, source: "configured-ai" });
            }
          } catch {
            // The configured model did not answer. Use the local rule.
          }
        }
        return Response.json({
          feedback: localSentenceFeedback(studentSentence, `${formula}\n${promptContext}`),
          source: "local",
        });
      },
    },
  },
});
