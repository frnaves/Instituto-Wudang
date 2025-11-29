export interface VocabItem {
  hanzi: string;
  pinyin: string;
  pt: string;
  category?: string;
  icon?: string;
}

export interface StanceItem {
  name: string;
  hanzi: string;
  pinyin: string;
  desc: string;
}

export interface VideoItem {
  title: string;
  subtitle: string;
  hanzi: string;
  desc: string;
  videoId: string;
  step: number;
}
