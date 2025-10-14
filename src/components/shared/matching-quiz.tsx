'use client';

import { useState } from 'react';
import { QuizCard } from './quiz-components';
import { motion, Reorder } from 'framer-motion';
import { Button } from '../ui/button';

interface MatchingOption {
  id: string;
  text: string;
  isAksara: boolean;
}

interface MatchingQuizProps {
  options: { aksara: string; latin: string }[];
  onAnswer: (isCorrect: boolean) => void;
}

export function MatchingQuiz({ options, onAnswer }: MatchingQuizProps) {
  const [items, setItems] = useState<MatchingOption[]>(
    options.flatMap((opt) => [
      { id: `aksara-${opt.aksara}`, text: opt.aksara, isAksara: true },
      { id: `latin-${opt.latin}`, text: opt.latin, isAksara: false },
    ]).sort(() => Math.random() - 0.5)
  );
  
  const [selectedPair, setSelectedPair] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleItemClick = (item: MatchingOption) => {
    if (selectedPair.length === 2) return;

    const newPair = [...selectedPair, item.id];
    setSelectedPair(newPair);

    if (newPair.length === 2) {
      const [first, second] = newPair;
      const firstItem = items.find((i) => i.id === first);
      const secondItem = items.find((i) => i.id === second);

      if (firstItem && secondItem) {
        const isMatch = 
          (firstItem.isAksara && !secondItem.isAksara) || 
          (!firstItem.isAksara && secondItem.isAksara);

        if (isMatch) {
          const matchFound = options.some(
            (opt) => 
              (firstItem.text === opt.aksara && secondItem.text === opt.latin) ||
              (firstItem.text === opt.latin && secondItem.text === opt.aksara)
          );

          if (matchFound) {
            setItems(items.filter((i) => !newPair.includes(i.id)));
          }
        }
      }

      setTimeout(() => {
        setSelectedPair([]);
      }, 1000);
    }
  };

  const checkAnswer = () => {
    const correct = items.length === 0;
    setIsCorrect(correct);
    setShowResult(true);
    onAnswer(correct);
  };

  const handleTryAgain = () => {
    setItems(
      options.flatMap((opt) => [
        { id: `aksara-${opt.aksara}`, text: opt.aksara, isAksara: true },
        { id: `latin-${opt.latin}`, text: opt.latin, isAksara: false },
      ]).sort(() => Math.random() - 0.5)
    );
    setSelectedPair([]);
    setShowResult(false);
  };

  return (
    <QuizCard
      title="Pasangkan Aksara"
      description="Pasangkan aksara Jawa dengan bacaan latinnya yang sesuai"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-2">
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedPair.includes(item.id)
                    ? 'bg-blue-100'
                    : 'bg-white hover:bg-blue-50'
                } ${
                  item.isAksara ? 'aksara-jawa text-2xl' : 'text-lg'
                } text-center border border-blue-200`}
                onClick={() => handleItemClick(item)}
              >
                {item.text}
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>

        {!showResult ? (
          <Button
            onClick={checkAnswer}
            className="w-full btn-primary"
          >
            Periksa Jawaban
          </Button>
        ) : (
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 rounded-md ${
                isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {isCorrect
                ? "Benar! Semua pasangan telah cocok!"
                : "Maaf, coba lagi untuk memasangkan semua aksara dengan benar."}
            </motion.div>
            <Button
              onClick={handleTryAgain}
              variant="outline"
              className="w-full border-blue-200 text-slate-700 hover:bg-white/50"
            >
              Coba Lagi
            </Button>
          </div>
        )}
      </div>
    </QuizCard>
  );
}