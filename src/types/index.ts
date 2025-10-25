// Types for Aksara Jawa characters
export interface AksaraJawa {
  id: string;
  aksara: string;
  latin: string;
  description: string;
  audioUrl: string;
  category: 'carakan' | 'sandhangan' | 'pasangan';
}

// Types for quiz questions
export interface QuizQuestion {
  id: string;
  type: 'reading' | 'matching' | 'fillInBlank';
  question: string;
  options?: string[];
  correctAnswer?: string;
  points: number;
  pairs?: { id: number; aksara: string; latin: string }[];
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  feedback: string;
}

// Types for audio pronunciations
export interface AudioPronunciation {
  id: string;
  aksaraId: string;
  audioUrl: string;
}