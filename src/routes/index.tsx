import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { previewPathPrefix } from "@/lib/preview-path-prefix";

const loadPhonePage = createServerFn({ method: "POST" }).handler(async () => {
  const { renderStudentHtml } = await import("@/server/offlinePackage");
  return renderStudentHtml(true);
});

export const Route = createFileRoute("/")({ component: PhonePreview });

function PhonePreview() {
  const [html, setHtml] = useState("");
  const [note, setNote] = useState("");
  const [keyOpen, setKeyOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    let alive = true;
    loadPhonePage()
      .then((page) => {
        if (alive) setHtml(page);
      })
      .catch(() => {
        if (alive) setNote("手机页面没有打开，再试一次。");
      });
    return () => {
      alive = false;
    };
  }, []);

  const base = () => previewPathPrefix(window.location.hostname, window.location.pathname) ?? "";

  const download = () => {
    setNote("正在下载。手机上打开的就是中间这一页。");
    window.location.assign(`${base()}/api/offline-package`);
  };

  const saveKey = async () => {
    const res = await fetch(`${base()}/api/deepseek-key`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ apiKey: apiKey.trim() }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setNote(data.error || "钥匙没存上");
      return;
    }
    setApiKey("");
    setKeyOpen(false);
    const page = await loadPhonePage();
    setHtml(page);
    setNote(data.configured ? "钥匙已记下" : "已清掉钥匙");
  };

  return (
    <div className="min-h-dvh bg-neutral-200 text-slate-900">
      <div className="mx-auto flex w-full max-w-[390px] items-center justify-between gap-2 px-3 py-2">
        <p className="text-xs text-slate-600">中间这一页和手机上一样</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => setKeyOpen((open) => !open)} className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold">
            DeepSeek
          </button>
          <button type="button" onClick={download} className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
            导出
          </button>
        </div>
      </div>
      {keyOpen && (
        <form
          className="mx-auto flex w-full max-w-[390px] gap-2 px-3 pb-2"
          onSubmit={(event) => {
            event.preventDefault();
            void saveKey();
          }}
        >
          <input
            type="password"
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
            placeholder="sk- 钥匙"
            autoComplete="off"
            className="min-h-10 flex-1 rounded-lg border border-slate-300 px-3 text-sm"
          />
          <button type="submit" className="rounded-lg bg-slate-900 px-3 text-xs font-semibold text-white">
            保存
          </button>
        </form>
      )}
      {note && <p className="mx-auto w-full max-w-[390px] px-3 pb-2 text-xs text-amber-800">{note}</p>}
      <div className="mx-auto h-[calc(100dvh-48px)] w-full max-w-[390px] overflow-hidden bg-white shadow-xl">
        {html ? (
          <iframe title="手机上的页面" srcDoc={html} className="h-full w-full border-0" />
        ) : (
          <p className="p-4 text-sm text-slate-500">{note || "正在打开和手机一样的页面"}</p>
        )}
      </div>
    </div>
  );
}
