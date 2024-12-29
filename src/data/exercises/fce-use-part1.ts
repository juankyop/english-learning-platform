import type { UseOfEnglishExercise } from '../../types/exercises';

export const fceUsePart1: UseOfEnglishExercise = {
  id: 'fce-use-part1',
  title: 'Multiple Choice Cloze',
  text: `The History of Tea

Tea (1) _____ an important part in many cultures around the world. The drink (2) _____ to have originated in China, where according to legend, it was discovered by Emperor Shen Nung in 2737 BC when some tea leaves accidentally (3) _____ into his pot of boiling water.

Today, tea (4) _____ the most widely consumed beverage in the world after water. Its popularity (5) _____ to its refreshing taste and potential health benefits. Research has (6) _____ that certain types of tea may help reduce the risk of heart disease and some cancers.

Tea (7) _____ in many different ways, depending on local customs and preferences. While some people (8) _____ milk or sugar to their tea, others prefer it plain.`,
  questions: [
    {
      id: '1',
      text: 'Choose the correct word for gap (1)',
      options: ['plays', 'makes', 'does', 'takes'],
      correctAnswer: 'plays',
      explanation: 'La expresión correcta es "play a part" (jugar un papel/tener un rol)'
    },
    {
      id: '2',
      text: 'Choose the correct word for gap (2)',
      options: ['is believed', 'believes', 'believed', 'believing'],
      correctAnswer: 'is believed',
      explanation: 'Se usa voz pasiva porque es una creencia general sin un sujeto específico'
    },
    {
      id: '3',
      text: 'Choose the correct word for gap (3)',
      options: ['felt', 'fell', 'fallen', 'falling'],
      correctAnswer: 'fell',
      explanation: 'Necesitamos el pasado simple del verbo "fall" para una acción puntual en el pasado'
    },
    // ... más preguntas
  ],
  type: 'multiple-choice'
}; 