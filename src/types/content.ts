export interface GrammarTopic {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: 'grammar' | 'vocabulary' | 'pronunciation';
  content: {
    theory: string;
    examples: string[];
    commonMistakes: string[];
  };
}

export type WritingModelType = 'formal-letter' | 'informal-letter' | 'essay' | 'email' | 'report';

export interface WritingModel {
  id: string;
  type: WritingModelType;
  title: string;
  description: string;
  structure: {
    sections: string[];
    examples: string[];
  };
  tips: string[];
} 