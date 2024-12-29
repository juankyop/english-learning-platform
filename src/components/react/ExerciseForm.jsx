import { useState } from 'react';

export default function ExerciseForm({ topicId }) {
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de validación
    setFeedback('¡Buen trabajo! Has completado los ejercicios.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Ejercicios dinámicos basados en el topicId */}
      <div className="exercise-container">
        {/* Aquí irían los ejercicios */}
      </div>

      <button 
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Verificar respuestas
      </button>

      {feedback && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          {feedback}
        </div>
      )}
    </form>
  );
} 