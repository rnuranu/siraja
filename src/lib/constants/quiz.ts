import { QuizQuestion } from "@/types"; // Pastikan tipe ini sesuai dengan struktur baru

/**
 * Mendefinisikan tipe data untuk setiap soal dalam kuis.
 * Perhatikan penambahan properti 'pairs' untuk tipe 'matching'.
 */
// export type QuizQuestion = {
//   id: string;
//   type: 'reading' | 'matching' | 'fillInBlank';
//   question: string;
//   points: number;
//   correctAnswer?: string; // Opsional, tidak digunakan oleh tipe 'matching'
//   options?: string[];     // Opsional, digunakan oleh 'fillInBlank'
//   pairs?: {               // Properti baru khusus untuk tipe 'matching'
//     id: number;
//     aksara: string;
//     latin: string;
//   }[];
// };


/**
 * Kumpulan data soal untuk kuis Aksara Jawa.
 */
export const quizQuestions: QuizQuestion[] = [
  // ===================================
  // Tipe Soal: Membaca (Reading)
  // Struktur sudah benar. Ditambah 4 soal baru.
  // ===================================
  {
    id: "reading-1",
    type: "reading",
    question: "ꦏꦤꦠꦠ",
    correctAnswer: "kana tata",
    points: 10
  },
  {
    id: "reading-2",
    type: "reading",
    question: "ꦱꦪꦭꦫ",
    correctAnswer: "saya lara",
    points: 10
  },
  {
    id: "reading-3",
    type: "reading",
    question: "ꦥꦣꦗꦪ",
    correctAnswer: "padha jaya",
    points: 10
  },
  {
    id: "reading-4",
    type: "reading",
    question: "ꦱꦏꦏꦤ",
    correctAnswer: "saka kana",
    points: 10
  },
  {
    id: "reading-5",
    type: "reading",
    question: "ꦠꦠꦧꦠ",
    correctAnswer: "tata bata",
    points: 10
  },
  {
    id: "reading-6",
    type: "reading",
    question: "ꦭꦫꦭꦥ",
    correctAnswer: "lara lapa",
    points: 10
  },

  // ===================================
  // Tipe Soal: Mencocokkan (Matching)
  // STRUKTUR TELAH DIPERBAIKI SECARA FUNDAMENTAL.
  // Properti 'options' dan 'correctAnswer' diganti dengan 'pairs'.
  // Ditambah 2 soal baru, masing-masing dengan 4 pairs.
  // ===================================
  {
    id: "matching-1",
    type: "matching",
    question: "Pasangaken tembung-tembung aksara Jawi mawi pasangan ugi sandhangan menika",
    points: 20, // Poin diberikan jika semua pasangan berhasil dicocokkan.
    pairs: [
      { id: 1, aksara: "ꦱꦶꦗꦶ", latin: "siji" },
      { id: 2, aksara: "ꦏꦶꦮꦶ", latin: "kiwi" },
      { id: 3, aksara: "ꦢꦸꦢꦸ", latin: "dudu" },
      { id: 4, aksara: "ꦱꦸꦤꦸ", latin: "sunu" },
    ]
  },
  {
    id: "matching-2",
    type: "matching",
    question: "Pasangaken tembung-tembung aksara Jawi mawi pasangan ugi sandhangan menika. Pangkon (paten)",
    points: 20,
    pairs: [
      { id: 1, aksara: "salak", latin: "ꦱꦭꦏ꧀" },
      { id: 2, aksara: "galak", latin: "ꦒꦭꦏ꧀" },
      { id: 3, aksara: "alis", latin: "ꦲꦭꦶꦱ꧀" },
      { id: 4, aksara: "bakal", latin: "ꦧꦏꦭ꧀" },
    ]
  },
  {
    id: "matching-3",
    type: "matching",
    question: "Pasangaken tembung-tembung aksara Jawi mawi pasangan ugi sandhangan menika. Cakra ra",
    points: 20,
    pairs: [
      { id: 1, aksara: "brama", latin: "ꦧꦿꦩ" },
      { id: 2, aksara: "putra", latin: "ꦥꦸꦠꦿ" },
      { id: 3, aksara: "cakra", latin: "ꦕꦏꦿ" },
      { id: 4, aksara: "kreteg", latin: "ꦏꦽꦠꦼꦒ꧀" },
    ]
  },

  // ===================================
  // Tipe Soal: Isi Bagian Kosong (Fill in the Blank)
  // Struktur sudah benar. Ditambah 3 soal baru.
  // ===================================
  {
    id: "fillInBlank-1",
    type: "fillInBlank",
    question: "꧋ꦩꦱ꧀ꦱ_ꦢ꧀ꦒꦭꦏ꧀꧉", // Tanda '_' merepresentasikan bagian yang harus diisi
    options: ["ꦤ", "ꦲꦶ", "ꦭ"],
    correctAnswer: "ꦲꦶ",
    points: 15
  },
  {
    id: "fillInBlank-2",
    type: "fillInBlank",
    question: "꧋ꦧꦸꦣꦺꦠꦶꦤ꧀ꦢꦏ꧀ꦥ_꧉",
    options: ["ꦱꦂ", "ꦢ", "ꦩ"],
    correctAnswer: "ꦱꦂ",
    points: 15
  },
  {
    id: "fillInBlank-3",
    type: "fillInBlank",
    question: "꧋ꦱꦶꦩ꧀ꦧꦃ_ꦲꦂꦗꦢꦃ꧉",
    options: ["ꦣ", "ꦶ", "ꦸ"],
    correctAnswer: "ꦣ",
    points: 15
  },
  {
    id: "fillInBlank-4",
    type: "fillInBlank",
    question: "꧋ꦒꦼꦤ꧀ꦢꦺꦫꦤꦺꦏꦸ_ꦩ꧀ꦭꦺꦧꦺꦠ꧀꧈",
    options: ["ꦏ", "ꦶ", "ꦮꦶꦏꦸ"],
    correctAnswer: "ꦮꦶꦏꦸ",
    points: 15
  }
];

/**
 * Pesan umpan balik berdasarkan skor akhir kuis.
 */
export const quizFeedback = {
  excellent: {
    message: "Linuwih! Pangertosan panjenengan babagan Aksara Jawi saestu sae sanget!",
    threshold: 90
  },
  good: {
    message: "Saestu sae! Mangga dipunlajengaken gladhenipun supados langkung sampurna.",
    threshold: 70
  },
  needsPractice: {
    message: "Sampun cekap sae, ananging taksih betah gladhen malih. Tetep semangat!",
    threshold: 0
  }
};