export interface TheoryExample {
  id: string;
  english: string;
  spanish: string;
  audio?: string;
  context?: string;
  visualization?: string; // URL a una imagen o animación
}

export interface CommonMistake {
  incorrect: string;
  correct: string;
  explanation: string;
  type: 'grammar' | 'usage' | 'pronunciation';
}

export interface InteractiveElement {
  type: 'quiz' | 'fillInBlanks' | 'dragAndDrop' | 'visualization' | 'audioComparison';
  content: any; // Tipado específico según el tipo
}

export interface TheorySection {
  id: string;
  title: string;
  explanation: string;
  examples: TheoryExample[];
  commonMistakes?: CommonMistake[];
  interactiveElements?: InteractiveElement[];
  visualAids?: {
    timelines?: string[];
    diagrams?: string[];
    comparisons?: {
      correct: string;
      incorrect: string;
      highlight: string;
    }[];
  };
}

export interface Tip {
  id: string;
  section: string;
  type: 'memory' | 'usage' | 'warning' | 'fun-fact';
  message: string;
  example?: string;
  animation?: string;
}

export interface TheoryTopic {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  sections: TheorySection[];
  realLifeApplications: {
    situation: string;
    examples: string[];
    practice: string;
  }[];
  memoryTechniques: {
    technique: string;
    explanation: string;
    example: string;
  }[];
  tips: Tip[];
  conceptMap: {
    mainConcept: string;
    relatedConcepts: {
      concept: string;
      relationship: string;
    }[];
  };
  progressionPath: {
    prerequisites: string[];
    nextTopics: string[];
    commonMistakes: string[];
  };
} 