'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { QuizResult } from "@/types";
import { motion } from "framer-motion";

interface QuizResultProps {
  result: QuizResult;
  onClose: () => void;
  onRetry: () => void;
  open: boolean;
}

export function QuizResultDialog({ result, onClose, open, onRetry }: QuizResultProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white/95 backdrop-blur-sm">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl text-modern-dark">Hasil Quiz</DialogTitle>
          <DialogDescription>
            <div className="text-center py-4">
              <p className="text-4xl font-bold text-modern-dark mb-2">
                {result.score}%
              </p>
              <p className="text-lg text-slate-700 mb-4">
                {result.correctAnswers} benar dari {result.totalQuestions} soal
              </p>
              <p className="text-slate-700">{result.feedback}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <Button
            onClick={onRetry}
            className="w-full sm:w-auto btn-primary"
          >
            Coba Lagi
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full sm:w-auto"
          >Pilih Kuis Lain</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface QuizCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function QuizCard({ children, title, description }: QuizCardProps) {
  return (
    <Card className="card-modern">
      <CardHeader>
        <CardTitle className="text-modern-dark">{title}</CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

interface QuizLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function QuizLayout({ children, title, description }: QuizLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl font-bold text-modern-dark mb-4">{title}</h1>
        <p className="text-lg text-slate-700">{description}</p>
      </motion.div>
      {children}
    </div>
  );
}