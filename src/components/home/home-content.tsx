'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

export function HomeContent() {
  const features: Feature[] = [
    {
      title: "Pengenalan Huruf",
      description: "Pelajari dasar-dasar Aksara Jawa: Carakan, Sandhangan, dan Pasangan",
    },
    {
      title: "Latihan Interaktif",
      description: "Uji pemahaman Anda melalui berbagai jenis latihan yang menarik",
    },
    {
      title: "Audio Pelafalan",
      description: "Dengarkan cara pengucapan yang benar untuk setiap aksara - Maintenace",
    },
  ];

  return (
    <>
      {/* Hero Section: Animate on mount untuk muncul langsung */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}  // Mulai tersembunyi
        animate={{ opacity: 1, y: 0 }}   // Animate ke visible saat mount
        transition={{ duration: 0.6 }}   // Durasi animasi
        className="text-center max-w-3xl mx-auto hero-gradient rounded-2xl p-8 shadow-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Selamat Datang di SIRAJA
        </h1>
        <p className="text-xl text-blue-100 mb-12">
          Jelajahi keindahan dan kearifan aksara Jawa melalui pembelajaran interaktif yang menyenangkan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="btn-primary" asChild>
            <Link href="/pengenalan">Mulai Belajar</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-blue-200 text-slate-700" asChild>
            <Link href="/uji-kemampuan">Uji Kemampuan</Link>
          </Button>
        </div>
      </motion.div>

      {/* Features Grid: Staggered animation on mount */}
      <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}  // Mulai tersembunyi
            animate={{ opacity: 1, y: 0 }}   // Animate ke visible saat mount
            transition={{ 
              duration: 0.6, 
              delay: 0.2 * index  // Stagger: delay bertahap untuk efek cascade
            }}
            className="card-modern"
          >
            <h3 className="text-xl font-semibold text-modern-dark mb-3">{feature.title}</h3>
            <p className="text-slate-700">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
