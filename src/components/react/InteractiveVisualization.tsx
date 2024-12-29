import { useState } from 'react';
import type { InteractiveElement } from '../../types/theory';

interface VisualizationStep {
  subject: string;
  verb: string;
  highlight: string;
}

interface VisualizationProps {
  data: {
    animation: string;
    steps: VisualizationStep[];
  };
}

export default function InteractiveVisualization({ data }: VisualizationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-sm text-gray-500">
          Paso {currentStep + 1} de {data.steps.length}
        </span>
        <button
          onClick={() => setCurrentStep(prev => Math.min(data.steps.length - 1, prev + 1))}
          disabled={currentStep === data.steps.length - 1}
          className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-inner">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold">
            {data.steps[currentStep].subject}
            <span className="mx-2">+</span>
            <span className={data.steps[currentStep].highlight === 'base form' ? 'text-blue-600' : ''}>
              {data.steps[currentStep].verb}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {data.steps[currentStep].highlight}
          </p>
        </div>
      </div>
    </div>
  );
} 