import { useState } from 'react';

interface Exercise {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-in-blank' | 'reorder';
  options?: string[];
  correctAnswer: string;
}

interface ExerciseFormProps {
  topicId: string;
  exercises: Exercise[];
}

export default function ExerciseForm({ topicId, exercises }: ExerciseFormProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = exercises.reduce((acc, exercise) => {
      acc[exercise.id] = answers[exercise.id] === exercise.correctAnswer;
      return acc;
    }, {} as Record<string, boolean>);
    
    setFeedback(results);
    setShowResults(true);
  };

  const score = showResults ? 
    Object.values(feedback).filter(Boolean).length / exercises.length * 100 : 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {exercises.map((exercise) => (
        <div key={exercise.id} className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {exercise.question}
          </h3>
          
          {exercise.type === 'multiple-choice' && (
            <div className="space-y-4">
              {exercise.options?.map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name={exercise.id}
                    value={option}
                    onChange={(e) => 
                      setAnswers({...answers, [exercise.id]: e.target.value})
                    }
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-3">{option}</span>
                </label>
              ))}
            </div>
          )}
          
          {exercise.type === 'fill-in-blank' && (
            <input
              type="text"
              onChange={(e) => 
                setAnswers({...answers, [exercise.id]: e.target.value})
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          )}

          {showResults && (
            <div className={`mt-4 p-4 rounded-md ${
              feedback[exercise.id] ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}>
              {feedback[exercise.id] ? '¡Correcto!' : 'Incorrecto. Intenta de nuevo.'}
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Verificar respuestas
        </button>

        {showResults && (
          <div className="text-lg font-semibold">
            Puntuación: {score.toFixed(0)}%
          </div>
        )}
      </div>
    </form>
  );
} 