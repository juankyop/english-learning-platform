import type { CambridgeExam, ReadingPart, UseOfEnglishPart } from '../../types/cambridge';

const readingPart1: ReadingPart = {
  id: 'reading-part1',
  type: 'reading',
  name: 'Multiple Choice Reading',
  partNumber: 1,
  timeAllowed: 20,
  totalQuestions: 8,
  description: 'Lee un texto y responde preguntas de opción múltiple.',
  instructions: 'Lee el texto y elige la mejor opción (A, B, C o D) para cada pregunta.',
  tips: [
    'Lee el texto rápidamente primero para entender la idea general',
    'Las preguntas siguen el orden del texto',
    'Elimina las opciones que son claramente incorrectas',
    'Asegúrate de que tu respuesta se base en el texto, no en tu conocimiento general'
  ],
  format: 'Un texto largo (350-400 palabras) seguido de 8 preguntas de opción múltiple',
  textType: [
    'Artículos de revistas y periódicos',
    'Novelas y cuentos',
    'Reseñas',
    'Otros textos narrativos'
  ],
  wordCount: 350,
  questionTypes: [
    'Idea principal',
    'Detalles específicos',
    'Opinión',
    'Actitud y tono',
    'Propósito',
    'Significado del contexto'
  ],
  skills: [
    'Comprensión detallada',
    'Identificación de opiniones y actitudes',
    'Comprensión de la estructura del texto'
  ],
  markingScheme: {
    pointsPerQuestion: 1,
    totalPoints: 8,
    negativeMarking: false
  }
};

const readingPart5: ReadingPart = {
  id: 'reading-part5',
  type: 'reading',
  name: 'Multiple Choice (Short Text)',
  partNumber: 5,
  timeAllowed: 22,
  totalQuestions: 6,
  description: 'Lee un texto corto y responde preguntas de opción múltiple sobre aspectos detallados.',
  instructions: 'Lee el texto y las preguntas. Para cada pregunta, marca la letra correcta A, B, C o D.',
  tips: [
    'Lee todo el texto antes de intentar responder',
    'Presta atención a las palabras clave en las preguntas',
    'Busca sinónimos y paráfrasis en las opciones',
    'Verifica tu respuesta volviendo al texto'
  ],
  format: 'Un texto de 220-250 palabras seguido de 6 preguntas de opción múltiple',
  textType: [
    'Artículos',
    'Folletos',
    'Textos informativos'
  ],
  wordCount: 220,
  questionTypes: [
    'Vocabulario',
    'Énfasis',
    'Opinión',
    'Significado',
    'Referencia global'
  ],
  skills: [
    'Comprensión detallada',
    'Deducción de significado por contexto',
    'Comprensión de estructura textual'
  ],
  markingScheme: {
    pointsPerQuestion: 2,
    totalPoints: 12,
    negativeMarking: false
  }
};

const readingPart6: ReadingPart = {
  id: 'reading-part6',
  type: 'reading',
  name: 'Gapped Text',
  partNumber: 6,
  timeAllowed: 15,
  totalQuestions: 6,
  description: 'Lee un texto con huecos y selecciona los párrafos faltantes.',
  instructions: 'Lee el texto. Los párrafos han sido removidos. Elige de los párrafos (A-G) el que mejor encaje en cada hueco (1-6). Hay un párrafo extra que no necesitas usar.',
  tips: [
    'Lee todo el texto primero para entender el tema general',
    'Busca conectores y referencias que unan los párrafos',
    'Fíjate en la coherencia y cohesión del texto',
    'Verifica que el párrafo elegido tenga sentido antes y después del hueco'
  ],
  format: 'Un texto con 6 huecos y 7 párrafos para elegir',
  textType: [
    'Artículos de revistas',
    'Textos literarios',
    'Textos informativos'
  ],
  wordCount: 500,
  questionTypes: [
    'Coherencia textual',
    'Cohesión',
    'Estructura del texto'
  ],
  skills: [
    'Comprensión de la estructura textual',
    'Identificación de conexiones textuales',
    'Comprensión de referencias'
  ],
  markingScheme: {
    pointsPerQuestion: 2,
    totalPoints: 12,
    negativeMarking: false
  }
};

const readingPart7: ReadingPart = {
  id: 'reading-part7',
  type: 'reading',
  name: 'Multiple Matching',
  partNumber: 7,
  timeAllowed: 15,
  totalQuestions: 10,
  description: 'Lee un texto o varios textos relacionados y responde preguntas emparejando información.',
  instructions: 'Lee el texto. Para cada pregunta (1-10), elige la sección (A-D) que corresponda a cada afirmación.',
  tips: [
    'Lee las preguntas antes que el texto para saber qué buscar',
    'Subraya las palabras clave en las preguntas',
    'Busca sinónimos y paráfrasis en el texto',
    'Puedes usar cada sección más de una vez'
  ],
  format: 'Un texto largo dividido en secciones o varios textos cortos relacionados',
  textType: [
    'Artículos',
    'Reseñas',
    'Textos informativos',
    'Textos promocionales'
  ],
  wordCount: 600,
  questionTypes: [
    'Localización de información específica',
    'Detalles',
    'Opiniones',
    'Actitudes'
  ],
  skills: [
    'Lectura selectiva',
    'Identificación de información específica',
    'Comprensión de detalles'
  ],
  markingScheme: {
    pointsPerQuestion: 1,
    totalPoints: 10,
    negativeMarking: false
  }
};

const useOfEnglishPart1: UseOfEnglishPart = {
  id: 'use-of-english-part1',
  type: 'use-of-english',
  name: 'Multiple Choice Cloze',
  partNumber: 1,
  timeAllowed: 15,
  totalQuestions: 8,
  description: 'Completa un texto eligiendo la palabra correcta para cada hueco.',
  instructions: 'Lee el texto y elige la palabra correcta (A, B, C o D) para cada hueco.',
  tips: [
    'Lee todo el texto primero para entender el contexto',
    'Mira las palabras antes y después del hueco',
    'Piensa en colocaciones comunes',
    'Considera el tiempo verbal y la estructura gramatical'
  ],
  format: 'Un texto con 8 huecos y 4 opciones para cada uno',
  grammarPoints: [
    'Auxiliares modales',
    'Tiempos verbales',
    'Determinantes',
    'Pronombres',
    'Preposiciones',
    'Conjunciones'
  ],
  vocabularyAreas: [
    'Colocaciones',
    'Expresiones idiomáticas',
    'Phrasal verbs',
    'Conectores'
  ],
  commonErrors: [
    {
      error: "Confundir 'make' y 'do'",
      correction: "Usar 'make' para creación y 'do' para actividades",
      example: "make a decision (✓) / do a decision (✗)"
    },
    {
      error: "Mal uso de preposiciones",
      correction: "Aprender colocaciones comunes",
      example: "depend on (✓) / depend of (✗)"
    }
  ],
  markingScheme: {
    pointsPerQuestion: 1,
    totalPoints: 8,
    negativeMarking: false
  }
};

const useOfEnglishPart2: UseOfEnglishPart = {
  id: 'use-of-english-part2',
  type: 'use-of-english',
  name: 'Open Cloze',
  partNumber: 2,
  timeAllowed: 15,
  totalQuestions: 8,
  description: 'Completa un texto escribiendo una palabra en cada hueco.',
  instructions: 'Lee el texto y piensa qué palabra falta en cada hueco. Usa solo una palabra en cada hueco.',
  tips: [
    'Lee todo el texto primero',
    'Piensa en palabras gramaticales (artículos, preposiciones, pronombres)',
    'Considera el contexto antes y después del hueco',
    'Revisa que la palabra encaje gramaticalmente'
  ],
  format: 'Un texto con 8 huecos para completar con una palabra cada uno',
  grammarPoints: [
    'Artículos',
    'Preposiciones',
    'Pronombres relativos',
    'Conjunciones',
    'Determinantes'
  ],
  vocabularyAreas: [
    'Palabras funcionales',
    'Conectores',
    'Referencias'
  ],
  commonErrors: [
    {
      error: "Usar más de una palabra",
      correction: "Solo se permite una palabra por hueco",
      example: "in the (✗) / in (✓)"
    },
    {
      error: "Olvidar artículos",
      correction: "Considerar si se necesita a/an/the",
      example: "He is _ teacher (the)"
    }
  ],
  markingScheme: {
    pointsPerQuestion: 1,
    totalPoints: 8,
    negativeMarking: false
  }
};

const useOfEnglishPart3: UseOfEnglishPart = {
  id: 'use-of-english-part3',
  type: 'use-of-english',
  name: 'Word Formation',
  partNumber: 3,
  timeAllowed: 15,
  totalQuestions: 8,
  description: 'Forma la palabra correcta a partir de una palabra dada.',
  instructions: 'Lee el texto. Usa la palabra en mayúsculas al final de cada línea para formar una palabra que encaje en el hueco.',
  tips: [
    'Identifica qué tipo de palabra se necesita (verbo, sustantivo, adjetivo, etc.)',
    'Considera prefijos y sufijos comunes',
    'Presta atención a formas negativas',
    'Verifica que la palabra tenga sentido en el contexto'
  ],
  format: 'Un texto con 8 huecos y una palabra base para cada uno que debe ser modificada',
  grammarPoints: [
    'Formación de palabras',
    'Prefijos',
    'Sufijos',
    'Cambios ortográficos'
  ],
  vocabularyAreas: [
    'Sustantivos',
    'Adjetivos',
    'Adverbios',
    'Verbos'
  ],
  commonErrors: [
    {
      error: "Ortografía incorrecta",
      correction: "Verificar reglas de ortografía al añadir sufijos",
      example: "happy → happiness (no happyness)"
    },
    {
      error: "No cambiar la palabra base",
      correction: "La palabra debe ser modificada",
      example: "SUCCESS → successful (no success)"
    }
  ],
  markingScheme: {
    pointsPerQuestion: 1,
    totalPoints: 8,
    negativeMarking: false
  }
};

const useOfEnglishPart4: UseOfEnglishPart = {
  id: 'use-of-english-part4',
  type: 'use-of-english',
  name: 'Key Word Transformation',
  partNumber: 4,
  timeAllowed: 15,
  totalQuestions: 6,
  description: 'Reescribe una frase usando una palabra clave y manteniendo el mismo significado.',
  instructions: 'Completa la segunda frase para que signifique lo mismo que la primera, usando la palabra dada. No cambies la palabra dada. Usa entre 2 y 5 palabras.',
  tips: [
    'Lee ambas frases cuidadosamente',
    'La palabra clave no puede ser cambiada',
    'Cuenta el número de palabras (2-5)',
    'Asegúrate de que el significado sea el mismo'
  ],
  format: 'Seis pares de frases con una palabra clave para cada transformación',
  grammarPoints: [
    'Pasiva',
    'Estilo indirecto',
    'Causativas',
    'Condicionales',
    'Wish/If only',
    'Modales'
  ],
  vocabularyAreas: [
    'Phrasal verbs',
    'Colocaciones',
    'Expresiones idiomáticas',
    'Estructuras fijas'
  ],
  commonErrors: [
    {
      error: "Usar más de 5 palabras",
      correction: "Limitar la respuesta a 2-5 palabras",
      example: "BEEN → has been living here for"
    },
    {
      error: "Cambiar la palabra clave",
      correction: "Mantener la palabra clave exactamente igual",
      example: "MAKE → makes/made/making (✗)"
    }
  ],
  markingScheme: {
    pointsPerQuestion: 2,
    totalPoints: 12,
    negativeMarking: false
  }
};

export const b2FirstExam: CambridgeExam = {
  id: 'b2-first',
  name: 'B2 First (FCE)',
  level: 'B2',
  sections: [
    readingPart1,
    readingPart5,
    readingPart6,
    readingPart7,
    useOfEnglishPart1,
    useOfEnglishPart2,
    useOfEnglishPart3,
    useOfEnglishPart4
  ]
}; 