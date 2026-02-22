import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-main">
                    <div className="footer-left">
                        <h3 className="footer-name">Ardacan Köse</h3>
                        <p className="footer-desc">
                            {t('footer.desc')}
                        </p>
                    </div>
                    <div className="footer-social">
                        <h3>{t('footer.social')}</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/ardacankose" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/ardacankose/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Ardacan Köse.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
