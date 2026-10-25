import React, { useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Repeat1,
  SkipBack,
  SkipForward,
} from 'lucide-react';
import { Song } from '../types';

interface AudioPlayerBarProps {
  currentSong: Song;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  vocalGuide: boolean;
  loopLineIndex: number | null;
  activeLineIndex: number;
  onTogglePlay: () => void;
  onSeek: (seconds: number) => void;
  onChangeSpeed: (rate: number) => void;
  onChangeVolume: (volume: number) => void;
  onToggleVocalGuide: () => void;
  onToggleLoopLine: () => void;
  onPrevLine: () => void;
  onNextLine: () => void;
  onReset: () => void;
  playError?: string;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentSong,
  isPlaying,
  currentTime,
  duration,
  playbackRate,
  volume,
  vocalGuide,
  loopLineIndex,
  activeLineIndex,
  onTogglePlay,
  onSeek,
  onChangeSpeed,
  onChangeVolume,
  onToggleVocalGuide,
  onToggleLoopLine,
  onPrevLine,
  onNextLine,
  onReset,
  playError,
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const lastVolume = useRef(volume > 0 ? volume : 1);
  const handleVolumeInput = (next: number) => {
    if (next > 0) lastVolume.current = next;
    onChangeVolume(next);
  };
  const handleToggleMute = () => {
    if (volume > 0) {
      lastVolume.current = volume;
      onChangeVolume(0);
    } else {
      onChangeVolume(lastVolume.current || 1);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const currentLine = currentSong.lines[activeLineIndex];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 md:px-6 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:py-3 shadow-lg">
      {playError && (
        <p className="max-w-7xl mx-auto mb-2 text-xs text-rose-700">{playError}</p>
      )}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="hidden md:flex items-center gap-3.5 w-full md:w-1/4 min-w-0">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-sm">
            <img
              src={currentSong.coverImage || '/src/assets/images/hero_lyric_grammar_1792579064655.jpg'}
              alt={currentSong.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold text-slate-900 truncate">
                {currentSong.title}
              </h4>
              {currentSong.audioUrl ? (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-medium shrink-0">
                  原唱MP3
                </span>
              ) : (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-medium shrink-0">
                  和弦伴奏
                </span>
              )}
            </div>
            <div className="text-xs text-slate-500 truncate flex items-center gap-1.5">
              <span>{currentSong.artist}</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-600 font-medium truncate">
                {currentLine?.grammarPoint || currentSong.grammarTheme}
              </span>
            </div>
          </div>
        </div>

        {/* Central Controls & Scrubber */}
        <div className="flex flex-col items-center gap-2 w-full md:w-2/4">
          <div className="flex items-center gap-4">
            <button
              onClick={onReset}
              title="重新播放"
              className="p-1.5 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={onPrevLine}
              title="上一句"
              className="min-w-11 min-h-11 flex items-center justify-center text-slate-600 cursor-pointer"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={onTogglePlay}
              className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-transform active:scale-95 shadow-md cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={onNextLine}
              title="下一句"
              className="min-w-11 min-h-11 flex items-center justify-center text-slate-600 cursor-pointer"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={onToggleLoopLine}
              title={
                loopLineIndex !== null
                  ? '单句循环中 (重点突破该句语法)'
                  : '开启当前句单句循环'
              }
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                loopLineIndex !== null
                  ? 'bg-amber-100 text-amber-700'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Repeat1 className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Scrubber */}
          <div className="w-full flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 tabular-nums w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                onSeek(pos * duration);
              }}
              className="flex-1 h-3 md:h-2 bg-slate-200 rounded-full cursor-pointer relative overflow-hidden group"
            >
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-75 relative"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500 tabular-nums w-10">
              {formatTime(duration)}
            </span>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleToggleMute}
                title={volume === 0 ? '取消静音' : '静音'}
                className="p-1 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                {volume === 0 ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                aria-label="音量"
                onChange={(e) => handleVolumeInput(Number(e.target.value))}
                className="w-16 sm:w-24 h-1 accent-amber-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Speed & Vocal Guide Settings */}
        <div className="hidden md:flex items-center justify-center md:justify-end gap-2 w-full md:w-1/4 min-w-0">
          {/* Playback Rate segmented buttons */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            {[0.75, 1.0, 1.25].map((speed) => (
              <button
                key={speed}
                onClick={() => onChangeSpeed(speed)}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                  playbackRate === speed
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {speed === 0.75 ? '0.75x慢' : `${speed}x`}
              </button>
            ))}
          </div>

          {/* Vocal Guide Toggle */}
          <button
            onClick={onToggleVocalGuide}
            title={vocalGuide ? '人声跟唱领读：已开启' : '人声跟唱领读：已静音'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
              vocalGuide
                ? 'bg-amber-50 border-amber-200 text-amber-800'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-700'
            }`}
          >
            {vocalGuide ? (
              <Volume2 className="w-3.5 h-3.5 text-amber-600" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            )}
            <span className="hidden sm:inline">人声伴读</span>
          </button>
        </div>
      </div>
    </div>
  );
};
