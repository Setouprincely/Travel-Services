"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translation, getTranslation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [t, setTranslation] = useState<Translation>(getTranslation('en'));

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage);
      setTranslation(getTranslation(savedLanguage));
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setTranslation(getTranslation(newLanguage));
    localStorage.setItem('language', newLanguage);
    
    // Update document language attribute
    document.documentElement.lang = newLanguage;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Language switcher component
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-blue-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
          language === 'fr'
            ? 'bg-blue-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        FR
      </button>
    </div>
  );
}
