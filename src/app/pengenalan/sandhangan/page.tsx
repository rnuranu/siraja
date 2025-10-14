// Pastikan Anda berada di environment Next.js dengan folder app router.
// File ini bisa disimpan sebagai: app/sandhangan/page.tsx (atau .jsx)

'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// ============================================================================
// DATA AKSARA SANDHANGAN (SUDAH DIPERBAIKI DAN DIKLASIFIKASIKAN DENGAN BENAR)
// Data didefinisikan di luar komponen agar tidak dibuat ulang pada setiap render.
// ============================================================================

/**
 * SANDHANGAN SWARA
 * Berfungsi untuk mengubah bunyi vokal inheren /a/ pada aksara nglegena.
 */
const sandhanganSwara = [
  { aksara: "ꦶ", nama: "Wulu", latin: "i", deskripsi: "Mengubah vokal menjadi /i/. Diletakkan di atas aksara." },
  { aksara: "ꦸ", nama: "Suku", latin: "u", deskripsi: "Mengubah vokal menjadi /u/. Diletakkan di bawah aksara." },
  { aksara: "ꦼ", nama: "Pepet", latin: "ə", deskripsi: "Mengubah vokal menjadi /ə/ (seperti 'e' pada 'segar')." },
  { aksara: "ꦺ", nama: "Taling", latin: "é/è", deskripsi: "Mengubah vokal menjadi /e/ (seperti 'e' pada 'lele')." },
  { aksara: "ꦺꦴ", nama: "Taling Tarung", latin: "o", deskripsi: "Mengubah vokal menjadi /o/. Mengapit aksara." },
];

/**
 * SANDHANGAN PANYIGEG WANDA
 * Berfungsi untuk menambahkan konsonan penutup pada akhir suku kata.
 */
const sandhanganPanyigegWanda = [
  { aksara: "ꦂ", nama: "Layar", latin: "r", deskripsi: "Menambahkan konsonan /r/ di akhir suku kata." },
  { aksara: "ꦃ", nama: "Wignyan", latin: "h", deskripsi: "Menambahkan konsonan /h/ di akhir suku kata." },
  { aksara: "ꦁ", nama: "Cecak", latin: "ng", deskripsi: "Menambahkan konsonan /ng/ di akhir suku kata." },
  { aksara: "꧀", nama: "Pangkon", latin: "(paten)", deskripsi: "Mematikan vokal pada aksara di akhir suku kata." },
];

/**
 * SANDHANGAN WYANJANA
 * Berfungsi sebagai sisipan konsonan (semivokal) di tengah suku kata.
 */
const sandhanganWyanjana = [
  { aksara: "ꦿ", nama: "Cakra", latin: "-ra-", deskripsi: "Memberi sisipan konsonan /r/ (contoh: kra, pra)." },
  { aksara: "ꦽ", nama: "Cakra Keret", latin: "-rê-", deskripsi: "Memberi sisipan /r/ dan vokal pepet /ə/ (contoh: krê)." },
  { aksara: "ꦾ", nama: "Pengkal", latin: "-ya-", deskripsi: "Memberi sisipan konsonan /y/ (contoh: kya, gya)." },
];


// ============================================================================
// KOMPONEN REACT UTAMA
// ============================================================================

export default function SandhanganPage() {
  // Fungsi untuk membuat Card secara dinamis agar tidak repetitif
  const renderSandhanganCard = (sandhangan: any, index: number) => (
    <motion.div
      key={sandhangan.nama}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col items-center justify-center text-center p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-2">
          {/* Pastikan Anda memiliki font Aksara Jawa seperti 'Noto Sans Javanese' di CSS Anda */}
          <div className="text-6xl mb-2 font-['Noto_Sans_Javanese']">{sandhangan.aksara}</div>
          <CardTitle className="text-xl">{sandhangan.nama}</CardTitle>
          <CardDescription className="text-md text-slate-500">Bunyi: {sandhangan.latin}</CardDescription>
        </CardHeader>
        <CardContent className="p-2">
          <p className="text-sm text-slate-600">
            {sandhangan.deskripsi}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    // Pastikan font Aksara Jawa telah di-import di file CSS global Anda.
    // @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Javanese&display=swap');
    // body { font-family: 'YourDefaultFont', 'Noto Sans Javanese', sans-serif; }
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        
        {/* --- Bagian Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">Mengenal Sandhangan</h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Sandhangan adalah tanda diakritik dalam Aksara Jawa yang berfungsi mengubah atau menambah bunyi pada aksara dasar (Nglegena). Sandhangan terbagi menjadi tiga kelompok utama: Swara (vokal), Panyigeg Wanda (penutup suku kata), dan Wyanjana (sisipan konsonan).
          </p>
        </motion.div>

        {/* --- Bagian Sandhangan Swara --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-700">1. Sandhangan Swara (Pengubah Vokal)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sandhanganSwara.map(renderSandhanganCard)}
          </div>
        </div>

        {/* --- Bagian Sandhangan Panyigeg Wanda --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-700">2. Sandhangan Panyigeg Wanda (Penutup Suku Kata)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sandhanganPanyigegWanda.map(renderSandhanganCard)}
          </div>
        </div>

        {/* --- Bagian Sandhangan Wyanjana --- */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-700">3. Sandhangan Wyanjana </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sandhanganWyanjana.map(renderSandhanganCard)}
          </div>
        </div>

      </div>
    </div>
  );
}