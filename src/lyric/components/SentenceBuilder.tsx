import React, { useState } from 'react';
import { Send, Sparkles, CheckCircle, Volume2, ArrowRight } from 'lucide-react';
import { Song } from '../types';
import { focusLines, focusPoint, spokenTip, wholeBlank, ALREADY_POINT } from '../utils/songFocus';
import { localSentenceFeedback } from '../utils/sentenceCheck';

interface SentenceBuilderProps {
  song: Song;
  initialPattern?: string;
  onSpeakText: (text: string) => void;
}

interface Feedback {
  isCorrect: boolean;
  score: number;
  praise: string;
  grammarAnalysis: string;
  betterAlternative: string;
  tips: string;
}

export const SentenceBuilder: React.FC<SentenceBuilderProps> = ({
  song,
  initialPattern,
  onSpeakText,
}) => {
  const lyricLines = focusLines(song);
  const initialIndex = Math.max(
    0,
    lyricLines.findIndex((line) => line.patternTemplate && line.patternTemplate === initialPattern),
  );
  const [selectedIndex, setSelectedIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const selectedLine = lyricLines[selectedIndex] ?? lyricLines[0];
  const selectedWhole = selectedLine ? wholeBlank(song, selectedLine) : undefined;
  const selectedPattern = selectedLine?.patternTemplate || selectedLine?.grammarPoint || '';
  const [studentInput, setStudentInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentInput.trim()) return;

    setLoading(true);
    setErrorMessage('');
    setFeedback(null);

    try {
      const res = await fetch('/api/check-sentence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formula: selectedPattern,
          studentSentence: studentInput.trim(),
          promptContext: `歌曲《${song.title}》的主题: ${song.grammarTheme}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || '检查失败');
      }
      setFeedback(data.feedback);
    } catch (err: any) {
      console.warn('Network fetch error in SentenceBuilder, using offline local evaluator:', err);
      setFeedback(localSentenceFeedback(studentInput.trim(), `${selectedPattern}\n${song.grammarTheme}`));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs max-w-4xl mx-auto">
      {/* Title */}
      <div className="pb-4 mb-6 border-b border-slate-200">
        <span className="text-xs font-bold text-amber-600">
          换成你自己的事
        </span>
        <h3 className="text-lg font-bold text-slate-900 mt-1">
          歌里怎么唱，你就怎么说自己的事
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          {spokenTip(song)}
        </p>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          选一句来改
        </label>
        <div className="max-h-72 overflow-y-auto rounded-xl border border-slate-200">
          {lyricLines.map((line, idx) => (
            <button
              key={line.id || idx}
              type="button"
              onClick={() => {
                setSelectedIndex(idx);
                setFeedback(null);
              }}
              className={`w-full p-3 text-left border-b border-slate-100 last:border-b-0 cursor-pointer ${
                idx === selectedIndex ? 'bg-amber-50' : 'bg-white hover:bg-slate-50'
              }`}
            >
              <div className="text-sm font-semibold text-slate-900 leading-snug">
                {wholeBlank(song, line).text}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>就改这一句</span>
        </div>
        <p className="text-base font-semibold text-slate-900 leading-snug">
          {selectedWhole?.text || '这首歌还没有这样的句子'}
        </p>
        {selectedWhole?.translation && (
          <p className="mt-1 text-sm text-slate-500">{selectedWhole.translation}</p>
        )}
        <p className="mt-2 text-sm text-slate-600">{spokenTip(song)}</p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            写成你自己的
          </label>
          <textarea
            value={studentInput}
            onChange={(e) => setStudentInput(e.target.value)}
            rows={3}
            placeholder={focusPoint(song) === ALREADY_POINT ? '用 They say 说说别人已经讲过的事' : '写成完整的一句。If 后面当现在说，后面接上你会怎么做。'}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-white shadow-2xs"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => setStudentInput('')}
            className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            清空输入
          </button>

          <button
            type="submit"
            disabled={loading || !studentInput.trim()}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>在看</span>
              </>
            ) : (
              <>
                <span>看一看</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error message */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs mb-6">
          {errorMessage}
        </div>
      )}

      {/* AI Feedback Report */}
      {feedback && (
        <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200 transition-all space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-amber-200/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-slate-900">
                听起来怎么样
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-xs text-slate-500">像不像:</span>
              <span className="text-xl font-bold text-amber-600 tabular-nums">
                {feedback.score} 分
              </span>
            </div>
          </div>

          {/* Praise & Encouragement */}
          <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-lg p-3 border border-emerald-200">
            👏 {feedback.praise}
          </div>

          {/* Grammar Structural Analysis */}
          <div>
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              哪里可以再说顺一点
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {feedback.grammarAnalysis}
            </p>
          </div>

          {/* Native Alternative */}
          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-800">
                地道母语者润色版本
              </span>
              <button
                onClick={() => onSpeakText(feedback.betterAlternative)}
                className="text-[11px] text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>朗读发音</span>
              </button>
            </div>
            <div className="text-sm font-bold text-slate-900 italic">
              "{feedback.betterAlternative}"
            </div>
            {feedback.tips && (
              <p className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">
                💡 实用小贴士: {feedback.tips}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
