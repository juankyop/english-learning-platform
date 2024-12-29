import type { Exercise } from '../../types/exercises';

export const readingExercises: Record<string, Exercise> = {
  "1": {
    id: 1,
    title: 'Environmental Conservation',
    type: 'use-of-english-part1',
    difficulty: 'Medium',
    timeAllowed: 15,
    totalQuestions: 8,
    text: `
    Environmental conservation (1) _____ increasingly important in today's world. As the global population continues to grow, the pressure on natural resources (2) _____ more intense. Scientists (3) _____ that if current trends continue, we could face severe environmental challenges in the coming decades.

    Many species (4) _____ extinction, and their habitats are being destroyed at an alarming rate. While some people might (5) _____ this as a distant problem, the reality is that it affects us all. The loss of biodiversity could (6) _____ serious consequences for human societies, including the disruption of food chains and the disappearance of potential medical resources.

    Fortunately, conservation efforts (7) _____ momentum worldwide. Communities and governments are working together to protect endangered species and their habitats. However, success (8) _____ on everyone's participation and commitment to sustainable practices.`,
    questions: [
      {
        id: 1,
        question: "",
        options: [
          { id: 'A', text: 'has become' },
          { id: 'B', text: 'had become' },
          { id: 'C', text: 'became' },
          { id: 'D', text: 'was becoming' }
        ],
        correctAnswer: 'A',
        explanation: "Se necesita el presente perfecto 'has become' para expresar un cambio que comenzó en el pasado y continúa siendo relevante en el presente."
      },
      {
        id: 2,
        question: "",
        options: [
          { id: 'A', text: 'gets' },
          { id: 'B', text: 'does' },
          { id: 'C', text: 'becomes' },
          { id: 'D', text: 'makes' }
        ],
        correctAnswer: 'C',
        explanation: "'becomes' es el verbo más apropiado para expresar un cambio gradual de estado o condición."
      },
      {
        id: 3,
        question: "",
        options: [
          { id: 'A', text: 'speak' },
          { id: 'B', text: 'warn' },
          { id: 'C', text: 'tell' },
          { id: 'D', text: 'say' }
        ],
        correctAnswer: 'B',
        explanation: "'warn' es el verbo correcto para expresar una advertencia o alerta sobre una situación preocupante."
      },
      {
        id: 4,
        question: "",
        options: [
          { id: 'A', text: 'face' },
          { id: 'B', text: 'confront' },
          { id: 'C', text: 'meet' },
          { id: 'D', text: 'encounter' }
        ],
        correctAnswer: 'A',
        explanation: "'face' es la colocación correcta con 'extinction' (face extinction = enfrentarse a la extinción)."
      },
      {
        id: 5,
        question: "",
        options: [
          { id: 'A', text: 'regard' },
          { id: 'B', text: 'think' },
          { id: 'C', text: 'consider' },
          { id: 'D', text: 'view' }
        ],
        correctAnswer: 'D',
        explanation: "'view this as' es la estructura correcta para expresar cómo se percibe o interpreta algo."
      },
      {
        id: 6,
        question: "",
        options: [
          { id: 'A', text: 'bring' },
          { id: 'B', text: 'have' },
          { id: 'C', text: 'make' },
          { id: 'D', text: 'take' }
        ],
        correctAnswer: 'B',
        explanation: "'have consequences' es la colocación correcta en inglés para expresar que algo tiene consecuencias."
      },
      {
        id: 7,
        question: "",
        options: [
          { id: 'A', text: 'are gaining' },
          { id: 'B', text: 'are taking' },
          { id: 'C', text: 'are making' },
          { id: 'D', text: 'are getting' }
        ],
        correctAnswer: 'A',
        explanation: "'gain momentum' es la expresión correcta para indicar que algo está ganando fuerza o impulso."
      },
      {
        id: 8,
        question: "",
        options: [
          { id: 'A', text: 'relies' },
          { id: 'B', text: 'counts' },
          { id: 'C', text: 'depends' },
          { id: 'D', text: 'rests' }
        ],
        correctAnswer: 'C',
        explanation: "'depend on' es la preposición correcta para expresar dependencia o condición necesaria."
      }
    ],
    tips: [
      "Lee todo el texto primero para entender el contexto general",
      "Presta atención a las palabras antes y después del hueco",
      "Considera el tiempo verbal del contexto",
      "Busca colocaciones y expresiones fijas comunes",
      "Verifica que la opción elegida tenga sentido gramatical y de significado"
    ],
    strategies: [
      {
        title: "Análisis del contexto",
        description: "Identifica el tema y el tiempo verbal predominante en el párrafo"
      },
      {
        title: "Colocaciones",
        description: "Busca combinaciones frecuentes de palabras (ej: 'gain momentum', 'face extinction')"
      },
      {
        title: "Coherencia gramatical",
        description: "Asegúrate de que la opción elegida mantiene la coherencia con el resto de la oración"
      },
      {
        title: "Preposiciones",
        description: "Presta especial atención cuando el hueco involucre verbos con preposición"
      }
    ]
  }
}; 