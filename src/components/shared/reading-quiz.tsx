'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuizCard } from "./quiz-components";
import { motion } from "framer-motion";

interface ReadingQuizProps {
  aksara: string;
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export function ReadingQuiz({ aksara, correctAnswer, onAnswer }: ReadingQuizProps) {
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    const correct = answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    setIsCorrect(correct);
    setShowResult(true);
    onAnswer(correct);
  };

  const handleTryAgain = () => {
    setAnswer("");
    setShowResult(false);
  };

  return (
    <QuizCard
      title="Baca Aksara Jawa"
      description="Ketik bacaan latin yang sesuai dengan aksara di bawah ini"
    >
      <div className="space-y-6">
        <div className="text-center">
          <motion.span
            className="aksara-jawa text-6xl text-modern-dark inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {aksara}
          </motion.span>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Ketik jawaban Anda..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border-blue-200 focus:border-blue-400 text-modern-dark"
            disabled={showResult}
          />

          {!showResult ? (
            <Button
              onClick={handleSubmit}
              className="w-full btn-primary"
              disabled={!answer}
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
                {isCorrect ? "Benar!" : `Maaf, jawaban yang benar adalah "${correctAnswer}"`}
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
      </div>
    </QuizCard>
  );
}