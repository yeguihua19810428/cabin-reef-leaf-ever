import React, { useEffect, useRef } from 'react';
import { Song } from '../types';

const CLIPS: Array<{ match: RegExp; src: string }> = [
  { match: /talking to the moon/i, src: '/mv/moon-fast.mp4' },
  { match: /count on me/i, src: '/mv/count-on-me-fast.mp4' },
];

interface LyricMvProps {
  song: Song;
  isPlaying: boolean;
  currentTime: number;
  activeLineIndex: number;
  onTogglePlay: () => void;
  onStartLesson: () => void;
}

export const LyricMv: React.FC<LyricMvProps> = ({
  song,
  isPlaying,
  currentTime,
  activeLineIndex,
  onTogglePlay,
  onStartLesson,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const line = song.lines[activeLineIndex];
  const clip = CLIPS.find((item) => item.match.test(song.title));

  const playClip = () => {
    const media = videoRef.current;
    if (!media) return;
    media.muted = true;
    if (Math.abs(media.currentTime - currentTime) > 1.2 && media.readyState >= 1) {
      media.currentTime = currentTime;
    }
    media.play().catch(() => undefined);
  };

  useEffect(() => {
    const media = videoRef.current;
    if (!media || !clip) return;
    if (!isPlaying) {
      media.pause();
      return;
    }
    if (media.readyState >= 1 && Math.abs(media.currentTime - currentTime) > 1.2) {
      media.currentTime = currentTime;
    }
    if (media.paused) playClip();
  }, [isPlaying, currentTime, clip, song.id]);

  const toggle = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      playClip();
    }
    onTogglePlay();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-amber-700">第一步 · 先欣赏</p>
          <p className="text-sm text-slate-500">先把这首看完。语法等一下再讲。</p>
        </div>
        <button
          type="button"
          onClick={onStartLesson}
          className="shrink-0 min-h-11 rounded-full bg-slate-900 px-4 text-sm font-semibold text-white cursor-pointer"
        >
          第二步 · 看这几句
        </button>
      </div>
      <div
        className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-slate-950 shadow-lg aspect-[9/16] cursor-pointer"
        onClick={toggle}
      >
        {clip ? (
          <video
            key={clip.src}
            ref={videoRef}
            src={clip.src}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggle();
          }}
          className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 cursor-pointer"
        >
          {isPlaying ? '暂停' : '播放'}
        </button>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-[11px] tracking-wide text-amber-100/90">
            {song.artist} · {song.title}
          </p>
          <p className="mt-2 text-xl font-bold leading-snug [text-wrap:balance]">
            {line?.text || '按播放'}
          </p>
        </div>
      </div>
    </div>
  );
};
