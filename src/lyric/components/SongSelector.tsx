import React, { useState } from 'react';
import { Play, Sparkles, Trash2 } from 'lucide-react';
import { Song } from '../types';
import { previewPathPrefix } from '@/lib/preview-path-prefix';

interface SongSelectorProps {
  songs: Song[];
  selectedSongId: string;
  onSelectSong: (song: Song) => void;
  onPlaySong: (song: Song) => void;
  onDeleteSong: (song: Song) => void;
  onOpenImportModal: () => void;
}

export const SongSelector: React.FC<SongSelectorProps> = ({
  songs,
  selectedSongId,
  onSelectSong,
  onPlaySong,
  onDeleteSong,
  onOpenImportModal,
}) => {
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [downloadNote, setDownloadNote] = useState('');
  const downloadPackage = () => {
    const prefix =
      typeof window === 'undefined'
        ? ''
        : previewPathPrefix(window.location.hostname, window.location.pathname) ?? '';
    setDownloadNote('正在下载 LyricGrammar-students.zip，请看浏览器下载栏');
    window.location.assign(`${prefix}/api/offline-package`);
  };

  const filteredSongs =
    filterLevel === 'all'
      ? songs
      : songs.filter((s) => s.cefrLevel === filterLevel);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            我的歌曲
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            这里只保留你导入的歌
          </p>
        </div>
        <button
          type="button"
          onClick={downloadPackage}
          className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg whitespace-nowrap cursor-pointer"
        >
          导出学生包
        </button>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setFilterLevel('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filterLevel === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            全部曲目 ({songs.length})
          </button>
          <button
            onClick={() => setFilterLevel('A2')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filterLevel === 'A2'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            基础阶 A2
          </button>
          <button
            onClick={() => setFilterLevel('B1')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filterLevel === 'B1'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            进阶阶 B1
          </button>
        </div>
      </div>
      {downloadNote && <p className="mb-3 text-xs text-amber-800">{downloadNote}</p>}

      {/* Song Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSongs.map((song) => {
          const isSelected = song.id === selectedSongId;
          return (
            <div
              key={song.id}
              onClick={() => onSelectSong(song)}
              className={`group text-left p-3.5 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                isSelected
                  ? 'border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div>
                {/* Album Cover Art */}
                <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 mb-3 border border-slate-200">
                  <img
                    src={song.coverImage || '/src/assets/images/hero_lyric_grammar_1792579064655.jpg'}
                    alt={song.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    {song.isPermanentlySaved && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-600/90 text-white backdrop-blur-xs">
                        已固化
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-xs">
                      {song.cefrLevel}
                    </span>
                  </div>
                  {isSelected && (
                    <button
                      type="button"
                      aria-label={`播放 ${song.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlaySong(song);
                      }}
                      className="absolute inset-0 bg-amber-900/20 backdrop-blur-[1px] flex items-center justify-center cursor-pointer"
                    >
                      <span className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </span>
                    </button>
                  )}
                </div>

                {/* Song Meta */}
                <h3 className="text-sm font-bold text-slate-900 truncate">
                  {song.title}
                </h3>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5 mb-2">
                  <span>{song.artist}</span>
                  <span aria-hidden="true">·</span>
                  <span>{song.genre}</span>
                </div>

                {/* Grammar Theme Highlight */}
                <div className="text-xs font-medium text-amber-700 bg-amber-100/60 rounded px-2 py-1 line-clamp-1">
                  🎯 {song.grammarTheme}
                </div>
              </div>

              {/* Bottom stats */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{song.lines.length} 行歌词</span>
                <button
                  type="button"
                  aria-label={`删除 ${song.title}`}
                  title="删除这首歌"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSong(song);
                  }}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-rose-600 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>删除</span>
                </button>
              </div>
            </div>
          );
        })}

        {/* AI Upload/Analyze Card */}
        <div
          onClick={onOpenImportModal}
          className="border-2 border-dashed border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all cursor-pointer group min-h-[220px]"
        >
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 mb-1">
            导入 MP3 音频与 SRT 字幕
          </h4>
          <p className="text-xs text-slate-500 max-w-[200px]">
            绑定您的原声音频与时间轴，AI 自动生成专属语法教学课程
          </p>
        </div>
      </div>
    </div>
  );
};
