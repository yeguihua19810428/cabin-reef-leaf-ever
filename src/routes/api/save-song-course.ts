import { createFileRoute } from "@tanstack/react-router";
import { saveUserCourse } from "@/server/courseLibrary";

export const Route = createFileRoute("/api/save-song-course")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            song?: Record<string, unknown>;
            audioBase64?: string;
            audioFileName?: string;
          };
          if (!body.song) {
            return Response.json({ success: false, error: "缺少歌曲数据" }, { status: 400 });
          }
          const song = await saveUserCourse(body.song, body.audioBase64, body.audioFileName);
          return Response.json({ success: true, song });
        } catch (error) {
          const message = error instanceof Error ? error.message : "保存失败";
          return Response.json({ success: false, error: message }, { status: 400 });
        }
      },
    },
  },
});
