'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import { PlayCircle } from 'lucide-react';
import { carakan, sandhangan, pasangan } from '@/lib/constants/aksara';
import { AksaraJawa } from '@/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function PelafalanPage() {
  const renderAksaraSection = (title: string, items: AksaraJawa[]) => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-modern-dark mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="card-modern h-full flex flex-col items-center justify-between text-center p-4 transition-shadow group">
              <CardHeader className="p-2">
                <div className="text-7xl mb-2 aksara-jawa">{item.aksara}</div>
                <CardTitle className="text-xl">{item.latin}</CardTitle>
              </CardHeader>
              <CardContent className="p-2 flex-grow">
                <CardDescription className="text-sm text-slate-600">
                  {item.description}
                </CardDescription>
              </CardContent>
              <div className="p-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-slate-400 cursor-not-allowed group-hover:text-blue-500 group-hover:bg-blue-100 transition-colors"
                      disabled // Tombol dinonaktifkan karena audio belum ada
                    >
                      <PlayCircle className="w-10 h-10" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Audio segera hadir</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <h1 className="text-4xl font-bold text-modern-dark mb-4 font-display">Audio Pelafalan</h1>
            <p className="text-lg text-slate-700">
              Dengarkan cara pengucapan yang benar untuk setiap Aksara Jawa. Fitur audio akan segera tersedia.
            </p>
          </motion.div>

          {renderAksaraSection("Carakan (Huruf Dasar)", carakan)}
          {renderAksaraSection("Sandhangan (Vokalisasi)", sandhangan)}
          {renderAksaraSection("Pasangan (Bentuk Subskrip)", pasangan)}
        </div>
      </div>
    </TooltipProvider>
  );
}
