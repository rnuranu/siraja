'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const carakan = [
  { aksara: "ꦲ", latin: "ha", bunyi: "ha" },
  { aksara: "ꦤ", latin: "na", bunyi: "na" },
  { aksara: "ꦕ", latin: "ca", bunyi: "cha" },
  { aksara: "ꦫ", latin: "ra", bunyi: "ra" },
  { aksara: "ꦏ", latin: "ka", bunyi: "ka" },
  { aksara: "ꦢ", latin: "da", bunyi: "dha" },
  { aksara: "ꦠ", latin: "ta", bunyi: "tha" },
  { aksara: "ꦱ", latin: "sa", bunyi: "sa" },
  { aksara: "ꦮ", latin: "wa", bunyi: "wa" },
  { aksara: "ꦭ", latin: "la", bunyi: "la" },
  { aksara: "ꦥ", latin: "pa", bunyi: "pa" },
  { aksara: "ꦣ", latin: "dha", bunyi: "dha" },
  { aksara: "ꦗ", latin: "ja", bunyi: "ja" },
  { aksara: "ꦪ", latin: "ya", bunyi: "ya" },
  { aksara: "ꦚ", latin: "nya", bunyi: "nya" },
  { aksara: "ꦩ", latin: "ma", bunyi: "ma" },
  { aksara: "ꦒ", latin: "ga", bunyi: "ga" },
  { aksara: "ꦧ", latin: "ba", bunyi: "ba" },
  { aksara: "ꦛ", latin: "ta", bunyi: "ta" },
  { aksara: "ꦔ", latin: "nga", bunyi: "nga" },
];

export default function CarakanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl font-bold text-modern-dark mb-4 font-display">Carakan</h1>
          <p className="text-lg text-slate-700">
            Carakan adalah 20 huruf dasar Aksara Jawa yang mewakili konsonan utama. 
            Setiap huruf dibaca dengan vokal &quot;a&quot; secara default. Pelajari bentuk dan bunyinya di bawah ini.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-6">
          {carakan.map((huruf, index) => (
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
                    Bunyi: {huruf.bunyi}
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
