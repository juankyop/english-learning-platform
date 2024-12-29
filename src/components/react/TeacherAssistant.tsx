import { useState, useEffect } from 'react';
import type { Tip } from '../../types/theory';

interface TeacherAssistantProps {
  tips: Tip[];
  currentSection: string;
}

export default function TeacherAssistant({ tips, currentSection }: TeacherAssistantProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTip, setCurrentTip] = useState<Tip | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const relevantTips = tips.filter(tip => tip.section === currentSection);
    if (relevantTips.length > 0) {
      setCurrentTip(relevantTips[0]);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentSection]);

  const getNextTip = () => {
    const relevantTips = tips.filter(tip => tip.section === currentSection);
    const currentIndex = relevantTips.findIndex(tip => tip.id === currentTip?.id);
    if (currentIndex < relevantTips.length - 1) {
      setCurrentTip(relevantTips[currentIndex + 1]);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const getTipIcon = (type: Tip['type']) => {
    switch (type) {
      case 'memory':
        return '🧠';
      case 'usage':
        return '💡';
      case 'warning':
        return '⚠️';
      case 'fun-fact':
        return '✨';
      default:
        return '💭';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-[calc(100%+1rem)]'}`}>
        {/* Botón para minimizar/maximizar */}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="absolute -top-8 right-0 bg-blue-600 text-white p-2 rounded-t-lg"
        >
          {isVisible ? '👇 Minimizar Prof.' : '👆 Maximizar Prof.'}
        </button>

        {/* Contenedor principal del profesor */}
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm border-2 border-blue-200">
          {/* Avatar y nombre */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              👨‍🏫
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-gray-900">Prof. Smith</h3>
              <p className="text-sm text-gray-600">Tu guía de inglés</p>
            </div>
          </div>

          {/* Burbuja de diálogo */}
          <div className={`bg-blue-50 p-4 rounded-lg relative ${isAnimating ? 'animate-bounce' : ''}`}>
            <div className="absolute -left-2 top-4 w-0 h-0 border-8 border-transparent border-r-blue-50" />
            {currentTip && (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{getTipIcon(currentTip.type)}</span>
                  <span className="text-sm font-medium text-blue-800">
                    {currentTip.type === 'memory' && 'Truco de memoria'}
                    {currentTip.type === 'usage' && 'Consejo de uso'}
                    {currentTip.type === 'warning' && '¡Atención!'}
                    {currentTip.type === 'fun-fact' && '¿Sabías que...?'}
                  </span>
                </div>
                <p className="text-gray-800 mb-2">{currentTip.message}</p>
                {currentTip.example && (
                  <div className="bg-white p-2 rounded mt-2 text-sm">
                    <span className="font-medium">Ejemplo: </span>
                    {currentTip.example}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Botones de interacción */}
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={getNextTip}
              className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
            >
              Siguiente tip
            </button>
            <button
              onClick={() => {/* Lógica para pedir explicación */}}
              className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
            >
              ¿Me lo explicas mejor?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 