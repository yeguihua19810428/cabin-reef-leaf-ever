import { createFileRoute } from "@tanstack/react-router";
import { deleteUserCourse } from "@/server/courseLibrary";

export const Route = createFileRoute("/api/delete-song")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { id?: string };
          if (!body.id) {
            return Response.json({ success: false, error: "缺少歌曲" }, { status: 400 });
          }
          await deleteUserCourse(body.id);
          return Response.json({ success: true });
        } catch (error) {
          const message = error instanceof Error ? error.message : "删除失败";
          return Response.json({ success: false, error: message }, { status: 400 });
        }
      },
    },
  },
});
