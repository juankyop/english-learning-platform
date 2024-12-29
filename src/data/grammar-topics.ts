export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  completed?: boolean;
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'present-simple',
    title: 'Present Simple',
    description: 'Aprende a usar el presente simple para hablar de rutinas y verdades generales.',
    level: 'A1',
    icon: '/icons/grammar/present-simple.svg',
    completed: false
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    description: 'Expresa acciones que están ocurriendo en este momento.',
    level: 'A1',
    icon: '/icons/grammar/present-continuous.svg',
    completed: false
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    description: 'Habla sobre acciones que ocurrieron en el pasado.',
    level: 'A2',
    icon: '/icons/grammar/past-simple.svg',
    completed: false
  },
  // Añade más temas según necesites
]; 