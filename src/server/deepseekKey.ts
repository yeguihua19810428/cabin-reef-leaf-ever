import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const keyFile = path.join(process.cwd(), "data/deepseek.json");

export async function readDeepseekKey(): Promise<string> {
  const fromEnv = process.env.CHECK_AI_API_KEY?.trim();
  if (fromEnv) return fromEnv;
  try {
    const parsed = JSON.parse(await readFile(keyFile, "utf8")) as { apiKey?: string };
    return String(parsed.apiKey || "").trim();
  } catch {
    return "";
  }
}

export async function writeDeepseekKey(apiKey: string): Promise<void> {
  await mkdir(path.dirname(keyFile), { recursive: true });
  await writeFile(keyFile, JSON.stringify({ apiKey }), "utf8");
}
