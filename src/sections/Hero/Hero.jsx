import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import EncryptedText from '../../components/EncryptedText/EncryptedText';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();
    const title = t('hero.title');
    const parts = title.split('Ardacan Köse');

    return (
        <section id="home" className="hero-section">
            <div className="hero-content container">
                <h1 className="hero-title animate-fade-up">
                    {parts[0]}
                    {parts.length > 1 && <EncryptedText text="Ardacan Köse" />}
                    {parts.length > 1 && parts[1]}
                    {parts.length === 1 && title}
                </h1>
                <p className="hero-location animate-fade-up" style={{ animationDelay: '0.1s', color: 'var(--color-text-secondary)', fontSize: '1.2rem', marginBottom: '1.5rem', marginTop: '-1rem' }}>
                    {t('hero.location')}
                </p>
                <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    {t('hero.subtitle')}
                </p>
                <div className="hero-cta animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#about" className="btn btn-primary">{t('hero.aboutBtn')}</a>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="mouse"></div>
            </div>
        </section>
    );
};

export default Hero;
