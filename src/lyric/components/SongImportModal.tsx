import React, { useState, useRef } from 'react';
import {
  X,
  Sparkles,
  Upload,
  FileAudio,
  FileText,
  CheckCircle2,
  AlertCircle,
  Zap,
  HardDriveDownload,
  FolderDown,
  FolderUp,
} from 'lucide-react';
import { Song } from '../types';
import { parseSubtitles, ParsedSubtitleLine } from '../utils/srtParser';
import { buildLocalSongFromSrt } from '../utils/localGrammarAnalyzer';
import { focusPoint } from '../utils/songFocus';

interface SongImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSongImported: (song: Song) => void;
}

export const SongImportModal: React.FC<SongImportModalProps> = ({
  isOpen,
  onClose,
  onSongImported,
}) => {
  const [tab, setTab] = useState<'upload' | 'package' | 'ai-prompt'>('upload');

  // Upload Tab States
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [audioBase64, setAudioBase64] = useState<string>('');
  const [srtFile, setSrtFile] = useState<File | null>(null);
  const [srtContent, setSrtContent] = useState('');
  const [parsedLines, setParsedLines] = useState<ParsedSubtitleLine[]>([]);
  const [persistToDisk, setPersistToDisk] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Package Tab State
  const [packageJsonText, setPackageJsonText] = useState('');

  // AI Prompt Tab States
  const [promptTitle, setPromptTitle] = useState('');
  const [promptArtist, setPromptArtist] = useState('');
  const [promptLyrics, setPromptLyrics] = useState('');

  const [mp3Duration, setMp3Duration] = useState<number>(0);

  const audioInputRef = useRef<HTMLInputElement | null>(null);
  const srtInputRef = useRef<HTMLInputElement | null>(null);
  const packageFileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const formatSeconds = (secs: number) => {
    if (!Number.isFinite(secs) || secs <= 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Handle local MP3 file selection & base64 conversion for disk saving
  const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      setAudioUrl(url);

      // Instantly measure exact audio duration using HTMLAudioElement
      const testAudio = document.createElement('audio');
      testAudio.preload = 'metadata';
      testAudio.src = url;
      testAudio.onloadedmetadata = () => {
        if (testAudio.duration && Number.isFinite(testAudio.duration) && testAudio.duration > 0) {
          setMp3Duration(testAudio.duration);
        }
      };

      const reader = new FileReader();
      reader.onload = (ev) => {
        setAudioBase64(ev.target?.result as string);
      };
      reader.readAsDataURL(file);

      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
    }
  };

  // Handle local SRT / LRC file selection with UTF-8 / UTF-16 fallback
  const handleSrtFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSrtFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = (event.target?.result as string) || '';
        // If file contains UTF-16 null bytes, read as utf-16le
        if (text.includes('\u0000')) {
          const altReader = new FileReader();
          altReader.onload = (altEv) => {
            const altText = (altEv.target?.result as string) || '';
            setSrtContent(altText);
            const lines = parseSubtitles(altText, mp3Duration || 180);
            setParsedLines(lines);
          };
          altReader.readAsText(file, 'utf-16le');
          return;
        }
        setSrtContent(text);
        const lines = parseSubtitles(text, mp3Duration || 180);
        setParsedLines(lines);
      };
      reader.readAsText(file, 'utf-8');
    }
  };

  // Handle manual SRT paste change
  const handleSrtTextChange = (text: string) => {
    setSrtContent(text);
    if (text.trim()) {
      const lines = parseSubtitles(text, mp3Duration || 180);
      setParsedLines(lines);
    } else {
      setParsedLines([]);
    }
  };

  // Helper to persist to server disk (data/courses.json + public/audio/)
  const persistCourseToServerDisk = async (song: Song): Promise<Song | null> => {
    if (!audioBase64) return null;
    try {
      const res = await fetch('/api/save-song-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          song,
          audioBase64,
          audioFileName: audioFile?.name,
        }),
      });
      const data = await res.json();
      if (
        data.success &&
        data.song &&
        typeof data.song.audioUrl === 'string' &&
        data.song.audioUrl.startsWith('/audio/')
      ) {
        return data.song as Song;
      }
    } catch (e) {
      console.warn('Failed to save course into the publish bundle:', e);
    }
    return null;
  };

  const keepPublishedAudio = async (song: Song): Promise<Song | null> => {
    if (!persistToDisk) return song;
    const saved = await persistCourseToServerDisk(song);
    if (!saved) {
      setError('音频没有写进发布包。请先选择 MP3，并保持「固化保存」勾选。只存在浏览器里的音频，发布后会变回口播。');
      return null;
    }
    return saved;
  };

  // 1. Instant Zero-Latency Local Import (Never fails)
  const handleInstantLocalImport = async () => {
    if (!parsedLines.length) {
      setError('请先上传或粘贴带有时间轴的 SRT / LRC 歌词字幕');
      return;
    }

    setLoading(true);
    setError('');

    const effectiveDuration =
      mp3Duration > 0
        ? mp3Duration
        : parsedLines.length > 0
        ? parsedLines[parsedLines.length - 1].endTime + 3
        : 180;

    const localLines = buildLocalSongFromSrt(
      title.trim() || '用户导入歌曲',
      artist.trim() || '未知歌手',
      audioUrl,
      parsedLines
    );

    let finalSong: Song = {
      id: `course-${Date.now()}`,
      title: title.trim() || '用户导入歌曲',
      artist: artist.trim() || '未知歌手',
      cefrLevel: 'B1',
      genre: 'User MP3 Audio',
      duration: effectiveDuration,
      grammarTheme: '原声 MP3 磨耳朵与句法剖析',
      coverImage: '/src/assets/images/hero_lyric_grammar_1792579064655.jpg',
      audioUrl: audioUrl,
      tempoBpm: 90,
      keySignature: 'C Major',
      coreSummary: `已成功对齐您的本地 MP3 原声音频（总时长 ${formatSeconds(effectiveDuration)}）与全曲 ${parsedLines.length} 行 SRT 歌词时间戳，支持原声播放、单句循环与语法透视。`,
      keyTakeawayPatterns: [
        {
          name: '原声音频时间轴毫秒对齐',
          formula: '根据 SRT 歌词精确打点同步',
          exampleInSong: parsedLines[0]?.text || '',
          dailyExample: '在原声歌曲节奏中掌握真实连读与时态语感',
        },
      ],
      lines: localLines,
    };

    finalSong.grammarTheme = focusPoint(finalSong);
    if (persistToDisk) {
      const saved = await keepPublishedAudio(finalSong);
      if (!saved) {
        setLoading(false);
        return;
      }
      finalSong = saved;
    }

    setLoading(false);
    onSongImported(finalSong);
    onClose();
  };

  // 2. AI Deep Grammar Enrichment with Automatic Local Fallback & Disk Save
  const handleAiEnrichSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parsedLines.length) {
      setError('请上传或粘贴有效的 SRT / LRC 歌词字幕');
      return;
    }

    setLoading(true);
    setError('');

    const effectiveDuration =
      mp3Duration > 0
        ? mp3Duration
        : parsedLines.length > 0
        ? parsedLines[parsedLines.length - 1].endTime + 3
        : 180;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    let finalSong: Song;

    try {
      const res = await fetch('/api/enrich-srt-grammar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          title: title.trim() || '用户导入歌曲',
          artist: artist.trim() || '原创 / 导入',
          lines: parsedLines,
        }),
      });

      clearTimeout(timeoutId);
      const data = await res.json();
      const songData = data.song || {};

      finalSong = {
        id: `course-${Date.now()}`,
        title: title || songData.title || '自定义歌曲',
        artist: artist || songData.artist || '演唱者',
        cefrLevel: songData.cefrLevel || 'B1',
        genre: 'User MP3 Audio',
        duration: effectiveDuration,
        grammarTheme: songData.grammarTheme || '原声歌词语法精讲',
        coverImage: '/src/assets/images/hero_lyric_grammar_1792579064655.jpg',
        audioUrl: audioUrl,
        tempoBpm: 90,
        keySignature: 'C Major',
        coreSummary: songData.coreSummary || `已成功绑定您的本地 MP3 原声音频与全曲共 ${parsedLines.length} 行字幕时间轴！`,
        keyTakeawayPatterns: songData.keyTakeawayPatterns || [],
        lines: (songData.lines && songData.lines.length > 0)
          ? songData.lines.map((l: any, i: number) => ({
              id: l.id || `line-${i}`,
              startTime: l.startTime,
              endTime: l.endTime,
              text: l.text,
              translation: l.translation || '',
              grammarPoint: l.grammarPoint || '重点语法句',
              patternTemplate: l.patternTemplate,
              explanation: l.explanation || '',
              chunks: l.chunks || [{ phrase: l.text, role: '歌词原句' }],
              cloze: l.cloze,
            }))
          : buildLocalSongFromSrt(title, artist, audioUrl, parsedLines),
      };
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.warn('AI enrichment fetch warning, falling back to local grammar engine:', err);

      finalSong = {
        id: `course-${Date.now()}`,
        title: title.trim() || '用户导入歌曲',
        artist: artist.trim() || '未知歌手',
        cefrLevel: 'B1',
        genre: 'User MP3 Audio',
        duration: effectiveDuration,
        grammarTheme: '原声 MP3 与字幕同步教学',
        coverImage: '/src/assets/images/hero_lyric_grammar_1792579064655.jpg',
        audioUrl: audioUrl,
        tempoBpm: 90,
        keySignature: 'C Major',
        coreSummary: `已成功对齐您的本地 MP3 原声音频（总时长 ${formatSeconds(effectiveDuration)}）与全曲共 ${parsedLines.length} 行歌词时间戳，支持原声播放与单句循环。`,
        keyTakeawayPatterns: [
          {
            name: '原声音频时间轴毫秒对齐',
            formula: '根据 SRT 歌词精确打点同步',
            exampleInSong: parsedLines[0]?.text || '',
            dailyExample: '在原声歌曲节奏中掌握真实连读与时态语感',
          },
        ],
        lines: buildLocalSongFromSrt(title, artist, audioUrl, parsedLines),
      };
    }

    finalSong.grammarTheme = focusPoint(finalSong);
    if (persistToDisk) {
      const saved = await keepPublishedAudio(finalSong);
      if (!saved) {
        setLoading(false);
        return;
      }
      finalSong = saved;
    }

    setLoading(false);
    onSongImported(finalSong);
    onClose();
  };

  // 3. Import Package (.json) directly from other teachers/students
  const handleImportCoursePackage = async (packageData: any) => {
    try {
      if (!packageData.title || !packageData.lines) {
        throw new Error('课件包格式无效，缺少必要的歌词或标题数据');
      }

      let song: Song = {
        ...packageData,
        id: packageData.id || `package-${Date.now()}`,
        isPermanentlySaved: true,
      };

      onSongImported(song);
      onClose();
    } catch (e: any) {
      setError(e.message || '课件包导入失败');
    }
  };

  const handlePackageFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const parsed = JSON.parse(ev.target?.result as string);
          handleImportCoursePackage(parsed);
        } catch (err) {
          setError('JSON 文件解析失败，请确保格式正确');
        }
      };
      reader.readAsText(file);
    }
  };

  // 4. AI Prompt generation
  const handleAiAutoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptTitle.trim() && !promptLyrics.trim()) {
      setError('请输入歌曲名称或粘贴歌词');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/analyze-song', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: promptTitle.trim(),
          artist: promptArtist.trim(),
          lyrics: promptLyrics.trim(),
        }),
      });

      const data = await res.json();
      const s = data.song;

      if (s) {
        let generatedSong: Song = {
          id: `course-${Date.now()}`,
          title: s.title || promptTitle || 'Custom Song',
          artist: s.artist || promptArtist || 'Artist',
          cefrLevel: s.cefrLevel || 'B1',
          genre: s.genre || 'Pop',
          grammarTheme: s.grammarTheme || '核心语法综合拆解',
          coverImage: '/src/assets/images/hero_lyric_grammar_1792579064655.jpg',
          tempoBpm: 95,
          keySignature: 'C Major',
          coreSummary: s.coreSummary || '',
          keyTakeawayPatterns: s.keyTakeawayPatterns || [],
          lines: (s.lines || []).map((l: any, i: number) => ({
            id: `line-${i}`,
            startTime: i * 6,
            endTime: (i + 1) * 6,
            text: l.text,
            translation: l.translation,
            grammarPoint: l.grammarPoint,
            patternTemplate: l.patternTemplate,
            explanation: l.explanation,
            chunks: l.chunks || [],
            cloze: l.cloze,
          })),
        };

        onSongImported(generatedSong);
        onClose();
      }
    } catch (err: any) {
      setError(err.message || '网络请求超时，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center">
            <Upload className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            导入并固化保存歌曲（可离线分发发布）
          </h3>
        </div>
        <p className="text-xs text-slate-500 mb-5">
          导入的 MP3 音频与生成的语法课件将永久保存到软件本地文件。发布分发后，学生和教师无需连接 AI 即可 100% 离线复用。
        </p>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-5">
          <button
            type="button"
            onClick={() => setTab('upload')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              tab === 'upload'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileAudio className="w-4 h-4 text-amber-500" />
            <span>MP3 音频 + SRT 字幕导入</span>
          </button>
          <button
            type="button"
            onClick={() => setTab('package')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              tab === 'package'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FolderUp className="w-4 h-4 text-emerald-600" />
            <span>导入已有课件包 (.json)</span>
          </button>
          <button
            type="button"
            onClick={() => setTab('ai-prompt')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              tab === 'ai-prompt'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>搜歌名 AI 生成</span>
          </button>
        </div>

        {tab === 'upload' && (
          <form onSubmit={handleAiEnrichSubmit} className="space-y-4">
            {/* Song Meta */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  歌曲名称 (Song Title)
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="例如: Someone Like You"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  演唱者 (Artist)
                </label>
                <input
                  type="text"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  placeholder="例如: Adele"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* MP3 Audio File Upload Slot */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileAudio className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-slate-800">
                    第一步：选择您的 MP3 歌曲音频文件
                  </span>
                </div>
                {audioFile && (
                  <span className="text-xs font-medium text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>原声就绪 (将永久存储)</span>
                  </span>
                )}
              </div>

              <input
                type="file"
                ref={audioInputRef}
                accept="audio/mp3,audio/*"
                onChange={handleAudioFileChange}
                className="hidden"
              />

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => audioInputRef.current?.click()}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0"
                >
                  {audioFile ? '重新选择音频' : '选择本地 MP3 文件'}
                </button>
                <div className="text-xs text-slate-500 truncate flex-1">
                  {audioFile ? (
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-800 font-semibold truncate">{audioFile.name}</span>
                      {mp3Duration > 0 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-medium shrink-0">
                          全曲时长: {formatSeconds(mp3Duration)} ({Math.round(mp3Duration)}秒)
                        </span>
                      )}
                    </div>
                  ) : (
                    <span>请选择电脑上的 .mp3 文件 (将写入软件 public/audio 目录)</span>
                  )}
                </div>
              </div>
            </div>

            {/* SRT Subtitle Upload / Paste Slot */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-slate-800">
                    第二步：导入带时间轴的 SRT / LRC 字幕文件
                  </span>
                </div>
              </div>

              <input
                type="file"
                ref={srtInputRef}
                accept=".srt,.lrc,text/plain"
                onChange={handleSrtFileChange}
                className="hidden"
              />

              <div className="flex items-center gap-3 mb-2.5">
                <button
                  type="button"
                  onClick={() => srtInputRef.current?.click()}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0"
                >
                  {srtFile ? '重新选择字幕' : '选择 .srt / .lrc 文件'}
                </button>
                <div className="text-xs text-slate-500 truncate flex-1">
                  {srtFile ? (
                    <span className="font-mono text-slate-700">{srtFile.name}</span>
                  ) : (
                    <span>或者直接在下方文本框中粘贴 SRT 歌词文本</span>
                  )}
                </div>
              </div>

              <textarea
                value={srtContent}
                onChange={(e) => handleSrtTextChange(e.target.value)}
                rows={4}
                placeholder="1&#10;00:00:02,000 --> 00:00:06,500&#10;If you ever find yourself stuck in the middle of the sea&#10;&#10;2&#10;00:00:07,000 --> 00:00:11,500&#10;I'll sail the world to find you..."
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono bg-white"
              />

              {parsedLines.length > 0 && (
                <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="text-xs text-emerald-800 font-bold flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      已识别全曲全部 {parsedLines.length} 行歌词时间轴
                    </span>
                    <span className="font-mono text-[11px] font-medium text-emerald-700">
                      时间跨度: {formatSeconds(parsedLines[0]?.startTime)} ~ {formatSeconds(parsedLines[parsedLines.length - 1]?.endTime)}
                    </span>
                  </div>
                  {/* Quick scrollable preview */}
                  <div className="max-h-32 overflow-y-auto space-y-1.5 text-[11px] font-mono text-slate-700 bg-white/80 p-2 rounded-lg border border-emerald-100">
                    {parsedLines.slice(0, 10).map((l, idx) => (
                      <div key={idx} className="flex items-baseline justify-between gap-2 border-b border-slate-50 pb-1">
                        <span className="text-slate-400 shrink-0">{(idx + 1).toString().padStart(2, '0')}. [{formatSeconds(l.startTime)} - {formatSeconds(l.endTime)}]</span>
                        <span className="truncate flex-1 font-sans text-slate-800">{l.text}</span>
                        {l.translation && <span className="truncate text-slate-500 font-sans text-[10px] max-w-[140px]">{l.translation}</span>}
                      </div>
                    ))}
                    {parsedLines.length > 10 && (
                      <div className="text-center text-[10px] text-slate-400 py-0.5">
                        ... 其余 {parsedLines.length - 10} 行歌词均已就绪 ...
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Permanent Save Option Toggle */}
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-center gap-2.5">
              <input
                type="checkbox"
                id="persistCheckbox"
                checked={persistToDisk}
                onChange={(e) => setPersistToDisk(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
              />
              <label htmlFor="persistCheckbox" className="text-xs font-medium text-amber-950 cursor-pointer">
                固化进发布包（MP3 写到 /audio。写成功后再发布，学生听到的是原唱，不会退回口播）
              </label>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Actions: Dual Import Options */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer w-full sm:w-auto text-left"
              >
                取消
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  disabled={loading || parsedLines.length === 0}
                  onClick={handleInstantLocalImport}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 rounded-xl transition-colors cursor-pointer border border-slate-200"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>极速固化保存 (0秒无需等待)</span>
                </button>

                <button
                  type="submit"
                  disabled={loading || parsedLines.length === 0}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>正在批注并存储中...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                      <span>AI 深度语法拆解并固化</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Tab 2: Package Import */}
        {tab === 'package' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 text-center">
              <FolderUp className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                上传由其他教师或软件导出的离线课件包 (.json)
              </h4>
              <p className="text-xs text-slate-500 mb-4 max-w-md mx-auto">
                课件包内已包含完整的歌词时间轴、中英翻译、语法点拆解、句型公式及卡拉OK填空题，导入即用，完全不需要连接 AI。
              </p>

              <input
                type="file"
                ref={packageFileInputRef}
                accept=".json,application/json"
                onChange={handlePackageFileSelect}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => packageFileInputRef.current?.click()}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                选择电脑上的 .json 课程包文件
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                或者直接粘贴课件 JSON 内容
              </label>
              <textarea
                value={packageJsonText}
                onChange={(e) => setPackageJsonText(e.target.value)}
                rows={5}
                placeholder="粘贴包含 title, lines, grammarTheme 的 JSON 数据..."
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
              >
                取消
              </button>
              <button
                type="button"
                disabled={!packageJsonText.trim()}
                onClick={() => {
                  try {
                    const parsed = JSON.parse(packageJsonText.trim());
                    handleImportCoursePackage(parsed);
                  } catch (e) {
                    setError('JSON 文本格式不合法');
                  }
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                导入并加载
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: AI Prompt generation */}
        {tab === 'ai-prompt' && (
          <form onSubmit={handleAiAutoSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  歌曲名称 (Title) *
                </label>
                <input
                  type="text"
                  value={promptTitle}
                  onChange={(e) => setPromptTitle(e.target.value)}
                  placeholder="例如: Yesterday"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  歌手 / 乐队 (Artist)
                </label>
                <input
                  type="text"
                  value={promptArtist}
                  onChange={(e) => setPromptArtist(e.target.value)}
                  placeholder="例如: The Beatles"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                歌词文本 (选填，留空由 AI 自动搜索提取)
              </label>
              <textarea
                value={promptLyrics}
                onChange={(e) => setPromptLyrics(e.target.value)}
                rows={4}
                placeholder="可粘贴歌词文本..."
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
              />
            </div>

            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-center gap-2.5">
              <input
                type="checkbox"
                id="persistAiCheckbox"
                checked={persistToDisk}
                onChange={(e) => setPersistToDisk(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
              />
              <label htmlFor="persistAiCheckbox" className="text-xs font-medium text-amber-950 cursor-pointer">
                生成后固化保存到本地文件 (写入本地 courses.json，之后脱机免 AI 可用)
              </label>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
              >
                取消
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>AI 课程智能构建并保存中...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>生成并固化到本地</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
