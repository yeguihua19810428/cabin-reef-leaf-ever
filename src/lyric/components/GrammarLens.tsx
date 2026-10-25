import React from 'react';
import { Song, LyricLine } from '../types';
import { focusLines, sungAfter, spokenTip } from '../utils/songFocus';

interface GrammarLensProps {
  song: Song;
  selectedLineIndex: number;
  onSelectLine: (index: number) => void;
  onSpeakLine: (text: string) => void;
  onStartSentenceBuilder: (pattern: string) => void;
}

export const GrammarLens: React.FC<GrammarLensProps> = ({
  song,
  selectedLineIndex,
  onSelectLine,
  onSpeakLine,
  onStartSentenceBuilder,
}) => {
  const studyLines = focusLines(song);
  const selected = song.lines[selectedLineIndex];
  const currentLine: LyricLine | undefined =
    (selected && studyLines.includes(selected) ? selected : studyLines[0]) || song.lines[0];

  if (!currentLine) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 text-sm text-slate-500">
        还没有歌词。请先导入一首歌。
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Current Line Deep-Dive Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        {/* Navigation line picker */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <h3 className="text-sm font-bold text-slate-900">
              听这句
            </h3>
          </div>

          {/* Quick line selector buttons */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-sm py-1">
            {studyLines.map((line) => {
              const i = song.lines.indexOf(line);
              return (
              <button
                key={line.id || i}
                onClick={() => onSelectLine(i)}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer shrink-0 ${
                  line === currentLine
                    ? 'bg-amber-500 text-white font-bold shadow-xs'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {i + 1}
              </button>
              );
            })}
          </div>
        </div>

        {/* The Original Lyric Text with Speech affordance */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 mb-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xl font-bold text-slate-900 tracking-tight">
                “{currentLine.text}”
              </p>
              <p className="text-sm text-slate-500 mt-1.5">
                {currentLine.translation}
              </p>
            </div>
            <button
              onClick={() => onSpeakLine(currentLine.text)}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0"
            >
              🔊 慢速朗诵
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed mb-4">{spokenTip(song)}</p>
        {sungAfter(song, currentLine) && (
          <p className="text-sm text-slate-500 mb-4">
            接着唱：{sungAfter(song, currentLine)?.text}
          </p>
        )}
        <button
          onClick={() => onStartSentenceBuilder(currentLine.text)}
          className="w-full py-2 px-3 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg cursor-pointer"
        >
          我也用这句说说自己的事
        </button>
      </div>
    </div>
  );
};
