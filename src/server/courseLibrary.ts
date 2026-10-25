import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const coursesPath = path.join(process.cwd(), "src/lyric/data/userCourses.json");
const audioDir = path.join(process.cwd(), "public/audio");

type StoredSong = {
  id?: string;
  title?: string;
  artist?: string;
  audioUrl?: string;
  [key: string]: unknown;
};

function sanitizeFileName(name: string): string {
  const base = path
    .basename(name)
    .replace(/[^\w.\-\u4e00-\u9fff]+/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 80);
  if (/\.(mp3|wav|m4a|ogg|aac)$/i.test(base)) return base;
  return `${base || "track"}.mp3`;
}

export async function readUserCourses(): Promise<StoredSong[]> {
  try {
    const raw = await readFile(coursesPath, "utf8");
    const data = JSON.parse(raw) as unknown;
    return Array.isArray(data) ? (data as StoredSong[]) : [];
  } catch {
    return [];
  }
}

export async function saveUserCourse(
  song: StoredSong,
  audioBase64?: string,
  audioFileName?: string,
): Promise<StoredSong> {
  if (!audioBase64 || !audioBase64.includes(",")) {
    throw new Error("缺少音频文件，无法写入发布包");
  }

  const payload = audioBase64.slice(audioBase64.indexOf(",") + 1);
  const bytes = Buffer.from(payload, "base64");
  if (!bytes.length) {
    throw new Error("音频文件是空的");
  }

  await mkdir(audioDir, { recursive: true });
  const filename = sanitizeFileName(audioFileName || `${song.title || "track"}.mp3`);
  await writeFile(path.join(audioDir, filename), bytes);

  const stored: StoredSong = {
    ...song,
    audioUrl: `/audio/${filename}`,
    isPermanentlySaved: true,
  };

  const courses = await readUserCourses();
  const index = courses.findIndex(
    (course) =>
      course.id === stored.id ||
      (course.title && course.title === stored.title && course.artist === stored.artist),
  );
  if (index >= 0) courses[index] = stored;
  else courses.unshift(stored);

  await mkdir(path.dirname(coursesPath), { recursive: true });
  await writeFile(coursesPath, JSON.stringify(courses, null, 2) + "\n");
  return stored;
}

export async function deleteUserCourse(id: string): Promise<void> {
  const courses = await readUserCourses();
  const target = courses.find((course) => course.id === id);
  const remaining = courses.filter((course) => course.id !== id);
  await mkdir(path.dirname(coursesPath), { recursive: true });
  await writeFile(coursesPath, JSON.stringify(remaining, null, 2) + "\n");

  const url = String(target?.audioUrl || "");
  if (!url.startsWith("/audio/")) return;
  const stillUsed = remaining.some((course) => course.audioUrl === url);
  if (stillUsed) return;

  const audioRoot = path.resolve(audioDir);
  const filePath = path.resolve(audioRoot, path.basename(url));
  if (!filePath.startsWith(audioRoot + path.sep)) return;
  await unlink(filePath).catch(() => undefined);
}
