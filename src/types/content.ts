interface Exercise {
  type: 'multiple-choice-cloze' | 'writing' | 'reading';
  // ... resto de propiedades
}

interface Topic {
  title: string;
  description: string;
  level: string;
  exercises: Exercise[];
}

export interface ContentTypes {
  exercises: Record<string, Topic>;
  documentation: Record<string, Topic>;
} 