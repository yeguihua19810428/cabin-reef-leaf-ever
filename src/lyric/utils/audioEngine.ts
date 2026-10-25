/**
 * Unified Audio Engine:
 * - Plays real uploaded MP3 / audio files via HTMLAudioElement with millisecond synchronization.
 * - Falls back to Web Audio API chord synthesis and Web Speech vocal guide if no MP3 is supplied.
 */

class LyricAudioEngine {
  private audioCtx: AudioContext | null = null;
  private realAudio: HTMLAudioElement | null = null;
  private listenersBound = false;
  private isPlaying = false;
  private currentTime = 0;
  private duration = 30;
  private playbackRate = 1.0;
  private volume = 1;
  private vocalGuideEnabled = false; // default false when real MP3 is playing, or user can toggle
  private chordInterval: number | null = null;
  private timeUpdateInterval: number | null = null;
  private onTimeUpdateCallback: ((time: number, duration: number) => void) | null = null;
  private onDurationChangeCallback: ((duration: number) => void) | null = null;
  private onEndedCallback: (() => void) | null = null;
  private onPlayErrorCallback: ((message: string) => void) | null = null;
  private currentAudioUrl = "";
  private keySignature = 'C Major';
  private currentLines: Array<{ startTime: number; endTime: number; text: string }> = [];
  private lastSpokenLineIndex = -1;
  private loopLineIndex: number | null = null;
  private hasRealAudio = false;

  constructor() {
    if (typeof window === "undefined") return;
    this.bindRealAudio(new Audio());
  }

  /** Use the in-page <audio> element so the uploaded file is what actually plays. */
  public attachElement(el: HTMLAudioElement) {
    if (this.realAudio === el) return;
    const src = this.hasRealAudio ? this.realAudio?.src || "" : "";
    this.bindRealAudio(el);
    if (src && el.src !== src) {
      el.src = src;
    }
    el.volume = this.volume;
    el.muted = this.volume === 0;
  }

  private bindRealAudio(el: HTMLAudioElement) {
    this.realAudio = el;
    el.preload = "auto";
    el.volume = this.volume;
    el.muted = this.volume === 0;
    if (this.listenersBound && (el as HTMLAudioElement & { __lyricBound?: boolean }).__lyricBound) {
      return;
    }
    (el as HTMLAudioElement & { __lyricBound?: boolean }).__lyricBound = true;
    this.listenersBound = true;

    const handleDuration = () => {
      const media = this.realAudio;
      if (media && Number.isFinite(media.duration) && media.duration > 0) {
        this.duration = media.duration;
        if (this.onDurationChangeCallback) {
          this.onDurationChangeCallback(this.duration);
        }
        if (this.onTimeUpdateCallback) {
          this.onTimeUpdateCallback(this.currentTime, this.duration);
        }
      }
    };

    el.addEventListener("loadedmetadata", handleDuration);
    el.addEventListener("durationchange", handleDuration);
    el.addEventListener("canplay", handleDuration);
    el.addEventListener("canplaythrough", handleDuration);
    el.addEventListener("play", handleDuration);
    el.addEventListener("progress", handleDuration);

    el.addEventListener("timeupdate", () => {
      const media = this.realAudio;
      if (!this.hasRealAudio || !media) return;
      this.currentTime = media.currentTime;

      if (Number.isFinite(media.duration) && media.duration > 0) {
        if (Math.abs(this.duration - media.duration) > 0.5) {
          this.duration = media.duration;
          if (this.onDurationChangeCallback) {
            this.onDurationChangeCallback(this.duration);
          }
        }
      }

      if (this.loopLineIndex !== null && this.currentLines[this.loopLineIndex]) {
        const loopLine = this.currentLines[this.loopLineIndex];
        if (this.currentTime >= loopLine.endTime) {
          media.currentTime = loopLine.startTime;
          this.currentTime = loopLine.startTime;
        }
      }

      if (this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(this.currentTime, this.duration);
      }
    });

    el.addEventListener("ended", () => {
      this.isPlaying = false;
      if (this.onEndedCallback) {
        this.onEndedCallback();
      }
    });

    el.addEventListener("error", () => {
      console.warn("Uploaded audio failed to play", el.error);
    });
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public setSong(song: {
    duration?: number;
    keySignature?: string;
    tempoBpm?: number;
    audioUrl?: string;
    lines: Array<{ startTime: number; endTime: number; text: string }>;
  }) {
    this.stop();
    this.keySignature = song.keySignature || 'C Major';
    this.currentLines = song.lines;
    const lastLine = song.lines[song.lines.length - 1];
    const estimatedDuration = song.duration || (lastLine ? Math.max(lastLine.endTime + 2, 60) : 180);
    this.duration = estimatedDuration;
    this.currentTime = 0;
    this.lastSpokenLineIndex = -1;
    this.loopLineIndex = null;

    if (song.audioUrl && this.realAudio) {
      this.hasRealAudio = true;
      this.currentAudioUrl = song.audioUrl;
      this.realAudio.volume = this.volume;
      this.realAudio.muted = this.volume === 0;
      this.realAudio.src = song.audioUrl;
      this.realAudio.load();
      this.realAudio.playbackRate = this.playbackRate;
      this.vocalGuideEnabled = false;
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }

      if (Number.isFinite(this.realAudio.duration) && this.realAudio.duration > 0) {
        this.duration = this.realAudio.duration;
      }
    } else {
      this.hasRealAudio = false;
      this.currentAudioUrl = "";
      if (this.realAudio && this.realAudio.getAttribute("src")) {
        this.realAudio.removeAttribute("src");
        this.realAudio.load();
      }
      this.vocalGuideEnabled = false;
    }

    if (this.onDurationChangeCallback) {
      this.onDurationChangeCallback(this.duration);
    }
    if (this.onTimeUpdateCallback) {
      this.onTimeUpdateCallback(0, this.duration);
    }
  }

  public setPlaybackRate(rate: number) {
    this.playbackRate = rate;
    if (this.realAudio && this.hasRealAudio) {
      this.realAudio.playbackRate = rate;
    }
  }

  public setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.realAudio) {
      this.realAudio.volume = this.volume;
      this.realAudio.muted = this.volume === 0;
    }
  }

  public setVocalGuide(enabled: boolean) {
    this.vocalGuideEnabled = enabled;
    if (!enabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public setLoopLine(index: number | null) {
    this.loopLineIndex = index;
    if (index !== null && this.currentLines[index]) {
      this.seek(this.currentLines[index].startTime);
    }
  }

  public play() {
    this.isPlaying = true;

    if (this.hasRealAudio && this.realAudio && this.currentAudioUrl) {
      const media = this.realAudio;
      media.volume = this.volume;
      media.muted = this.volume === 0;
      media.playbackRate = this.playbackRate;
      if (media.getAttribute("src") !== this.currentAudioUrl || media.error) {
        media.src = this.currentAudioUrl;
        media.load();
      }
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      media.play().catch((err) => {
        this.isPlaying = false;
        console.warn("Real audio playback interrupted:", err);
        const message =
          media.error
            ? "音频文件打不开，请重新选择 MP3 后再点播放"
            : "浏览器拦住了播放，请再点一次播放";
        if (this.onPlayErrorCallback) this.onPlayErrorCallback(message);
      });
      return;
    }

    this.isPlaying = false;
    if (this.onPlayErrorCallback) {
      this.onPlayErrorCallback("这首还没有 MP3。先看歌词，把要学的那几句练完。");
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.hasRealAudio && this.realAudio) {
      this.realAudio.pause();
    }
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
      this.timeUpdateInterval = null;
    }
    if (this.chordInterval) {
      clearInterval(this.chordInterval);
      this.chordInterval = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public stop() {
    this.pause();
    this.currentTime = 0;
    this.lastSpokenLineIndex = -1;
    if (this.hasRealAudio && this.realAudio) {
      this.realAudio.currentTime = 0;
    }
    if (this.onTimeUpdateCallback) {
      this.onTimeUpdateCallback(0, this.duration);
    }
  }

  public seek(seconds: number) {
    this.currentTime = Math.max(0, Math.min(seconds, this.duration));
    this.lastSpokenLineIndex = -1;

    if (this.hasRealAudio && this.realAudio) {
      this.realAudio.currentTime = this.currentTime;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (this.onTimeUpdateCallback) {
      this.onTimeUpdateCallback(this.currentTime, this.duration);
    }
  }

  public onTimeUpdate(cb: (time: number, duration: number) => void) {
    this.onTimeUpdateCallback = cb;
  }

  public onDurationChange(cb: (duration: number) => void) {
    this.onDurationChangeCallback = cb;
  }

  public getDuration(): number {
    return this.duration;
  }

  public onEnded(cb: () => void) {
    this.onEndedCallback = cb;
  }

  public onPlayError(cb: (message: string) => void) {
    this.onPlayErrorCallback = cb;
  }

  public isUsingRealAudio(): boolean {
    return this.hasRealAudio;
  }

  // Synthesize chord accompaniment (acoustic guitar / piano style warm tones)
  private playChord(frequencies: number[]) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    frequencies.forEach((freq, i) => {
      const osc = this.audioCtx!.createOscillator();
      const gain = this.audioCtx!.createGain();

      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.04);

      gain.gain.setValueAtTime(0.0001, now + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, (0.08 / (i + 1)) * this.volume), now + i * 0.04 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.04 + 1.8);

      osc.connect(gain);
      gain.connect(this.audioCtx!.destination);

      osc.start(now + i * 0.04);
      osc.stop(now + i * 0.04 + 2.0);
    });
  }

  private startChordAccompaniment() {
    if (this.chordInterval) clearInterval(this.chordInterval);

    const chordProgressions: Record<string, number[][]> = {
      'C Major': [
        [130.81, 164.81, 196.0, 261.63],
        [146.83, 174.61, 220.0, 293.66],
        [174.61, 220.0, 261.63, 349.23],
        [196.0, 246.94, 293.66, 392.0],
      ],
      'F# Minor': [
        [185.0, 220.0, 277.18, 369.99],
        [146.83, 185.0, 220.0, 293.66],
        [220.0, 277.18, 329.63, 440.0],
        [164.81, 207.65, 246.94, 329.63],
      ],
      'E Minor / G Major': [
        [164.81, 196.0, 246.94, 329.63],
        [123.47, 146.83, 185.0, 246.94],
        [130.81, 164.81, 196.0, 261.63],
        [196.0, 246.94, 293.66, 392.0],
      ],
      'A Major': [
        [220.0, 277.18, 329.63, 440.0],
        [138.59, 164.81, 207.65, 277.18],
        [185.0, 220.0, 277.18, 369.99],
        [146.83, 185.0, 220.0, 293.66],
      ],
      'Eb Major': [
        [155.56, 196.0, 233.08, 311.13],
        [196.0, 233.08, 293.66, 392.0],
        [130.81, 155.56, 196.0, 261.63],
        [233.08, 293.66, 349.23, 466.16],
      ],
    };

    const chords = chordProgressions[this.keySignature] || chordProgressions['C Major'];
    let chordIdx = 0;

    this.playChord(chords[0]);

    this.chordInterval = window.setInterval(() => {
      if (!this.isPlaying) return;
      chordIdx = (chordIdx + 1) % chords.length;
      this.playChord(chords[chordIdx]);
    }, 2400 / this.playbackRate);
  }

  public speakLine(text: string) {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95 * this.playbackRate;
    utterance.pitch = 1.05;
    utterance.volume = this.volume;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Natural') ||
          v.name.includes('Samantha') ||
          v.name.includes('Google') ||
          v.name.includes('Daniel'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  public playSuccessChime() {
    this.initAudioContext();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = this.audioCtx!.createOscillator();
      const gain = this.audioCtx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0.001, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, 0.12 * this.volume), now + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx!.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.4);
    });
  }
}

export const audioEngine: LyricAudioEngine =
  typeof window === "undefined" ? createServerStub() : new LyricAudioEngine();

function createServerStub(): LyricAudioEngine {
  const noop = () => {};
  return new Proxy({} as LyricAudioEngine, {
    get(_target, prop) {
      if (prop === "isUsingRealAudio") return () => false;
      if (prop === "getDuration") return () => 0;
      return noop;
    },
  });
}
