import React from 'react';
import { Play, Sparkles, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { Song, LearningMode } from '../types';

interface PedagogyHeroProps {
  currentSong: Song;
  onStartLearn: () => void;
  onSelectMode: (mode: LearningMode) => void;
}

export const PedagogyHero: React.FC<PedagogyHeroProps> = ({
  currentSong,
  onStartLearn,
  onSelectMode,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column: Hero Copy & Value Proposition */}
        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
          <div>
            {/* Clean Unboxed Metadata without pills */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
              <span>音乐浸润式二语习得</span>
              <span aria-hidden="true">·</span>
              <span>当前精选: {currentSong.title}</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-700 font-semibold">{currentSong.grammarTheme}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              一首歌，只学一件事
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
              第一步先把 MV 看完，不用记语法。第二步再只看要学的那几句。
            </p>

            {/* 4-Step Pedagogical Methodology Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-100">
              <div
                onClick={() => onSelectMode('mv')}
                className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5">
                  <span className="font-mono text-amber-500">01.</span>
                  <span>先欣赏</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">先看 MV，不讲语法</p>
              </div>

              <div
                onClick={() => onSelectMode('grammar')}
                className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5">
                  <span className="font-mono text-amber-500">02.</span>
                  <span>就学这几句</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">只看要学的句子</p>
              </div>

              <div
                onClick={() => onSelectMode('karaoke')}
                className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5">
                  <span className="font-mono text-amber-500">03.</span>
                  <span>填空</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">歌词加一句自己的</p>
              </div>

              <div
                onClick={() => onSelectMode('builder')}
                className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5">
                  <span className="font-mono text-amber-500">04.</span>
                  <span>换成自己的事</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">AI 智能造句</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectMode('mv')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 transition-transform active:scale-95 shadow-sm cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
              <span>先欣赏</span>
            </button>

            <button
              onClick={() => onSelectMode('grammar')}
              className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              只看要学的句子
            </button>
          </div>
        </div>

        {/* Right Column: High Fidelity Atmospheric Image Slot */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100 border-t lg:border-t-0 lg:border-l border-slate-200 overflow-hidden">
          <img
            src="/src/assets/images/hero_lyric_grammar_1792579064655.jpg"
            alt="Learning English Grammar through Song Lyrics"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-xs font-mono tracking-wider uppercase text-amber-300">
              {currentSong.genre} · {currentSong.tempoBpm} BPM
            </span>
            <h3 className="text-lg font-bold mt-1">
              《{currentSong.title}》
            </h3>
            <p className="text-xs text-slate-200 mt-0.5 line-clamp-2">
              {currentSong.coreSummary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
