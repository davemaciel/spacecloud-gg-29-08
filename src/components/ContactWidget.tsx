import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: Phone,
      url: 'https://api.whatsapp.com/send/?phone=551143958420&text&type=phone_number&app_absent=0',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      name: 'Instagram',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/spacecloud.gg',
      bgColor: 'bg-gradient-to-r from-orange-400 to-pink-600',
      hoverColor: 'hover:from-orange-500 hover:to-pink-700'
    },
    {
      name: 'Discord',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0  0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0  0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0  0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0  0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      url: 'https://discord.gg/aj9Dkajjkq',
      bgColor: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700'
    },
    {
      name: 'YouTube',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: 'https://www.youtube.com/@spacecloudgg',
      bgColor: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isOpen && (
        <AnimatedSection animation="slideUp" className="mb-4">
          <div className="flex flex-col gap-3">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar"
              className="flex items-center justify-center md:justify-start gap-0 md:gap-3 w-12 h-12 md:w-auto md:h-auto px-0 py-0 md:px-4 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <X className="w-5 h-5" />
              <span className="hidden md:inline font-medium">Fechar</span>
            </button>

            {/* Contact Options */}
            {contactOptions.map((option, index) => (
              <a
                key={option.name}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={option.name}
                className={`flex items-center justify-center md:justify-start gap-0 md:gap-3 w-12 h-12 md:w-auto md:h-auto px-0 py-0 md:px-4 md:py-3 ${option.bgColor} ${option.hoverColor} text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <option.icon />
                <span className="hidden md:inline font-medium">{option.name}</span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Main Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contate-nos"
        className="relative flex items-center justify-center md:justify-start gap-0 md:gap-3 w-14 h-14 md:w-auto md:h-auto px-0 py-0 md:px-6 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
      >
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
          1
        </div>
        
        <span className="hidden md:inline font-medium">Contate-nos</span>
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  );
}