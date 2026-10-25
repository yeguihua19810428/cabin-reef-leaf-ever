import React, { useState } from 'react';
import { Music, Sparkles } from 'lucide-react';
import { LearningMode } from '../types';
import { previewPathPrefix } from '@/lib/preview-path-prefix';

interface HeaderProps {
  activeMode: LearningMode;
  onSelectMode: (mode: LearningMode) => void;
  onOpenImport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeMode,
  onSelectMode,
  onOpenImport,
}) => {
  const [downloadNote, setDownloadNote] = useState('');
  const [moreOpen, setMoreOpen] = useState(false);
  const [keyOpen, setKeyOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const saveDeepseekKey = async () => {
    const prefix =
      typeof window === 'undefined'
        ? ''
        : previewPathPrefix(window.location.hostname, window.location.pathname) ?? '';
    const res = await fetch(`${prefix}/api/deepseek-key`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ apiKey: apiKey.trim() }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setDownloadNote(data.error || '钥匙没存上');
      return;
    }
    setApiKey('');
    setKeyOpen(false);
    setDownloadNote(
      data.configured
        ? `已记下 DeepSeek，末尾 ${data.tail}。再导出的学生包，有网就会去问它，不会问我。`
        : '已清掉 DeepSeek 钥匙',
    );
  };
  const downloadPackage = () => {
    const prefix =
      typeof window === 'undefined'
        ? ''
        : previewPathPrefix(window.location.hostname, window.location.pathname) ?? '';
    setDownloadNote('正在下载 LyricGrammar-students.zip，请看浏览器下载栏');
    window.location.assign(`${prefix}/api/offline-package`);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 py-3">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
            <Music className="w-5 h-5" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
            LyricGrammar
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => onSelectMode('mv')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeMode === 'mv'
                ? 'text-amber-600 font-semibold border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            先欣赏
          </button>
          <button
            onClick={() => onSelectMode('listen')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeMode === 'listen'
                ? 'text-amber-600 font-semibold border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            歌词沉浸赏析
          </button>
          <button
            onClick={() => onSelectMode('grammar')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeMode === 'grammar'
                ? 'text-amber-600 font-semibold border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            就学这几句
          </button>
          <button
            onClick={() => onSelectMode('karaoke')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeMode === 'karaoke'
                ? 'text-amber-600 font-semibold border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            填空
          </button>
          <button
            onClick={() => onSelectMode('builder')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeMode === 'builder'
                ? 'text-amber-600 font-semibold border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            换成自己的事
          </button>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => setKeyOpen((open) => !open)}
              className="px-3 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              DeepSeek
            </button>
            <button
              type="button"
              onClick={downloadPackage}
              className="px-3 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              导出学生包
            </button>
            <button
              onClick={onOpenImport}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>导入</span>
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMoreOpen((open) => !open)}
            className="md:hidden min-h-11 px-3 rounded-lg border border-slate-200 text-sm font-semibold text-slate-800 cursor-pointer"
          >
            备课
          </button>
        </div>
      </div>
      {moreOpen && (
        <div className="md:hidden grid grid-cols-1 gap-2 px-3 pb-3">
          <button type="button" onClick={onOpenImport} className="min-h-11 rounded-xl bg-slate-900 text-white text-sm font-semibold cursor-pointer">导入歌曲</button>
          <button type="button" onClick={() => setKeyOpen((open) => !open)} className="min-h-11 rounded-xl border border-slate-200 text-sm font-semibold cursor-pointer">DeepSeek 钥匙</button>
          <button type="button" onClick={downloadPackage} className="min-h-11 rounded-xl border border-slate-200 text-sm font-semibold cursor-pointer">导出学生包</button>
        </div>
      )}
      {keyOpen && (
        <form
          className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-2 px-3 pb-3"
          onSubmit={(event) => {
            event.preventDefault();
            void saveDeepseekKey();
          }}
        >
          <input
            type="password"
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
            placeholder="贴上 DeepSeek 的 sk- 钥匙"
            autoComplete="off"
            className="min-h-11 flex-1 rounded-xl border border-slate-200 px-3 text-sm"
          />
          <button type="submit" className="min-h-11 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white cursor-pointer">
            保存
          </button>
        </form>
      )}
      {downloadNote && (
        <p className="max-w-7xl mx-auto px-4 pb-2 text-xs text-amber-800">{downloadNote}</p>
      )}
    </header>
  );
};
