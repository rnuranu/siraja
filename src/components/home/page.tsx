'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import { Volume2, PlayCircle } from 'lucide-react';
import { carakan, sandhangan, pasangan } from '@/lib/constants/aksara';
import { AksaraJawa } from '@/types';

export default function PelafalanPage() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    setCurrentlyPlaying(audioUrl);
    audio.play();
    audio.onended = () => {
      setCurrentlyPlaying(null);
    };
  };

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
            <Card className="card-modern h-full flex flex-col items-center justify-between text-center p-4 transition-shadow">
              <CardHeader className="pb-2">
                <div className="aksara-jawa text-6xl mb-2">{item.aksara}</div>
                <CardTitle className="text-lg">{item.latin}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center">
                <CardDescription className="text-sm text-slate-600 mb-4">
                  {item.description}
                </CardDescription>
              </CardContent>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-slate-500 hover:bg-blue-100 hover:text-blue-600"
                onClick={() => playAudio(item.audioUrl)}
                disabled={currentlyPlaying === item.audioUrl}
              >
                {currentlyPlaying === item.audioUrl ? (
                  <PlayCircle className="w-6 h-6 animate-pulse" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl font-bold text-modern-dark mb-4 font-display">Audio Pelafalan</h1>
          <p className="text-lg text-slate-700">
            Dengarkan cara pengucapan yang benar untuk setiap Aksara Jawa. Klik ikon suara pada setiap kartu untuk memulai.
          </p>
        </motion.div>

        {renderAksaraSection("Carakan (Huruf Dasar)", carakan)}
        {renderAksaraSection("Sandhangan (Vokalisasi)", sandhangan)}
        {renderAksaraSection("Pasangan (Bentuk Subskrip)", pasangan)}

      </div>
    </div>
  );
}
