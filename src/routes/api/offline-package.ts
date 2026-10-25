import { createFileRoute } from "@tanstack/react-router";
import { buildOfflinePackage } from "@/server/offlinePackage";

export const Route = createFileRoute("/api/offline-package")({
  server: {
    handlers: {
      GET: async () => {
        const { zip, songCount } = await buildOfflinePackage();
        return new Response(new Uint8Array(zip), {
          headers: {
            "content-type": "application/zip",
            "content-disposition": "attachment; filename=\"LyricGrammar-students.zip\"",
            "cache-control": "no-store",
            "x-song-count": String(songCount),
          },
        });
      },
    },
  },
});
