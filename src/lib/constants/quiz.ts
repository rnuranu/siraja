import { QuizQuestion } from "@/types"; // Pastikan tipe ini sesuai dengan struktur baru

/**
 * Mendefinisikan tipe data untuk setiap soal dalam kuis.
 * Perhatikan penambahan properti 'pairs' untuk tipe 'matching'.
 */
export type QuizQuestion = {
  id: string;
  type: 'reading' | 'matching' | 'fillInBlank';
  question: string;
  points: number;
  correctAnswer?: string; // Opsional, tidak digunakan oleh tipe 'matching'
  options?: string[];     // Opsional, digunakan oleh 'fillInBlank'
  pairs?: {               // Properti baru khusus untuk tipe 'matching'
    id: number;
    aksara: string;
    latin: string;
  }[];
};

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
    question: "ꦲꦤꦕꦫꦏ",
    correctAnswer: "hanacaraka",
    points: 10
  },
  {
    id: "reading-2",
    type: "reading",
    question: "ꦢꦠꦱꦮꦭ",
    correctAnswer: "datasawala",
    points: 10
  },
  {
    id: "reading-3",
    type: "reading",
    question: "ꦥꦣꦗꦪꦚ",
    correctAnswer: "padhajayanya",
    points: 10
  },
  {
    id: "reading-4",
    type: "reading",
    question: "ꦩꦒꦧꦛꦔ",
    correctAnswer: "magabathanga",
    points: 10
  },
  {
    id: "reading-5",
    type: "reading",
    question: "ꦭꦫꦩꦠ",
    correctAnswer: "lara mata",
    points: 10
  },
  {
    id: "reading-6",
    type: "reading",
    question: "ꦧꦪꦱꦔ",
    correctAnswer: "baya sanga",
    points: 10
  },

  // ===================================
  // Tipe Soal: Mencocokkan (Matching)
  // STRUKTUR TELAH DIPERBAIKI SECARA FUNDAMENTAL.
  // Properti 'options' dan 'correctAnswer' diganti dengan 'pairs'.
  // Ditambah 2 soal baru, masing-masing dengan 4 pairs.
  // ===================================
  // {
  //   id: "matching-1",
  //   type: "matching",
  //   question: "Pasangkan aksara di kolom kiri dengan bacaan latin yang benar.",
  //   points: 20, // Poin diberikan jika semua pasangan berhasil dicocokkan.
  //   pairs: [
  //     { id: 1, aksara: "ꦥꦝꦗꦪꦚ", latin: "padhajayanya" },
  //     { id: 2, aksara: "ꦩꦒꦧꦛꦔ", latin: "magabathanga" },
  //     { id: 3, aksara: "ꦱꦸꦫꦧꦪ", latin: "surabaya" },
  //     { id: 4, aksara: "ꦧꦸꦢꦶꦥꦼꦏꦼꦂꦠꦶ", latin: "budi pekerti" },
  //   ]
  // },
  // {
  //   id: "matching-2",
  //   type: "matching",
  //   question: "Cocokkan aksara sandhangan dengan fungsinya dalam bacaan.",
  //   points: 20,
  //   pairs: [
  //     { id: 1, aksara: "ꦶ", latin: "i (vokal depan)" },
  //     { id: 2, aksara: "ꦸ", latin: "u (vokal belakang)" },
  //     { id: 3, aksara: "ꦺ", latin: "e (vokal tengah)" },
  //     { id: 4, aksara: "ꦺꦴ", latin: "o (vokal panjang)" },
  //   ]
  // },
  // {
  //   id: "matching-3",
  //   type: "matching",
  //   question: "Pasangkan pasangan aksara dengan bacaan lengkapnya.",
  //   points: 20,
  //   pairs: [
  //     { id: 1, aksara: "ꦏ꧀", latin: "ka (pasangan ka)" },
  //     { id: 2, aksara: "ꦕ꧀", latin: "ca (pasangan ca)" },
  //     { id: 3, aksara: "ꦠ꧀", latin: "ta (pasangan ta)" },
  //     { id: 4, aksara: "ꦤ꧀", latin: "na (pasangan na)" },
  //   ]
  // },

  // ===================================
  // Tipe Soal: Isi Bagian Kosong (Fill in the Blank)
  // Struktur sudah benar. Ditambah 3 soal baru.
  // ===================================
  {
    id: "fillInBlank-1",
    type: "fillInBlank",
    question: "ꦲ_ꦕꦫꦏ", // Tanda '_' merepresentasikan bagian yang harus diisi
    options: ["ꦤ", "ꦱ", "ꦭ"],
    correctAnswer: "ꦤ",
    points: 15
  },
  {
    id: "fillInBlank-2",
    type: "fillInBlank",
    question: "_ꦏꦫꦏ",
    options: ["ꦲ", "ꦢ", "ꦩ"],
    correctAnswer: "ꦲ",
    points: 15
  },
  {
    id: "fillInBlank-3",
    type: "fillInBlank",
    question: "ꦢꦠ_ꦮꦭ",
    options: ["ꦱ", "ꦶ", "ꦸ"],
    correctAnswer: "ꦱ",
    points: 15
  },
  {
    id: "fillInBlank-4",
    type: "fillInBlank",
    question: "ꦩꦚ_ꦫ",
    options: ["ꦏ", "ꦶ", "ꦱ"],
    correctAnswer: "ꦏ",
    points: 15
  }
];

/**
 * Pesan umpan balik berdasarkan skor akhir kuis.
 */
export const quizFeedback = {
  excellent: {
    message: "Luar biasa! Pemahaman Anda tentang Aksara Jawa sangat mendalam!",
    threshold: 90
  },
  good: {
    message: "Bagus! Teruslah berlatih untuk menyempurnakan kemampuan Anda.",
    threshold: 70
  },
  needsPractice: {
    message: "Sudah cukup baik, tetapi masih perlu banyak latihan. Jangan menyerah!",
    threshold: 0
  }
};