import { createFileRoute } from "@tanstack/react-router";
import { readDeepseekKey, writeDeepseekKey } from "@/server/deepseekKey";

function tailOf(key: string): string {
  return key.length >= 4 ? key.slice(-4) : "";
}

export const Route = createFileRoute("/api/deepseek-key")({
  server: {
    handlers: {
      GET: async () => {
        const key = await readDeepseekKey();
        return Response.json({ configured: Boolean(key), tail: tailOf(key) });
      },
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));
        const apiKey = String(body.apiKey || "").trim();
        if (apiKey && !/^sk-[A-Za-z0-9_-]{10,}$/.test(apiKey)) {
          return Response.json({ error: "这不像 DeepSeek 的钥匙。一般是 sk- 开头。" }, { status: 400 });
        }
        await writeDeepseekKey(apiKey);
        return Response.json({ configured: Boolean(apiKey), tail: tailOf(apiKey) });
      },
    },
  },
});
