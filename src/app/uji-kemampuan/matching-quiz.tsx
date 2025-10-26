'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { shuffle } from 'lodash';

type Pair = {
  id: number;
  aksara: string;
  latin: string;
};

export type MatchingQuizProps = {
  question: string;
  pairs: Pair[];
  onAnswer: (isCorrect: boolean) => void;
};

type Selection = {
  id: number;
  type: 'aksara' | 'latin';
};

export function MatchingQuiz({ question, pairs, onAnswer }: MatchingQuizProps) {
  const [selected, setSelected] = useState<Selection | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [incorrectMatch, setIncorrectMatch] = useState<[number, number] | null>(null);

  // Acak urutan kolom latin hanya sekali saat komponen pertama kali render
  const shuffledLatin = useMemo(() => shuffle(pairs), [pairs]);

  const handleSelect = (id: number, type: 'aksara' | 'latin') => {
    if (incorrectMatch) return;

    // Jika belum ada yang dipilih, simpan pilihan pertama
    if (!selected) {
      setSelected({ id, type });
      return;
    }

    // Jika item yang sama diklik lagi, batalkan pilihan
    if (selected.id === id && selected.type === type) {
      setSelected(null);
      return;
    }

    // Jika item dari kolom yang sama dipilih, ganti pilihan
    if (selected.type === type) {
      setSelected({ id, type });
      return;
    }

    // Proses pencocokan
    const firstId = selected.type === 'aksara' ? selected.id : id;
    const secondId = selected.type === 'latin' ? selected.id : id;

    if (firstId === secondId) {
      // Jawaban benar
      setMatchedPairs((prev) => [...prev, firstId]);
      setSelected(null);
    } else {
      // Jawaban salah
      setIncorrectMatch([firstId, secondId]);
      setTimeout(() => {
        setIncorrectMatch(null);
        setSelected(null);
      }, 800);
    }
  };

  // Cek jika kuis selesai
  useEffect(() => {
    if (pairs.length > 0 && matchedPairs.length === pairs.length) {
      // Panggil onAnswer setelah semua berhasil dicocokkan
      // Untuk soal tipe ini, kita asumsikan jika selesai berarti benar
      onAnswer(true);
    }
  }, [matchedPairs, pairs.length, onAnswer]);

  const getStatus = (id: number, type: 'aksara' | 'latin') => {
    if (matchedPairs.includes(id)) return 'matched';
    if (selected?.id === id && selected?.type === type) return 'selected';
    if (incorrectMatch) {
      // Periksa apakah item saat ini adalah bagian dari pasangan yang salah
      if (
        (type === 'aksara' && incorrectMatch[0] === id) ||
        (type === 'latin' && incorrectMatch[1] === id)
      ) return 'incorrect';
    }
    return 'default';
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold text-center mb-6">{question}</h3>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {/* Kolom Aksara */}
        <div className="flex flex-col gap-3">
          {pairs.map((pair) => (
            <Button
              key={`aksara-${pair.id}`}
              variant="outline"
              className={cn(
                'h-16 text-3xl aksara-jawa',
                { 'bg-blue-100 border-blue-400': getStatus(pair.id, 'aksara') === 'selected' },
                { 'bg-green-100 border-green-400 text-green-800': getStatus(pair.id, 'aksara') === 'matched' },
                { 'bg-red-100 border-red-400 animate-shake': getStatus(pair.id, 'aksara') === 'incorrect' }
              )}
              onClick={() => handleSelect(pair.id, 'aksara')}
              disabled={matchedPairs.includes(pair.id)}
            >
              {pair.aksara}
            </Button>
          ))}
        </div>

        {/* Kolom Latin (diacak) */}
        <div className="flex flex-col gap-3">
          {shuffledLatin.map((pair) => (
            <Button
              key={`latin-${pair.id}`}
              variant="outline"
              className={cn(
                'h-16 text-md font-semibold',
                { 'bg-blue-100 border-blue-400': getStatus(pair.id, 'latin') === 'selected' },
                { 'bg-green-100 border-green-400 text-green-800': getStatus(pair.id, 'latin') === 'matched' },
                { 'bg-red-100 border-red-400 animate-shake': getStatus(pair.id, 'latin') === 'incorrect' }
              )}
              onClick={() => handleSelect(pair.id, 'latin')}
              disabled={matchedPairs.includes(pair.id)}
            >
              {pair.latin}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}