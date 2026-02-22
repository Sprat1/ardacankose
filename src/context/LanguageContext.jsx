import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../translations/translations';

const LanguageContext = createContext();

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Optional: Check local storage for saved language preference
        const savedLang = localStorage.getItem('portfolio_lang');
        if (savedLang && (savedLang === 'en' || savedLang === 'tr')) {
            setLanguage(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'tr' : 'en';
        setLanguage(newLang);
        localStorage.setItem('portfolio_lang', newLang);
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key; // Fallback to key if not found
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
