'use client';

import { useState } from 'react';
import { ReadingQuiz } from '@/components/shared/reading-quiz';
import { MatchingQuiz } from '@/components/shared/matching-quiz';
import { FillInBlankQuiz } from '@/components/shared/fill-in-blank-quiz';
import { QuizLayout } from '@/components/shared/quiz-components';
import { QuizResultDialog } from '@/components/shared/quiz-components';
import { quizQuestions, quizFeedback } from '@/lib/constants/quiz';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function UjiKemampuanPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + currentQuestion.points);
    }
    
    if (isLastQuestion) {
      const finalScore = (newAnswers.filter(Boolean).length / quizQuestions.length) * 100;
      setScore(finalScore);
      setShowResult(true);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1500);
    }
  };

  const getFeedback = (score: number) => {
    if (score >= quizFeedback.excellent.threshold) return quizFeedback.excellent.message;
    if (score >= quizFeedback.good.threshold) return quizFeedback.good.message;
    return quizFeedback.needsPractice.message;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'reading':
        return (
          <ReadingQuiz
            aksara={currentQuestion.question}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswer={handleAnswer}
          />
        );
      case 'matching':
        return (
          <MatchingQuiz
            options={[
              { aksara: currentQuestion.question, latin: currentQuestion.correctAnswer }
              // Add more matching pairs if needed
            ]}
            onAnswer={handleAnswer}
          />
        );
      case 'fillInBlank':
        return (
          <FillInBlankQuiz
            question={currentQuestion.question}
            options={currentQuestion.options || []}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswer={handleAnswer}
          />
        );
      default:
        return null;
    }
  };

  return (
    <QuizLayout
      title="Uji Kemampuan"
      description="Tes pemahaman Anda tentang Aksara Jawa"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <p className="text-slate-700">
            Soal {currentQuestionIndex + 1} dari {quizQuestions.length}
          </p>
          <Button
            variant="outline"
            onClick={resetQuiz}
            className="border-blue-200 text-slate-700 hover:bg-white/50"
          >
            Mulai Ulang
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderQuestion()}
          </motion.div>
        </AnimatePresence>

        <QuizResultDialog
          open={showResult}
          onClose={() => setShowResult(false)}
          result={{
            score,
            totalQuestions: quizQuestions.length,
            correctAnswers: answers.filter(Boolean).length,
            feedback: getFeedback(score),
          }}
        />
      </div>
    </QuizLayout>
  );
}