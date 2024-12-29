export type ExamLevel = 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Exercise {
  id: number;
  title: string;
  type: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeAllowed: number;
  totalQuestions: number;
  text: string;
  questions: Question[];
  tips: string[];
  strategies: Strategy[];
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface Strategy {
  title: string;
  description: string;
} 