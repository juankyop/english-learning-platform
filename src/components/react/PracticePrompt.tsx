import { useState } from 'react';

interface PracticePromptProps {
  prompt: string;
}

export default function PracticePrompt({ prompt }: PracticePromptProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);

  const handleRecord = () => {
    if (isRecording) {
      // Aquí iría la lógica para detener la grabación
      setHasRecorded(true);
    } else {
      // Aquí iría la lógica para iniciar la grabación
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="space-y-4">
      <p className="text-gray-700">{prompt}</p>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={handleRecord}
          className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
            isRecording ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
          }`}
        >
          <span className={`w-3 h-3 rounded-full ${isRecording ? 'animate-pulse bg-white' : 'bg-red-500'}`} />
          <span>{isRecording ? 'Detener Grabación' : 'Iniciar Grabación'}</span>
        </button>

        {hasRecorded && (
          <button className="px-4 py-2 bg-green-600 text-white rounded-md">
            Enviar Práctica
          </button>
        )}
      </div>
    </div>
  );
} 