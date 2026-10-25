import React, { useRef, useEffect, useState } from 'react';
import {
  Volume2,
  Repeat1,
  Sparkles,
  Play,
  RotateCcw,
  SlidersHorizontal,
  Compass,
  ListMusic,
  Check,
} from 'lucide-react';
import { Song, LyricLine } from '../types';
import { focusLines, isStudyLine, spokenTip } from '../utils/songFocus';

function focusWord(song: Song, line: LyricLine, index: number): string | undefined {
  if (line.cloze?.blankWord) return line.cloze.blankWord;
  if (!isWillHalf(song, index)) return undefined;
  return line.text.match(/\b(I'll|I will|will)\b/)?.[0];
}

function isWillHalf(song: Song, index: number): boolean {
  const prev = song.lines[index - 1];
  const line = song.lines[index];
  return Boolean(prev && line && isStudyLine(song, prev) && /\b(i'll|will)\b/i.test(line.text));
}

function markFocus(text: string, word?: string) {
  if (!word) return text;
  const at = text.toLowerCase().indexOf(word.toLowerCase());
  if (at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark className="bg-amber-200/90 text-inherit rounded px-0.5">{text.slice(at, at + word.length)}</mark>
      {text.slice(at + word.length)}
    </>
  );
}

interface LyricReaderProps {
  song: Song;
  activeLineIndex: number;
  loopLineIndex: number | null;
  isPlaying: boolean;
  currentTime: number;
  syncOffset: number;
  onSelectLine: (index: number) => void;
  onSpeakLine: (text: string) => void;
  onToggleLoopLine: (index: number) => void;
  onSwitchToGrammarLens: (index: number) => void;
  onAdjustSyncOffset: (delta: number) => void;
  onResetSyncOffset: () => void;
}

export const LyricReader: React.FC<LyricReaderProps> = ({
  song,
  activeLineIndex,
  loopLineIndex,
  isPlaying,
  currentTime,
  syncOffset,
  onSelectLine,
  onSpeakLine,
  onToggleLoopLine,
  onSwitchToGrammarLens,
  onAdjustSyncOffset,
  onResetSyncOffset,
}) => {
  const [viewStyle, setViewStyle] = useState<'flow' | 'cards'>('flow');
  const [subtitleMode, setSubtitleMode] = useState<'bilingual' | 'english' | 'grammar'>('bilingual');
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [showSyncControls, setShowSyncControls] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeLineRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Smooth scroll active line into vertical center (like Apple Music & Spotify)
  useEffect(() => {
    if (isUserScrolling) return;

    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeLineIndex, isUserScrolling, viewStyle]);

  // Track user manual scrolling; resume auto-follow after 3.5 seconds of inactivity
  const handleUserScroll = () => {
    setIsUserScrolling(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      setIsUserScrolling(false);
    }, 3500);
  };

  const handleResumeAutoScroll = () => {
    setIsUserScrolling(false);
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const currentLine = song.lines[activeLineIndex];
  const nextLine = song.lines[activeLineIndex + 1];
  const calibratedTime = Math.max(0, currentTime + syncOffset);
  const isInterlude =
    currentLine &&
    calibratedTime > currentLine.endTime + 0.6 &&
    nextLine &&
    calibratedTime < nextLine.startTime - 0.4;

  const formatSeconds = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm relative">
      {/* Top Header Bar */}
      <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50/90 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Mode Title & Song Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
            <ListMusic className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900">
                {viewStyle === 'flow' ? '音乐App流式动态歌词' : '逐句教学研读卡片'}
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">
                全曲共 {song.lines.length} 行
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              第 {activeLineIndex + 1} 行 · {currentLine && isStudyLine(song, currentLine) ? '就学这句' : '先把歌听完'}
            </p>
          </div>
        </div>

        {/* Right Tools: View Switcher, Subtitle Switcher, Time Sync Calibrator */}
        <div className="flex items-center flex-wrap gap-2">
          {/* View Switcher: Apple Music Flow vs Card List */}
          <div className="flex items-center p-0.5 bg-slate-200/70 rounded-xl text-xs font-medium">
            <button
              onClick={() => setViewStyle('flow')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewStyle === 'flow'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🎵 音乐App流式</span>
            </button>
            <button
              onClick={() => setViewStyle('cards')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewStyle === 'cards'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>📖 就学这几句</span>
            </button>
          </div>

          {/* Subtitle Translation Mode */}
          <div className="flex items-center p-0.5 bg-slate-200/70 rounded-xl text-xs font-medium">
            <button
              onClick={() => setSubtitleMode('bilingual')}
              className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                subtitleMode === 'bilingual'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              英汉双语
            </button>
            <button
              onClick={() => setSubtitleMode('english')}
              className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                subtitleMode === 'english'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              纯英沉浸
            </button>
            <button
              onClick={() => setViewStyle('cards')}
              className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewStyle === 'cards'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              就学这几句
            </button>
          </div>

          {/* Time Sync Calibration Toggle Button */}
          <button
            onClick={() => setShowSyncControls(!showSyncControls)}
            title="词音对不齐？点击微调歌词时间轴"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
              showSyncControls || syncOffset !== 0
                ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-2xs'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {syncOffset === 0
                ? '词音对齐校准'
                : `已校准 ${syncOffset > 0 ? '+' : ''}${syncOffset.toFixed(1)}s`}
            </span>
          </button>
        </div>
      </div>

      {/* Sync Calibration Quick Bar (Solves "词和音部分对上部分对不上") */}
      {showSyncControls && (
        <div className="px-6 py-2.5 bg-amber-50/80 border-b border-amber-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-950 font-medium">
            <Compass className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>歌词时间轴毫秒微调：</strong>若原声早于歌词请调快(+)，歌词快于原声请调慢(-)
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono">
            <button
              onClick={() => onAdjustSyncOffset(-0.5)}
              className="px-2.5 py-1 rounded-md bg-white border border-amber-200 hover:bg-amber-100/60 text-slate-700 font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              -0.5s
            </button>
            <button
              onClick={() => onAdjustSyncOffset(-0.2)}
              className="px-2.5 py-1 rounded-md bg-white border border-amber-200 hover:bg-amber-100/60 text-slate-700 font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              -0.2s
            </button>

            <span className="px-3 py-1 rounded-md bg-amber-200/70 text-amber-950 font-bold">
              偏移: {syncOffset > 0 ? `+${syncOffset.toFixed(1)}s` : `${syncOffset.toFixed(1)}s`}
            </span>

            <button
              onClick={() => onAdjustSyncOffset(0.2)}
              className="px-2.5 py-1 rounded-md bg-white border border-amber-200 hover:bg-amber-100/60 text-slate-700 font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              +0.2s
            </button>
            <button
              onClick={() => onAdjustSyncOffset(0.5)}
              className="px-2.5 py-1 rounded-md bg-white border border-amber-200 hover:bg-amber-100/60 text-slate-700 font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              +0.5s
            </button>

            {syncOffset !== 0 && (
              <button
                onClick={onResetSyncOffset}
                title="重置偏移量为 0"
                className="ml-2 px-2.5 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-medium cursor-pointer transition-colors"
              >
                复位归零
              </button>
            )}
          </div>
        </div>
      )}

      {/* Floating Resume Auto-Scroll Button */}
      {isUserScrolling && viewStyle === 'flow' && (
        <button
          onClick={handleResumeAutoScroll}
          className="absolute bottom-6 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-lg shadow-amber-500/30 transition-transform active:scale-95 cursor-pointer animate-pulse"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>回到正在演唱处 (第 {activeLineIndex + 1} 行)</span>
        </button>
      )}

      {/* VIEW STYLE 1: Modern Music App Dynamic Karaoke Flow (Apple Music / Spotify Style) */}
      {viewStyle === 'flow' && (
        <div
          ref={containerRef}
          onScroll={handleUserScroll}
          className="px-4 md:px-16 py-8 md:py-20 min-h-0 md:min-h-[520px] max-h-[48vh] md:max-h-[640px] overflow-y-auto space-y-6 md:space-y-8 scroll-smooth relative select-none"
        >
          {/* Subtle musical pause indicator between verses */}
          {isInterlude && (
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-amber-700/80 bg-amber-50/80 border border-amber-200/60 max-w-sm mx-auto py-1.5 px-4 rounded-full mb-4 animate-pulse">
              <span>🎵 伴奏间奏中 · 准备跟唱下一句</span>
            </div>
          )}

          {song.lines.map((line, idx) => {
            const isActive = idx === activeLineIndex;
            const isLooping = loopLineIndex === idx;
            const distance = Math.abs(idx - activeLineIndex);

            // Dynamic opacity & scale based on distance from active line
            let opacityClass = 'opacity-30 hover:opacity-70 scale-98';
            if (isActive) {
              opacityClass = 'opacity-100 scale-100';
            } else if (distance === 1) {
              opacityClass = 'opacity-65 hover:opacity-90 scale-[0.99]';
            } else if (distance === 2) {
              opacityClass = 'opacity-45 hover:opacity-80 scale-[0.98]';
            }

            return (
              <div
                key={line.id}
                ref={isActive ? activeLineRef : null}
                onClick={() => onSelectLine(idx)}
                className={`transition-all duration-400 ease-out py-3 px-4 rounded-2xl cursor-pointer group relative ${opacityClass} ${
                  isActive
                    ? 'bg-amber-500/8 text-slate-950 font-bold ring-1 ring-amber-400/40 shadow-xs'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* English Main Lyric Text */}
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-xs font-mono tabular-nums shrink-0 transition-colors ${
                          isActive ? 'text-amber-600 font-bold' : 'text-slate-400'
                        }`}
                      >
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>

                      <p
                        className={`tracking-tight transition-all leading-snug ${
                          isActive
                            ? 'text-2xl md:text-3xl font-extrabold text-slate-900'
                            : 'text-lg md:text-xl font-semibold text-slate-700 group-hover:text-slate-900'
                        }`}
                      >
                        {markFocus(line.text, focusWord(song, line, idx))}
                      </p>
                    </div>

                    {/* Chinese Subtitle Translation */}
                    {subtitleMode !== 'english' && line.translation && (
                      <p
                        className={`mt-2 pl-7 text-xs md:text-sm transition-colors leading-relaxed ${
                          isActive
                            ? 'text-amber-900/90 font-medium'
                            : 'text-slate-500 group-hover:text-slate-700'
                        }`}
                      >
                        {line.translation}
                      </p>
                    )}

                    {/* Grammar Tags in Grammar View Mode */}
                    {(isStudyLine(song, line) || isWillHalf(song, idx)) && (
                      <p className="mt-1 pl-7 text-[11px] font-semibold text-amber-700">
                        {isStudyLine(song, line) ? '重点' : '重点：will 在这句'}
                      </p>
                    )}

                    {/* Active Singing Indicator with Karaoke Wave Bars */}
                    {isActive && isPlaying && (
                      <div className="mt-3 pl-7 flex items-center gap-2">
                        <div className="flex items-end gap-1 h-4">
                          <div className="w-1 bg-amber-500 rounded-full animate-bounce h-3 [animation-delay:-0.3s]" />
                          <div className="w-1 bg-amber-500 rounded-full animate-bounce h-4 [animation-delay:-0.15s]" />
                          <div className="w-1 bg-amber-500 rounded-full animate-bounce h-2" />
                          <div className="w-1 bg-amber-500 rounded-full animate-bounce h-3.5 [animation-delay:-0.4s]" />
                        </div>
                        <span className="text-xs text-amber-800 font-bold ml-1">
                          正在演唱 · 跟随节奏唱熟句子
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 ml-2">
                          [{formatSeconds(line.startTime)} - {formatSeconds(line.endTime)}]
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover Quick Action Buttons */}
                  <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectLine(idx);
                      }}
                      title="从这句开始播放"
                      className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100/60 rounded-lg transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSpeakLine(line.text);
                      }}
                      title="慢速纯正跟读发音"
                      className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100/60 rounded-lg transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLoopLine(idx);
                      }}
                      title={isLooping ? '取消单句循环' : '开启该句单句循环'}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        isLooping
                          ? 'bg-amber-200 text-amber-900 font-bold'
                          : 'text-slate-400 hover:text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      <Repeat1 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSwitchToGrammarLens(idx);
                      }}
                      title="在语法透镜中深度剖析该句成分"
                      className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW STYLE 2: Detailed Study Cards List */}
      {viewStyle === 'cards' && (
        <div className="px-6 py-6 max-h-[640px] overflow-y-auto space-y-4">
          {focusLines(song).map((line) => {
            const idx = song.lines.indexOf(line);
            const isActive = idx === activeLineIndex;
            const isLooping = loopLineIndex === idx;

            return (
              <div
                key={line.id}
                ref={isActive ? activeLineRef : null}
                onClick={() => onSelectLine(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'border-amber-400 bg-amber-50/70 shadow-sm ring-1 ring-amber-300'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-amber-700 mb-1">重点 · {spokenTip(song)}</p>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {markFocus(line.text, line.cloze?.blankWord)}
                    </h4>

                    {line.translation && (
                      <p className="text-xs text-slate-600 mb-3">
                        {line.translation}
                      </p>
                    )}

                    {line.explanation && (
                      <p className="text-xs text-slate-600 bg-white/70 p-3 rounded-lg border border-slate-150 leading-relaxed">
                        {line.explanation}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectLine(idx);
                      }}
                      className="p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-100/60 rounded-xl transition-colors cursor-pointer"
                      title="播放该句"
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSpeakLine(line.text);
                      }}
                      className="p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-100/60 rounded-xl transition-colors cursor-pointer"
                      title="发音朗读"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLoopLine(idx);
                      }}
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${
                        isLooping
                          ? 'bg-amber-200 text-amber-900 font-bold'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                      }`}
                      title={isLooping ? '取消循环' : '单句循环'}
                    >
                      <Repeat1 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
