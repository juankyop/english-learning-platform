export type ExamLevel = 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface MultipleChoiceExercise {
  type: 'multiple-choice-cloze';
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}

export type Exercise = MultipleChoiceExercise; 