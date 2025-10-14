'use client';

import { motion } from "framer-motion";
import { AksaraCard } from "@/components/shared/aksara-card";
import { type AksaraJawa } from "@/types";

interface AksaraGridProps {
  items: AksaraJawa[];
  className?: string;
}

export function AksaraGrid({ items, className = "" }: AksaraGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols- gap-6 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.aksara}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="transform transition-transform hover:scale-105"
        >
          <AksaraCard
            aksara={item.aksara}
            latin={item.latin}
            description={item.description}
            audioUrl={item.audioUrl}
          />
        </motion.div>
      ))}
    </div>
  );
}