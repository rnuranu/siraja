'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// ============================================================================
// DEFINISI TIPE DATA UNTUK SANDHANGAN
// ============================================================================
interface Sandhangan {
  aksara: string;
  nama: string;
  latin: string;
  deskripsi: string;
}

// ============================================================================
// DATA AKSARA SANDHANGAN
// ============================================================================

const sandhanganSwara: Sandhangan[] = [
  { aksara: "ꦶ", nama: "Wulu", latin: "i", deskripsi: "Ngubah swanten vokal dados /i/. Papanipun wonten ing sanginggilipun aksara." },
  { aksara: "ꦸ", nama: "Suku", latin: "u", deskripsi: "Ngubah swanten vokal dados /u/. Papanipun wonten ing sangandhapipun aksara." },
  { aksara: "ꦼ", nama: "Pepet", latin: "ə", deskripsi: "Ngubah swanten vokal dados /ə/ (kados 'e' ing tembung 'seger')." },
  { aksara: "ꦺ", nama: "Taling", latin: "é/è", deskripsi: "Ngubah swanten vokal dados /e/ (kados 'e' ing tembung 'lele')." },
  { aksara: "ꦺꦴ", nama: "Taling Tarung", latin: "o", deskripsi: "Ngubah swanten vokal dados /o/. Papanipun ngapit aksara." },
];

const sandhanganPanyigegWanda: Sandhangan[] = [
  { aksara: "ꦂ", nama: "Layar", latin: "r", deskripsi: "Nambahaken konsonan /r/ ing pungkasaning wanda." },
  { aksara: "ꦃ", nama: "Wignyan", latin: "h", deskripsi: "Nambahaken konsonan /h/ ing pungkasaning wanda." },
  { aksara: "ꦁ", nama: "Cecak", latin: "ng", deskripsi: "Nambahaken konsonan /ng/ ing pungkasaning wanda." },
  { aksara: "꧀", nama: "Pangkon", latin: "(paten)", deskripsi: "Mateni swanten vokal ing pungkasaning wanda." },
];

const sandhanganWyanjana: Sandhangan[] = [
  { aksara: "ꦿ", nama: "Cakra", latin: "-ra-", deskripsi: "Panyeselan konsonan /r/ (tuladha: kra, pra)." },
  { aksara: "ꦽ", nama: "Cakra Keret", latin: "-rê-", deskripsi: "Panyeselan /r/ lan vokal pepet /ə/ (tuladha: krê)." },
  { aksara: "ꦾ", nama: "Pengkal", latin: "-ya-", deskripsi: "Panyeselan konsonan /y/ (tuladha: kya, gya)." },
];

// ============================================================================
// KOMPONEN REACT UTAMA
// ============================================================================
export default function SandhanganPage() {
  // ✅ Ganti `any` dengan tipe `Sandhangan`
  const renderSandhanganCard = (sandhangan: Sandhangan, index: number) => (
    <motion.div
      key={sandhangan.nama}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col items-center justify-center text-center p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-2">
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">Tepangan Sandhangan</h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Sandhangan inggih menika tandha diakritik ing Aksara Jawi ingkang ginanipun kangge ngewahi utawi nambahi swanten ing aksara dhasar (Nglegena). Sandhangan kapilah dados tigang perangan: Swara (vokal), Panyigeg Wanda (panutup wanda), saha Wyanjana (panyeselan konsonan).
          </p>
        </motion.div>

        {/* --- Swara --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-700">1. Sandhangan Swara (Pengubah Vokal)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sandhanganSwara.map(renderSandhanganCard)}
          </div>
        </div>

        {/* --- Panyigeg Wanda --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-700">2. Sandhangan Panyigeg Wanda (Penutup Suku Kata)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sandhanganPanyigegWanda.map(renderSandhanganCard)}
          </div>
        </div>

        {/* --- Wyanjana --- */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-700">3. Sandhangan Wyanjana</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sandhanganWyanjana.map(renderSandhanganCard)}
          </div>
        </div>
      </div>
    </div>
  );
}
