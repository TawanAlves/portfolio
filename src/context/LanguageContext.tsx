"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { dict } from '../i18n/dictionaries';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof dict.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language;
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('lang', next);
      
      // Update the html tag's lang attribute
      if (document && document.documentElement) {
        document.documentElement.lang = next;
      }
      
      return next;
    });
  };

  // Add html hydration sync
  useEffect(() => {
    if (document && document.documentElement) {
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: dict[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
