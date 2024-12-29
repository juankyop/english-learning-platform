import type { CambridgeExam } from '../types/exercises';

export const cambridgeExams: CambridgeExam[] = [
  {
    level: 'B2',
    name: 'FCE',
    readingParts: [
      {
        id: 'fce-reading-part1',
        title: 'Multiple Choice',
        description: 'Lee un texto y responde preguntas de opción múltiple',
        timeAllowed: 20,
        numberOfQuestions: 8,
        tips: [
          'Lee el texto rápidamente primero para entender la idea general',
          'Las preguntas siguen el orden del texto',
          'Todas las respuestas están en el texto, no uses conocimiento externo'
        ]
      },
      {
        id: 'fce-reading-part2',
        title: 'Gapped Text',
        description: 'Completa el texto con párrafos faltantes',
        timeAllowed: 25,
        numberOfQuestions: 7,
        tips: [
          'Lee el texto completo primero, ignorando los huecos',
          'Busca conectores y referencias',
          'Verifica la coherencia antes y después del hueco'
        ]
      },
      // Añadir más partes...
    ],
    useOfEnglishParts: [
      {
        id: 'fce-use-part1',
        title: 'Multiple Choice Cloze',
        description: 'Elige la palabra correcta para cada hueco',
        timeAllowed: 15,
        numberOfQuestions: 8,
        tips: [
          'Lee todo el texto primero',
          'Considera el contexto completo de la oración',
          'Presta atención a las colocaciones comunes'
        ]
      },
      // Añadir más partes...
    ]
  },
  // Añadir más exámenes...
]; 