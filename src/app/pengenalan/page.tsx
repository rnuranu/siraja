'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Carakan",
    description: "Pelajari 20 huruf dasar Aksara Jawa",
    href: "/pengenalan/carakan",
  },
  {
    title: "Sandhangan",
    description: "Pelajari tanda baca dan pengubah bunyi",
    href: "/pengenalan/sandhangan",
  },
  {
    title: "Pasangan",
    description: "Pelajari huruf pasangan dalam Aksara Jawa",
    href: "/pengenalan/pasangan",
  },
];

export default function PengenalanPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Content */}
        <div className="relative">
          {/* Hero Section: Animate on mount untuk muncul langsung */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}  // Mulai tersembunyi
            animate={{ opacity: 1, y: 0 }}    // Animate ke visible saat mount
            transition={{ duration: 0.6 }}    // Durasi animasi
            className="text-center max-w-3xl mx-auto mb-16 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <h1 className="text-5xl font-bold text-modern-dark mb-6 font-display">Pengenalan Aksara Jawa</h1>
            <p className="text-lg text-slate-700">
              Pelajari dasar-dasar Aksara Jawa melalui tiga kategori utama yang disusun 
              secara sistematis untuk memudahkan pemahaman Anda.
            </p>
          </motion.div>

          {/* Cards Grid: Staggered animation on mount */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}  // Mulai tersembunyi
                animate={{ opacity: 1, y: 0 }}   // Animate ke visible saat mount
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2  // Stagger: delay bertahap untuk efek cascade
                }}
              >
                <Link href={section.href}>
                  <Card className="card-modern">
                    <CardHeader>
                      <CardTitle className="text-modern-dark">{section.title}</CardTitle>
                      <CardDescription className="text-slate-600">{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-40 flex items-center justify-center">
                        <span className="aksara-jawa text-5xl text-slate-700">
                          {section.title === "Carakan" && "ꦲꦤꦕꦫꦏ"}
                          {section.title === "Sandhangan" && "ꦶ ꦸ ꦺ"}
                          {section.title === "Pasangan" && "꧀ꦥ ꧀ꦩ"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}