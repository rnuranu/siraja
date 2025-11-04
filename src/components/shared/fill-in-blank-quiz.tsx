'use client';

import { useState } from 'react';
import { QuizCard } from './quiz-components';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

interface FillInBlankQuizProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export function FillInBlankQuiz({
  question,
  options,
  correctAnswer,
  onAnswer,
}: FillInBlankQuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = () => {
    if (selectedAnswer) {
      const correct = selectedAnswer === correctAnswer;
      setIsCorrect(correct);
      setShowResult(true);
      onAnswer(correct);
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <QuizCard
      title="Njangkepi Ukara"
      description="Pilih aksara ingkang leres kangge njangkepi ukara"
    >
      <div className="space-y-6">
        <div className="text-center">
          <p className="aksara-jawa text-4xl text-modern-dark mb-6">
            {question.split('_').map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="inline-block w-12 h-0.5 bg-blue-200 mx-2 align-middle" />
                )}
              </span>
            ))}
          </p>
          <div className="grid grid-cols-3 gap-4">
            {options.map((option) => (
              <motion.button
                key={option}
                onClick={() => !showResult && setSelectedAnswer(option)}
                className={`p-4 rounded-lg border ${
                  selectedAnswer === option
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-blue-200 hover:bg-blue-50'
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={showResult}
              >
                <span className="aksara-jawa text-2xl text-modern-dark">
                  {option}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {!showResult ? (
          <Button
            onClick={handleAnswer}
            className="w-full btn-primary"
            disabled={!selectedAnswer}
          >
            Priksa Wangsulan
          </Button>
        ) : (
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 rounded-md ${
                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {isCorrect
                ? 'Leres! Wangsulan panjenengan trep.'
                : 'Nyuwun pangapunten, pilihan panjenengan kirang trep.'}
            </motion.div>
            <Button
              onClick={handleTryAgain}
              variant="outline"
              className="w-full border-blue-200 text-slate-700 hover:bg-white/50"
            >
              Cobi Malih
            </Button>
          </div>
        )}
      </div>
    </QuizCard>
  );
}