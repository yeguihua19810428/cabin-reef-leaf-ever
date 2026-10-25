import { createFileRoute } from "@tanstack/react-router";
import { readUserCourses } from "@/server/courseLibrary";

export const Route = createFileRoute("/api/saved-courses")({
  server: {
    handlers: {
      GET: async () => {
        const courses = await readUserCourses();
        return Response.json(
          { success: true, courses },
          { headers: { "cache-control": "no-store" } },
        );
      },
    },
  },
});
