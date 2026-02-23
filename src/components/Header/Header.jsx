import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import BackgroundGradientAnimation from '../BackgroundGradientAnimation/BackgroundGradientAnimation';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('experience.title'), href: '#experience' },
        { name: t('education.title'), href: '#education' },
        { name: t('certifications.title'), href: '#certifications' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <BackgroundGradientAnimation
                containerClassName="header-gradient-container"
                size="80%"
            >
                <div className="header-content container">
                    <div className="logo">
                        <a href="#home" onClick={closeMobileMenu}>
                            Ardacan<span className="logo-dot">.</span>
                        </a>
                    </div>

                    <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="lang-toggle-btn" onClick={toggleLanguage} aria-label="Toggle Language">
                            <FaGlobe /> {language === 'en' ? 'TR' : 'EN'}
                        </button>
                    </nav>

                    <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </BackgroundGradientAnimation>
        </header>
    );
};

export default Header;
