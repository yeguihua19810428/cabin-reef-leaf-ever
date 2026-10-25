export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type GrammarRole =
  | 'subject'       // 主语
  | 'predicate'     // 谓语动词
  | 'object'        // 宾语
  | 'complement'    // 表语/补足语
  | 'adverbial'     // 状语
  | 'clause'        // 状语从句/定语从句/名词性从句
  | 'modal'         // 情态动词
  | 'tense-marker'  // 时态助动词 (have/had/will/is)
  | 'preposition'   // 介词短语
  | 'other';

export interface GrammarChunk {
  phrase: string;
  role: string;
  posTag?: GrammarRole | string;
  explanation?: string;
}

export interface ClozeQuestion {
  blankWord: string;
  sentenceWithBlank: string;
  hint: string;
  options: string[];
}

export interface LyricLine {
  id: string;
  startTime: number; // in seconds
  endTime: number;   // in seconds
  text: string;
  translation: string;
  grammarPoint: string;
  patternTemplate?: string;
  explanation: string;
  chunks: GrammarChunk[];
  cloze?: ClozeQuestion;
}

export interface KeyTakeawayPattern {
  name: string;
  formula: string;
  exampleInSong: string;
  dailyExample: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  year?: number;
  cefrLevel: CEFRLevel;
  genre: string;
  grammarTheme: string;
  coverImage?: string;
  audioUrl?: string; // Optional external mp3 or uses acoustic synth
  duration?: number; // Total audio track duration in seconds
  tempoBpm: number;
  keySignature: string;
  coreSummary: string;
  keyTakeawayPatterns: KeyTakeawayPattern[];
  poeticLicenseNotes?: string[];
  isPermanentlySaved?: boolean;
  savedAt?: string;
  lines: LyricLine[];
}

export type LearningMode = 'listen' | 'grammar' | 'karaoke' | 'builder' | 'import' | 'mv';
