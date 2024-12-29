import { useState } from 'react';
import type { WritingModel } from '../../types/content';

interface WritingSelectorProps {
  models: WritingModel[];
}

export default function WritingSelector({ models }: WritingSelectorProps) {
  const [selectedModel, setSelectedModel] = useState<WritingModel | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => setSelectedModel(model)}
            className={`p-6 text-left border rounded-lg transition-colors ${
              selectedModel?.id === model.id
                ? 'border-blue-500 bg-blue-50'
                : 'hover:border-gray-300'
            }`}
          >
            <h3 className="text-lg font-medium text-gray-900">{model.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{model.description}</p>
          </button>
        ))}
      </div>

      {selectedModel && (
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{selectedModel.title}</h2>
          
          <div className="prose max-w-none">
            <h3>Estructura</h3>
            <ul>
              {selectedModel.structure.sections.map((section, index) => (
                <li key={index}>{section}</li>
              ))}
            </ul>

            <h3>Ejemplos</h3>
            <ul>
              {selectedModel.structure.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>

            <h3>Consejos</h3>
            <ul>
              {selectedModel.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 