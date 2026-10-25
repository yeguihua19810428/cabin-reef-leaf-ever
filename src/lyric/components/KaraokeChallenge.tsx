import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Award, Sparkles, Volume2 } from 'lucide-react';
import { Song, ClozeQuestion } from '../types';
import { audioEngine } from '../utils/audioEngine';
import { focusLines, madeExample, spokenTip, wholeBlank } from '../utils/songFocus';

interface KaraokeChallengeProps {
  song: Song;
  onSpeakLine: (text: string) => void;
}

export const KaraokeChallenge: React.FC<KaraokeChallengeProps> = ({
  song,
  onSpeakLine,
}) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const example = madeExample(song);
  const questions: Array<{
    kind: 'lyric' | 'made';
    text: string;
    translation: string;
    grammarPoint: string;
    patternTemplate?: string;
    cloze: ClozeQuestion;
  }> = [
    ...focusLines(song)
      .filter((line) => line.cloze)
      .map((line) => {
        const whole = wholeBlank(song, line);
        return {
          kind: 'lyric' as const,
          text: whole.text,
          translation: whole.translation,
          grammarPoint: line.grammarPoint,
          patternTemplate: line.patternTemplate,
          cloze: { ...line.cloze!, sentenceWithBlank: whole.blank },
        };
      }),
    {
      kind: 'made',
      text: example.text,
      translation: '自编例句，不是歌词',
      grammarPoint: example.grammarPoint,
      patternTemplate: example.patternTemplate,
      cloze: example.cloze,
    },
  ];
  const current = questions[currentQuestionIdx];
  const cloze = current?.cloze;

  if (!isCompleted && !current) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 text-sm text-slate-500">
        还没有可以填空的句子。请先导入一首歌。
      </div>
    );
  }

  const handleSelectOption = (option: string) => {
    if (isAnswered || !cloze) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option.toLowerCase() === cloze.blankWord.toLowerCase();

    if (isCorrect) {
      setScore((prev) => prev + 100 + streak * 20);
      setStreak((prev) => prev + 1);
      audioEngine.playSuccessChime();
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
  };

  if (!questions.length) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
        <p className="text-sm text-slate-500">该歌曲暂未配置填空挑战题</p>
      </div>
    );
  }

  if (isCompleted) {
    const accuracy = Math.round((score / (questions.length * 100)) * 100);
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-xl mx-auto shadow-xs">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">
          恭喜，这首歌唱完这一下了。
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          唱完了。If 后面，你已经会自己说了。
        </p>

        <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl mb-6 text-left">
          <div>
            <span className="text-xs text-slate-500">最终得分</span>
            <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
              {score} 分
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500">通关正确率</span>
            <div className="text-2xl font-bold font-mono text-amber-600 tabular-nums">
              {Math.min(100, accuracy)}%
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>再练一次加深记忆</span>
          </button>
        </div>
      </div>
    );
  }

  const isCurrentCorrect =
    selectedAnswer &&
    cloze &&
    selectedAnswer.toLowerCase() === cloze.blankWord.toLowerCase();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs max-w-3xl mx-auto">
      {/* Top Progress & Score */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            跟着唱，把空填上
          </span>
          <div className="text-xs text-slate-500 mt-0.5">
            第 {currentQuestionIdx + 1} / {questions.length} 句
          </div>
        </div>

        <div className="flex items-center gap-4">
          {streak > 1 && (
            <div className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-bold animate-pulse">
              🔥 连对 {streak} 题!
            </div>
          )}
          <div className="text-right">
            <span className="text-[11px] text-slate-400">当前积分</span>
            <div className="text-base font-bold font-mono text-slate-900 tabular-nums">
              {score}
            </div>
          </div>
        </div>
      </div>

      {/* Lyric Sentence with Blank */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6 text-center relative overflow-hidden">
        <div className="text-xs font-medium text-amber-700 bg-amber-100/70 rounded px-2.5 py-1 inline-block mb-3">
          {current.kind === 'made' ? '换一句你自己的' : '歌里这句'}
        </div>

        {/* Big Blank Display */}
        <p className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-relaxed">
          {cloze?.sentenceWithBlank.split('_____').map((part, i, arr) => (
            <React.Fragment key={i}>
              <span>{part}</span>
              {i < arr.length - 1 && (
                <span
                  className={`inline-block mx-1.5 px-3 py-1 rounded-lg border-2 font-mono text-lg transition-all ${
                    isAnswered
                      ? isCurrentCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                        : 'border-rose-400 bg-rose-50 text-rose-800'
                      : 'border-dashed border-amber-400 bg-amber-50 text-amber-900 min-w-[70px]'
                  }`}
                >
                  {selectedAnswer || '_____'}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>

        {/* Translation & Pronounce */}
        <p className="text-xs text-slate-500 mt-3">
          {current.translation}
        </p>

        {/* Audio hint button */}
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={() => onSpeakLine(current.text)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5 text-amber-500" />
            <span>听原曲人声伴读</span>
          </button>
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {cloze?.options.map((opt) => {
          let optStyle =
            'border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 text-slate-800';

          if (isAnswered) {
            if (opt.toLowerCase() === cloze.blankWord.toLowerCase()) {
              optStyle =
                'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
            } else if (selectedAnswer === opt) {
              optStyle =
                'border-rose-400 bg-rose-50 text-rose-900';
            } else {
              optStyle = 'border-slate-200 opacity-50 text-slate-400';
            }
          }

          return (
            <button
              key={opt}
              disabled={isAnswered}
              onClick={() => handleSelectOption(opt)}
              className={`p-4 rounded-xl border text-sm font-semibold tracking-tight transition-all text-center cursor-pointer disabled:cursor-default flex items-center justify-center gap-2 ${optStyle}`}
            >
              <span>{opt}</span>
              {isAnswered && opt.toLowerCase() === cloze.blankWord.toLowerCase() && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              )}
              {isAnswered && selectedAnswer === opt && opt.toLowerCase() !== cloze.blankWord.toLowerCase() && (
                <XCircle className="w-4 h-4 text-rose-600" />
              )}
            </button>
          );
        })}
      </div>

      {/* Grammar Feedback and Next Step */}
      {isAnswered && (
        <div
          className={`p-4 rounded-xl border mb-6 transition-all ${
            isCurrentCorrect
              ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
              : 'bg-rose-50/60 border-rose-200 text-rose-950'
          }`}
        >
          <div className="flex items-start gap-3">
            {isCurrentCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <div className="text-xs font-bold mb-1">
                {isCurrentCorrect ? '太棒了，完全正确！' : `别灰心，正确答案是: ${cloze?.blankWord}`}
              </div>
              <p className="text-xs leading-relaxed opacity-90">
                {spokenTip(song)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>
              {currentQuestionIdx < questions.length - 1 ? '下一句挑战' : '查看最终成绩'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>
      )}
    </div>
  );
};
