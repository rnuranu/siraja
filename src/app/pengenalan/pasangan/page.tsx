'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const pasangan = [
  { aksara: "꧀ꦲ", latin: "ha", bunyi: "pasangan ha" },
  { aksara: "꧀ꦤ", latin: "na", bunyi: "pasangan na" },
  { aksara: "꧀ꦕ", latin: "ca", bunyi: "pasangan ca" },
  { aksara: "꧀ꦫ", latin: "ra", bunyi: "pasangan ra" },
  { aksara: "꧀ꦏ", latin: "ka", bunyi: "pasangan ka" },
  { aksara: "꧀ꦢ", latin: "da", bunyi: "pasangan da" },
  { aksara: "꧀ꦠ", latin: "ta", bunyi: "pasangan ta" },
  { aksara: "꧀ꦱ", latin: "sa", bunyi: "pasangan sa" },
  { aksara: "꧀ꦮ", latin: "wa", bunyi: "pasangan wa" },
  { aksara: "꧀ꦭ", latin: "la", bunyi: "pasangan la" },
  { aksara: "꧀ꦥ", latin: "pa", bunyi: "pasangan pa" },
  { aksara: "꧀ꦝ", latin: "dha", bunyi: "pasangan dha" },
  { aksara: "꧀ꦗ", latin: "ja", bunyi: "pasangan ja" },
  { aksara: "꧀ꦪ", latin: "ya", bunyi: "pasangan ya" },
  { aksara: "꧀ꦚ", latin: "nya", bunyi: "pasangan nya" },
  { aksara: "꧀ꦩ", latin: "ma", bunyi: "pasangan ma" },
  { aksara: "꧀ꦒ", latin: "ga", bunyi: "pasangan ga" },
  { aksara: "꧀ꦧ", latin: "ba", bunyi: "pasangan ba" },
  { aksara: "꧀ꦛ", latin: "tha", bunyi: "pasangan tha" },
  { aksara: "꧀ꦔ", latin: "nga", bunyi: "pasangan nga" },
];

export default function PasanganPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl font-bold text-modern-dark mb-4 font-display">Pasangan</h1>
          <p className="text-lg text-slate-700">
            Pasangan adalah bentuk mati dari huruf Carakan yang digunakan di tengah kata. 
            Dibentuk dengan menambahkan tanda pengkal (꧀) pada huruf dasar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 sm:grid-cols-3 gap-6">
          {pasangan.map((huruf, index) => (
            <motion.div
              key={huruf.latin}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-modern h-full flex flex-col items-center justify-center text-center p-4 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="aksara-jawa text-6xl mb-2">{huruf.aksara}</div>
                  <CardTitle className="text-lg">{huruf.latin}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-slate-600">
                    {huruf.bunyi}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}