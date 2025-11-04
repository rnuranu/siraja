'use client';

import { useState } from 'react';
import { ReadingQuiz } from '@/components/shared/reading-quiz';
import { MatchingQuiz } from './matching-quiz'; // <-- PERBAIKAN DI SINI
import { FillInBlankQuiz } from '@/components/shared/fill-in-blank-quiz';
import { QuizLayout } from '@/components/shared/quiz-components';
import { QuizResultDialog } from '@/components/shared/quiz-components';
import { quizQuestions, quizFeedback } from '@/lib/constants/quiz';
import { QuizQuestion } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Shuffle, CheckSquare, PencilLine } from 'lucide-react';

type QuizType = 'reading' | 'matching' | 'fillInBlank';
type QuizState = 'selecting' | 'in-progress' | 'finished';

export default function UjiKemampuanPage() {
  const [quizState, setQuizState] = useState<QuizState>('selecting');
  const [lastQuizType, setLastQuizType] = useState<QuizType | 'all' | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;

  const startQuiz = (type: QuizType | 'all') => {
    setLastQuizType(type);
    const questions =
      type === 'all'
        ? [...quizQuestions].sort(() => Math.random() - 0.5) // Shuffle all questions
        : quizQuestions.filter((q) => q.type === type);
    setActiveQuestions(questions);
    setQuizState('in-progress');
  };

  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      const totalPoints = activeQuestions.reduce((sum, q) => sum + q.points, 0);
      const userPoints = activeQuestions
        .map((q, i) => (newAnswers[i] ? q.points : 0))
        .reduce((sum, p) => sum + p, 0);

      const finalScore = totalPoints > 0 ? (userPoints / totalPoints) * 100 : 0;

      setScore(finalScore);
      setQuizState('finished');
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000); // Reduced delay for faster transition
    }
  };

  const getFeedback = (score: number) => {
    if (score >= quizFeedback.excellent.threshold) return quizFeedback.excellent.message;
    if (score >= quizFeedback.good.threshold) return quizFeedback.good.message;
    return quizFeedback.needsPractice.message;
  };

  const resetQuiz = () => {
    setQuizState('selecting');
    setLastQuizType(null);
    setCurrentQuestionIndex(0);
    setActiveQuestions([]);
    setScore(0);
    setAnswers([]);
  };

  const renderQuestion = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.type) {
      case 'reading':
        return (
          <ReadingQuiz
            aksara={currentQuestion.question}
            correctAnswer={currentQuestion.correctAnswer!}
            onAnswer={handleAnswer}
          />
        );
      case 'matching':
        return (
          <MatchingQuiz
            question={currentQuestion.question}
            pairs={currentQuestion.pairs || []}
            onAnswer={handleAnswer}
          />
        );
      case 'fillInBlank':
        return (
          <FillInBlankQuiz
            question={currentQuestion.question}
            options={currentQuestion.options || []}
            correctAnswer={currentQuestion.correctAnswer!}
            onAnswer={handleAnswer}
          />
        );
      default:
        return null;
    }
  };

  const quizOptions = [
    { type: 'all', label: 'Sedaya Pitakenan (Acak)', icon: <Shuffle className="w-5 h-5 mr-2" /> },
    { type: 'reading', label: 'Maos Aksara', icon: <BookOpen className="w-5 h-5 mr-2" /> },
    { type: 'matching', label: 'Masangaken', icon: <CheckSquare className="w-5 h-5 mr-2" /> },
    { type: 'fillInBlank', label: 'Njangkepi Tembung', icon: <PencilLine className="w-5 h-5 mr-2" /> },
  ];

  return (
    <QuizLayout
      title="Gladhen Kasisan"
      description="Gladhen pangertosan panjenengan babagan Aksara Jawi"
    >
      <div className="max-w-3xl mx-auto">
        {quizState === 'selecting' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-modern-dark mb-4">Pilih Jinis Gladhen</h2>
            <p className="text-slate-600 mb-8">Mangga pilih kategori pitakenan ingkang badhe dipungarap.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quizOptions.map((opt) => (
                <Button
                  key={opt.type}
                  size="lg"
                  variant="outline"
                  className="h-auto py-4 justify-start text-left"
                  onClick={() => startQuiz(opt.type as QuizType | 'all')}
                >
                  {opt.icon}
                  <span className="font-semibold">{opt.label}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {quizState === 'in-progress' && currentQuestion && (
          <>
            <div className="mb-8 flex justify-between items-center">
              <p className="text-slate-700 font-medium">
                Pitakenan {currentQuestionIndex + 1} saking {activeQuestions.length}
              </p>
              <Button
                variant="outline"
                onClick={resetQuiz}
                className="border-blue-200 text-slate-700 hover:bg-white/50"
              >
                Pilih Gladhen Sanès
              </Button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {renderQuestion()}
              </motion.div>
            </AnimatePresence>
          </>
        )}

        <QuizResultDialog
          open={quizState === 'finished'}
          onClose={resetQuiz}
          result={{
            score: Math.round(score),
            totalQuestions: activeQuestions.length,
            correctAnswers: answers.filter(Boolean).length,
            feedback: getFeedback(Math.round(score)),
          }}
          onRetry={() => {
            resetQuiz();
            if (lastQuizType) startQuiz(lastQuizType);
          }}
        />
      </div>
    </QuizLayout>
  );
}