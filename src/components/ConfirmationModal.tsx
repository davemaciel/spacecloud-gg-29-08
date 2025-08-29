import React from 'react';
import { X } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { TermsOfUse } from '../pages/TermsOfUse';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  planTitle: string;
}

export function ConfirmationModal({ isOpen, onClose, onConfirm, planTitle }: ConfirmationModalProps) {
  const [accepted, setAccepted] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);
  const [showPrivacy, setShowPrivacy] = React.useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (accepted) {
      onConfirm();
    }
  };

  const handleShowTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTerms(true);
    setShowPrivacy(false);
  };

  const handleShowPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPrivacy(true);
    setShowTerms(false);
  };

  const handleBack = () => {
    setShowTerms(false);
    setShowPrivacy(false);
  };

  if (showTerms) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-[80vh] bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900 rounded-xl overflow-hidden">
          <div className="h-full overflow-y-auto">
            <TermsOfUse onBack={handleBack} />
          </div>
        </div>
      </div>
    );
  }

  if (showPrivacy) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-[80vh] bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900 rounded-xl overflow-hidden">
          <div className="h-full overflow-y-auto">
            <PrivacyPolicy onBack={handleBack} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <AnimatedSection animation="scale" className="w-full max-w-md">
        <div className="bg-gray-800 rounded-xl shadow-xl">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Confirmar Compra</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-300 mb-6">
              Você está prestes a adquirir o plano <span className="font-semibold text-indigo-400">{planTitle}</span>
            </p>
            
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-offset-gray-800"
                />
                <span className="text-sm text-gray-300">
                  Li e aceito os{' '}
                  <button 
                    onClick={handleShowTerms}
                    className="text-indigo-400 hover:text-indigo-300 underline"
                  >
                    Termos de Uso
                  </button>
                  {' '}e a{' '}
                  <button
                    onClick={handleShowPrivacy}
                    className="text-indigo-400 hover:text-indigo-300 underline"
                  >
                    Política de Privacidade
                  </button>
                  {' '}da Space Cloud.
                </span>
              </label>
            </div>

            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                disabled={!accepted}
                className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                  accepted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}