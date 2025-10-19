'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, PenTool, Volume2, BrainCircuit, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function HomeContent() {
  const features: Feature[] = [
    {
      title: "Pengenalan Huruf",
      description: "Pelajari dasar-dasar Aksara Jawa: Carakan, Sandhangan, dan Pasangan",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      href: "/pengenalan",
    },
    {
      title: "Latihan Interaktif",
      description: "Uji pemahaman Anda melalui berbagai jenis latihan yang menarik.",
      icon: <PenTool className="w-8 h-8 text-green-500" />,
      href: "/uji-kemampuan",
    },
    {
      title: "Audio Pelafalan",
      description: "Dengarkan cara pengucapan yang benar untuk setiap aksara. (Segera Hadir)",
      icon: <Volume2 className="w-8 h-8 text-orange-500" />,
      href: "#",
    },
  ];

  const whyLearn = [
    {
      title: "Menjaga Warisan Budaya",
      description: "Ikut serta melestarikan salah satu kekayaan intelektual nusantara.",
      icon: <Sparkles className="w-7 h-7 text-yellow-500" />,
    },
    {
      title: "Melatih Kemampuan Kognitif",
      description: "Mempelajari sistem tulisan baru dapat meningkatkan memori dan kreativitas.",
      icon: <BrainCircuit className="w-7 h-7 text-purple-500" />,
    },
    {
      title: "Membuka Wawasan Sejarah",
      description: "Memahami naskah-naskah kuno dan kearifan lokal yang terkandung di dalamnya.",
      icon: <GraduationCap className="w-7 h-7 text-red-500" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-center pt-20 pb-20 md:pb-28 overflow-hidden bg-white dot-pattern-bg">
        <div className="absolute inset-0 opacity-5">
          <div className="aksara-jawa text-[30rem] text-blue-300 leading-none -translate-x-1/4 -translate-y-1/4">ꦱꦶꦫꦗ</div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-modern-dark mb-4 tracking-tight">
              Jelajahi Aksara Jawa Bersama <span className="hero-gradient-text">SIRAJA</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              Platform modern untuk mempelajari keindahan dan kearifan warisan budaya Jawa melalui metode yang interaktif dan menyenangkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link href="/pengenalan">Mulai Petualangan</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/50" asChild>
                <Link href="/uji-kemampuan">Uji Kemampuan</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="container mx-auto px-4">
        <hr className="border-slate-200" />
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link href={feature.href} className="block h-full">
                  <div className="card-feature h-full p-8 text-center">
                    <div className="inline-block bg-slate-100 p-4 rounded-full mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-modern-dark mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container mx-auto px-4">
        <hr className="border-slate-200" />
      </div>

      {/* Why Learn Section */}
      <section className="py-16 bg-slate-50/70">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-modern-dark mb-4">Mengapa Belajar Aksara Jawa?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">Lebih dari sekadar huruf, ini adalah jendela menuju peradaban dan filosofi.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {whyLearn.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-modern-dark text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
