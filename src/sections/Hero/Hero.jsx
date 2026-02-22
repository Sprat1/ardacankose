import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero-section">
            <div className="hero-content container">
                <h1 className="hero-title animate-fade-up">
                    {t('hero.title')}
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
