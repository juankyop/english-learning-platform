export interface CambridgeExam {
  id: string;
  name: string;
  level: string;
  sections: CambridgeSection[];
}

export interface CambridgeSection {
  id: string;
  name: string;
  partNumber: number;
  timeAllowed: number;
  totalQuestions: number;
  description: string;
  instructions: string;
  tips: string[];
  format: string;
  markingScheme: {
    pointsPerQuestion: number;
    totalPoints: number;
    negativeMarking: boolean;
  };
}

export interface ReadingPart extends CambridgeSection {
  type: 'reading';
  textType: string[];
  wordCount: number;
  questionTypes: string[];
  skills: string[];
}

export interface UseOfEnglishPart extends CambridgeSection {
  type: 'use-of-english';
  grammarPoints: string[];
  vocabularyAreas: string[];
  commonErrors: {
    error: string;
    correction: string;
    example: string;
  }[];
}

export type ExamPart = ReadingPart | UseOfEnglishPart; 