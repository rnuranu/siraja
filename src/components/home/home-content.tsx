'use client';

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { BookOpen, PenTool, Volume2, BrainCircuit, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function HomeContent() {
  const fitur: Feature[] = [
    {
      title: "Tepangan Aksara",
      description: "Sinau babagan dhasar Aksara Jawi: Carakan, Sandhangan, saha Pasangan.",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      href: "/pengenalan",
    },
    {
      title: "Gladhen Interaktif",
      description: "Nguji pangertosan panjenengan kanthi maneka warni gladhen ingkang narik kawigatosan.",
      icon: <PenTool className="w-8 h-8 text-green-500" />,
      href: "/uji-kemampuan",
    },
    {
      title: "Audio Pangucapan",
      description: "Mirengaken pangucapan ingkang leres kagem saben aksara Jawi.",
      icon: <Volume2 className="w-8 h-8 text-orange-500" />,
      href: "/pelafalan",
    },
  ];

  const sebabSinau = [
    {
      title: "Njagani Warisan Budaya",
      description: "Ndherek nglestantunaken salah satunggaling kasugihan intelektual nuswantara.",
      icon: <Sparkles className="w-7 h-7 text-yellow-500" />,
    },
    {
      title: "Nglatih Kasisan Kognitif",
      description: "Sinau sistem seratan enggal saged nambah daya emut saha kreativitas.",
      icon: <BrainCircuit className="w-7 h-7 text-purple-500" />,
    },
    {
      title: "Mbikak Wawasan Sejarah",
      description: "Mangertosi naskah-naskah kina saha kawicaksanan lokal ingkang wonten ing salebetipun.",
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
            <h2 className="text-2xl md:text-3xl font-semibold text-modern-dark mb-2 tracking-wide">SIRAJA</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-modern-dark mb-4 tracking-tight">
              <span className="hero-gradient-text">Sinau Aksara Jawa</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              Platform modern kagem sinau kaendahan saha kawicaksanan warisan budaya Jawi kanthi cara ingkang interaktif saha nyenengaken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link href="/pengenalan">Wiwit Sinau</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/50" asChild>
                <Link href="/uji-kemampuan">Gladhen</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-modern-dark mb-4">Fitur Unggulan</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Jelajahi SIRAJA kanthi fitur-fitur ingkang sampun karancang kagem panjenengan.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {fitur.map((feature, index) => (
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

      {/* Prawacana & Ancas Section */}
      <section className="py-16 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Prawacana */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-modern-dark mb-4">Prawacana</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
                <p>Puji sukur konjuk dhumateng ngarsanipun Allah, Gusti Ingkang Murbeng Dumadi, inggih awit rumentahing sih wilasa saha pitedahipun, satemah pangkrakiting media ugi buku ingkang asesirah SIRAJA (Sinau Aksara Jawa) menika saged karampungaken kanthi gangsar.</p>
                <p>SIRAJA menika karakit kagem njangkepi bahan ajar muatan lokal mata pelajaran Bahasa Jawa mliginipun gegayutan aksara Jawa ingkang sampun kajumbuhaken kaliyan Capaian Pembelajaran (CP) Bahasa Jawa Kurikulum Merdeka ingkang kawrat ing lampiran II Surat Keputusan Kepala Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah Nomor: 423.5/04678 tentang Pedoman Kurikulum Muatan Lokal Bahasa Jawa Jenjang Pendidikan Dasar dan Pendidikan Menengah di Provinsi Jawa Tengah.</p>
                <p>SIRAJA menika ngemot pasinaon aksara Jawa ingkang dipunsugataken kanthi gampil wiwit tataran ingkang paling gampil legena, tembung, ukara ingkang migunakaken Paugeran Sriwedari. Estu, SIRAJA menika prayogi sanget kaginakaken para siswa kangge gladhen.</p>
              </div>
            </motion.div>

            {/* Ancas Pasinaon */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 bg-blue-50 border border-blue-200 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Ancas Pasinaon</h3>
              <ul className="space-y-3 text-blue-900">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-600">1.</span>
                  <span>Para siswa saged mangertosi kaidah panyeratan teks aksara Jawi.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-600">2.</span>
                  <span>Para siswa saged maos teks aksara Jawi ingkang ngemot nglegena, pasangan, sandhangan, angka, aksara swara, murda, lan rekan.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-modern-dark mb-4">Kenging Menapa Kedah Sinau Aksara Jawi?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">Sanès namung aksara, ananging ugi minangka cendhela tumuju peradaban saha filosofi luhur.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {sebabSinau.map((item, index) => (
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
