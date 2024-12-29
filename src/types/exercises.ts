export type ExamLevel = 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type ExamName = 'KET' | 'PET' | 'FCE' | 'CAE' | 'CPE';

export interface ExamPart {
  id: string;
  title: string;
  description: string;
  timeAllowed: number; // en minutos
  numberOfQuestions: number;
  tips: string[];
}

export interface CambridgeExam {
  level: ExamLevel;
  name: ExamName;
  readingParts: ExamPart[];
  useOfEnglishParts: ExamPart[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  level: ExamLevel;
  description: string;
}

export interface ExerciseQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ReadingExercise {
  id: string;
  title: string;
  text: string;
  questions: ExerciseQuestion[];
}

export interface UseOfEnglishExercise {
  id: string;
  title: string;
  text: string;
  questions: ExerciseQuestion[];
  type: 'multiple-choice' | 'open-cloze' | 'word-formation' | 'key-word-transformation';
} 