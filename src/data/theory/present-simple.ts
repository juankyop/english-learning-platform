import type { TheoryTopic } from '../../types/theory';

export const presentSimple: TheoryTopic = {
  id: 'present-simple',
  title: 'Present Simple',
  level: 'A1',
  conceptMap: {
    mainConcept: 'Acciones habituales y verdades generales',
    relatedConcepts: [
      {
        concept: 'Adverbios de frecuencia',
        relationship: 'Se usan para indicar qué tan seguido ocurre la acción'
      },
      {
        concept: 'Estado permanente',
        relationship: 'Describe situaciones que no cambian frecuentemente'
      }
    ]
  },
  sections: [
    {
      id: 'understanding',
      title: '¿Cuándo usamos el Present Simple?',
      explanation: `Imagina que estás haciendo un álbum de fotos de tu vida. El Present Simple es como 
      capturar las cosas que son "normales" o "típicas" en tu día a día. Es el tiempo verbal que 
      usamos para hablar de:
      
      1. Rutinas y hábitos
      2. Hechos generales y verdades universales
      3. Horarios y programaciones
      4. Gustos y preferencias`,
      examples: [
        {
          id: 'routine',
          english: 'I wake up at 7 AM every day',
          spanish: 'Me despierto a las 7 AM todos los días',
          context: 'Rutina diaria'
        },
        {
          id: 'universal-truth',
          english: 'The Sun rises in the east',
          spanish: 'El Sol sale por el este',
          context: 'Verdad universal'
        }
      ]
    }
  ],
  tips: [
    {
      id: 'tip1',
      section: 'formation',
      type: 'memory',
      message: "¡Hey! 👋 ¿Te cuesta recordar cuándo añadir la -s? Piensa en esto: He/She/It son como superhéroes solitarios, ¡siempre necesitan su capa especial (-s)!",
      example: "He runs (✅) vs They run (✅)"
    }
  ],
  realLifeApplications: [
    {
      situation: 'Describiendo tu rutina diaria en una entrevista de trabajo',
      examples: [
        'I usually arrive at 9:00',
        'I handle customer complaints',
        'I speak with clients daily'
      ],
      practice: 'Graba un video corto describiendo tu rutina ideal de trabajo'
    }
  ],
  memoryTechniques: [
    {
      technique: 'La regla del -s sandwich',
      explanation: 'Imagina que He/She/It son el pan de un sandwich, y el verbo es el relleno. El pan siempre necesita algo extra (la -s) para estar completo.',
      example: 'He (pan superior) + work + s (el extra) = He works'
    }
  ],
  progressionPath: {
    prerequisites: [],
    nextTopics: ['present-continuous', 'adverbs-of-frequency'],
    commonMistakes: [
      'Olvidar la -s en tercera persona',
      'Usar Present Simple para acciones en progreso',
      'Posición incorrecta de los adverbios de frecuencia'
    ]
  }
}; 