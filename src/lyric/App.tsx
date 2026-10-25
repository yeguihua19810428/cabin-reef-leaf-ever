import React, { useState, useEffect, useRef } from 'react';
import { FolderDown } from 'lucide-react';
import bundledCourses from './data/userCourses.json';
import { Song, LearningMode } from './types';
import { audioEngine } from './utils/audioEngine';
import { Header } from './components/Header';
import { PedagogyHero } from './components/PedagogyHero';
import { SongSelector } from './components/SongSelector';
import { LyricReader } from './components/LyricReader';
import { GrammarLens } from './components/GrammarLens';
import { KaraokeChallenge } from './components/KaraokeChallenge';
import { SentenceBuilder } from './components/SentenceBuilder';
import { SongImportModal } from './components/SongImportModal';
import { LyricMv } from './components/LyricMv';
import { AudioPlayerBar } from './components/AudioPlayerBar';

const savedCourses = (Array.isArray(bundledCourses) ? bundledCourses : []) as Song[];
const initialSongs = savedCourses;

const EMPTY_SONG: Song = {
  id: 'empty-library',
  title: '还没有歌曲',
  artist: '请先导入',
  cefrLevel: 'A2',
  genre: '导入的原唱',
  grammarTheme: '导入 MP3 和歌词后才会出现在这里',
  tempoBpm: 0,
  keySignature: '',
  coreSummary: '原来的示例歌已经删掉。导入你的歌，再导出学生包。',
  keyTakeawayPatterns: [],
  lines: [],
};

export default function App() {
  const [songs, setSongs] = useState<Song[]>(initialSongs);
  const [currentSong, setCurrentSong] = useState<Song>(initialSongs[0] ?? EMPTY_SONG);
  const [activeMode, setActiveMode] = useState<LearningMode>('mv');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [volume, setVolume] = useState(1);
  const [vocalGuide, setVocalGuide] = useState(false);
  const [loopLineIndex, setLoopLineIndex] = useState<number | null>(null);
  const [selectedGrammarLineIdx, setSelectedGrammarLineIdx] = useState(0);
  const [builderPattern, setBuilderPattern] = useState<string | undefined>(undefined);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [playError, setPlayError] = useState("");
  const [syncOffset, setSyncOffset] = useState<number>(0);
  const playAfterSelect = useRef(false);

  // Load permanently saved courses from data/courses.json on mount
  useEffect(() => {
    async function loadSavedCourses() {
      try {
        const res = await fetch('/api/saved-courses');
        const data = await res.json();
        if (data.success && Array.isArray(data.courses) && data.courses.length > 0) {
          setSongs((prev) => {
            const existingIds = new Set(prev.map((s) => s.id));
            const newCourses = data.courses.filter((c: Song) => !existingIds.has(c.id));
            return [...newCourses, ...prev];
          });
          setCurrentSong((prev) => (prev.id === EMPTY_SONG.id ? data.courses[0] : prev));
        }
      } catch (err) {
        console.warn('Could not load saved courses from disk:', err);
      }
    }
    loadSavedCourses();
  }, []);

  // Export current song course as offline JSON package
  const handleExportCoursePackage = () => {
    const jsonStr = JSON.stringify(currentSong, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `LyricGrammar_${currentSong.title.replace(/\s+/g, '_')}_CoursePackage.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Set up song in audio engine on change
  useEffect(() => {
    audioEngine.setSong(currentSong);
    const hasFile = Boolean(currentSong.audioUrl);
    if (hasFile) {
      setVocalGuide(false);
      audioEngine.setVocalGuide(false);
    } else {
      setVocalGuide(true);
      audioEngine.setVocalGuide(true);
    }
    const lastLine = currentSong.lines[currentSong.lines.length - 1];
    const initialDuration = currentSong.duration || (lastLine ? Math.max(lastLine.endTime + 2, 60) : 180);
    setDuration(initialDuration);
    setCurrentTime(0);
    setSyncOffset(0);
    if (playAfterSelect.current) {
      playAfterSelect.current = false;
      audioEngine.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
    setSelectedGrammarLineIdx(0);
  }, [currentSong]);

  // Audio engine time & duration update callbacks
  useEffect(() => {
    audioEngine.onTimeUpdate((time, dur) => {
      setCurrentTime(time);
      if (dur && Number.isFinite(dur) && dur > 0) {
        setDuration(dur);
      }
    });

    audioEngine.onDurationChange((dur) => {
      if (dur && Number.isFinite(dur) && dur > 0) {
        setDuration(dur);
      }
    });

    audioEngine.onEnded(() => {
      setIsPlaying(false);
    });

    audioEngine.onPlayError((message) => {
      setIsPlaying(false);
      setPlayError(message);
    });
  }, []);

  // Calibrated time considering user sync offset (+/- seconds)
  const calibratedTime = Math.max(0, currentTime + syncOffset);

  // Monotonic music player lyric tracking algorithm:
  // Finds the current singing line based on startTime and avoids snapping back to 0 during inter-line breaks
  let activeLineIndex = 0;
  if (currentSong.lines && currentSong.lines.length > 0) {
    let candidate = 0;
    for (let i = 0; i < currentSong.lines.length; i++) {
      if (calibratedTime >= currentSong.lines[i].startTime) {
        candidate = i;
      } else {
        break;
      }
    }
    activeLineIndex = candidate;
  }

  const handleAdjustSyncOffset = (delta: number) => {
    setSyncOffset((prev) => Math.round((prev + delta) * 10) / 10);
  };

  const handleResetSyncOffset = () => {
    setSyncOffset(0);
  };

  // Controls
  const handleTogglePlay = () => {
    setPlayError("");
    if (isPlaying) {
      audioEngine.pause();
      setIsPlaying(false);
    } else {
      audioEngine.play();
      setIsPlaying(true);
    }
  };

  const handlePlaySong = (song: Song) => {
    setPlayError("");
    if (song.id !== currentSong.id) {
      playAfterSelect.current = true;
      setCurrentSong(song);
      return;
    }
    handleTogglePlay();
  };

  const handleSeek = (seconds: number) => {
    audioEngine.seek(seconds);
    setCurrentTime(seconds);
  };

  const handleChangeSpeed = (speed: number) => {
    setPlaybackRate(speed);
    audioEngine.setPlaybackRate(speed);
  };

  const handleChangeVolume = (value: number) => {
    const next = Math.max(0, Math.min(1, value));
    setVolume(next);
    audioEngine.setVolume(next);
  };

  const handleToggleVocalGuide = () => {
    const nextVal = !vocalGuide;
    setVocalGuide(nextVal);
    audioEngine.setVocalGuide(nextVal);
  };

  const handleToggleLoopLine = (index?: number) => {
    const targetIdx = index !== undefined ? index : activeLineIndex;
    if (loopLineIndex === targetIdx) {
      setLoopLineIndex(null);
      audioEngine.setLoopLine(null);
    } else {
      setLoopLineIndex(targetIdx);
      audioEngine.setLoopLine(targetIdx);
    }
  };

  const handlePrevLine = () => {
    const prevIdx = Math.max(0, activeLineIndex - 1);
    const targetLine = currentSong.lines[prevIdx];
    if (targetLine) {
      handleSeek(Math.max(0, targetLine.startTime - syncOffset));
    }
  };

  const handleNextLine = () => {
    const nextIdx = Math.min(currentSong.lines.length - 1, activeLineIndex + 1);
    const targetLine = currentSong.lines[nextIdx];
    if (targetLine) {
      handleSeek(Math.max(0, targetLine.startTime - syncOffset));
    }
  };

  const handleReset = () => {
    audioEngine.stop();
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSpeakLine = (text: string) => {
    audioEngine.speakLine(text);
  };

  const handleSwitchToGrammarLens = (lineIdx: number) => {
    setSelectedGrammarLineIdx(lineIdx);
    chooseMode('grammar');
  };

  const handleStartSentenceBuilder = (pattern: string) => {
    setBuilderPattern(pattern);
    chooseMode('builder');
  };

  const chooseMode = (mode: LearningMode) => {
    if (mode === 'mv' && !isPlaying) {
      handleTogglePlay();
    }
    setActiveMode(mode);
    window.requestAnimationFrame(() => {
      document.getElementById("learn-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleSongImported = (newSong: Song) => {
    setSongs((prev) => [newSong, ...prev]);
    setCurrentSong(newSong);
    setActiveMode('listen');
  };

  const handleDeleteSong = async (song: Song) => {
    const confirmed = window.confirm(`删除《${song.title}》？歌单和学生包里都不会再有这首。`);
    if (!confirmed) return;

    try {
      const res = await fetch('/api/delete-song', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: song.id }),
      });
      const savedOnDisk = Boolean(song.isPermanentlySaved || song.audioUrl?.startsWith('/audio/'));
      if (!res.ok && savedOnDisk) {
        window.alert('没有从保存的歌单里删掉，请再试一次。');
        return;
      }
    } catch (err) {
      console.warn('Could not delete saved course:', err);
      if (song.isPermanentlySaved || song.audioUrl?.startsWith('/audio/')) {
        window.alert('没有从保存的歌单里删掉，请再试一次。');
        return;
      }
    }

    const remaining = songs.filter((item) => item.id !== song.id);
    setSongs(remaining);
    if (currentSong.id === song.id) {
      audioEngine.stop();
      setIsPlaying(false);
      setCurrentSong(remaining[0] ?? EMPTY_SONG);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-[calc(9.5rem+env(safe-area-inset-bottom))] md:pb-28 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Header */}
      <Header
        activeMode={activeMode}
        onSelectMode={chooseMode}
        onOpenImport={() => setIsImportModalOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-8">
        <div className="hidden lg:block">
        <PedagogyHero
          currentSong={currentSong}
          onStartLearn={handleTogglePlay}
          onSelectMode={chooseMode}
        />
        </div>

        <div id="learn-panel" className="mb-4 md:mb-6 scroll-mt-20">
          <div className="md:hidden space-y-2">
            {songs.length > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {songs.map((song) => (
                  <button
                    key={song.id}
                    type="button"
                    onClick={() => setCurrentSong(song)}
                    className={`min-h-11 rounded-2xl px-3 text-sm font-semibold cursor-pointer ${
                      song.id === currentSong.id
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-800'
                    }`}
                  >
                    {song.title}
                  </button>
                ))}
              </div>
            )}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => chooseMode('mv')}
                className={`min-h-12 rounded-2xl text-sm font-semibold cursor-pointer ${
                  activeMode === 'mv' ? 'bg-amber-500 text-white' : 'bg-white border border-slate-200 text-slate-800'
                }`}
              >
                先欣赏
              </button>
              <button
                type="button"
                onClick={() => chooseMode(activeMode === 'mv' ? 'grammar' : activeMode)}
                className={`min-h-12 rounded-2xl text-sm font-semibold cursor-pointer ${
                  activeMode !== 'mv' ? 'bg-amber-500 text-white' : 'bg-white border border-slate-200 text-slate-800'
                }`}
              >
                再学这几句
              </button>
            </div>
            {activeMode !== 'mv' && (
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    ['listen', '看歌词'],
                    ['grammar', '就学这几句'],
                    ['karaoke', '填空'],
                    ['builder', '换成自己的事'],
                  ] as const
                ).map(([mode, label]) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => chooseMode(mode)}
                    className={`min-h-11 rounded-xl text-sm font-semibold cursor-pointer ${
                      activeMode === mode
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs overflow-x-auto max-w-full min-w-0">
            <button
              onClick={() => chooseMode('mv')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeMode === 'mv'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. 先欣赏
            </button>
            <button
              onClick={() => chooseMode('listen')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeMode === 'listen'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              01. 歌词沉浸赏析
            </button>
            <button
              onClick={() => chooseMode('grammar')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeMode === 'grammar'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              02. 就学这几句
            </button>
            <button
              onClick={() => chooseMode('karaoke')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeMode === 'karaoke'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              03. 填空
            </button>
            <button
              onClick={() => chooseMode('builder')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeMode === 'builder'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              04. 换成自己的事
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span>正在学习:</span>
              <span className="font-semibold text-slate-800">
                《{currentSong.title}》
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-700 font-medium">{currentSong.grammarTheme}</span>
            </div>

            <button
              onClick={handleExportCoursePackage}
              title="将本歌曲及其完整语法课件导出为单文件 .json 离线包，分发后完全免 AI 即开即用"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <FolderDown className="w-3.5 h-3.5 text-amber-600" />
              <span>导出离线课件包 (.json)</span>
            </button>
          </div>
          </div>
        </div>

        {/* Active Learning Sandbox Mode */}
        <div className="mb-12">
          {activeMode === 'mv' && (
            <LyricMv
              song={currentSong}
              isPlaying={isPlaying}
              currentTime={currentTime}
              activeLineIndex={activeLineIndex}
              onTogglePlay={handleTogglePlay}
              onStartLesson={() => chooseMode('grammar')}
            />
          )}

          {activeMode === 'listen' && (
            <LyricReader
              song={currentSong}
              activeLineIndex={activeLineIndex}
              loopLineIndex={loopLineIndex}
              isPlaying={isPlaying}
              currentTime={currentTime}
              syncOffset={syncOffset}
              onSelectLine={(idx) => {
                const targetLine = currentSong.lines[idx];
                if (targetLine) {
                  handleSeek(Math.max(0, targetLine.startTime - syncOffset));
                  if (!isPlaying) handleTogglePlay();
                }
              }}
              onSpeakLine={handleSpeakLine}
              onToggleLoopLine={handleToggleLoopLine}
              onSwitchToGrammarLens={handleSwitchToGrammarLens}
              onAdjustSyncOffset={handleAdjustSyncOffset}
              onResetSyncOffset={handleResetSyncOffset}
            />
          )}

          {activeMode === 'grammar' && (
            <GrammarLens
              song={currentSong}
              selectedLineIndex={selectedGrammarLineIdx}
              onSelectLine={setSelectedGrammarLineIdx}
              onSpeakLine={handleSpeakLine}
              onStartSentenceBuilder={handleStartSentenceBuilder}
            />
          )}

          {activeMode === 'karaoke' && (
            <KaraokeChallenge
              song={currentSong}
              onSpeakLine={handleSpeakLine}
            />
          )}

          {activeMode === 'builder' && (
            <SentenceBuilder
              song={currentSong}
              initialPattern={builderPattern}
              onSpeakText={handleSpeakLine}
            />
          )}
        </div>

        {/* Curriculum Song Library */}
        <div className="hidden md:block">
        <SongSelector
          songs={songs}
          selectedSongId={currentSong.id}
          onSelectSong={(s) => {
            setCurrentSong(s);
          }}
          onPlaySong={handlePlaySong}
          onDeleteSong={handleDeleteSong}
          onOpenImportModal={() => setIsImportModalOpen(true)}
        />
        </div>
      </main>

      {/* AI Song Import Modal */}
      <SongImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onSongImported={handleSongImported}
      />

      <audio
        ref={(node) => {
          if (node) audioEngine.attachElement(node);
        }}
        preload="auto"
        playsInline
        className="sr-only"
      />
      {/* Sticky Bottom Audio Control Bar */}
      <AudioPlayerBar
        currentSong={currentSong}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        playbackRate={playbackRate}
        volume={volume}
        vocalGuide={vocalGuide}
        loopLineIndex={loopLineIndex}
        activeLineIndex={activeLineIndex}
        onTogglePlay={handleTogglePlay}
        onSeek={handleSeek}
        onChangeSpeed={handleChangeSpeed}
        onChangeVolume={handleChangeVolume}
        onToggleVocalGuide={handleToggleVocalGuide}
        onToggleLoopLine={() => handleToggleLoopLine()}
        onPrevLine={handlePrevLine}
        onNextLine={handleNextLine}
        onReset={handleReset}
        playError={playError}
      />
    </div>
  );
}
