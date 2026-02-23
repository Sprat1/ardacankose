import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import Highlighter from '../../components/Highlighter/Highlighter';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="heading-secondary"><Highlighter>{t('contact.title')}</Highlighter></h2>
                <p className="contact-subtitle">
                    {t('contact.subtitle')}
                </p>

                <div className="contact-form-container">
                    <form action="https://formspree.io/f/xeelpnaz" method="POST" className="contact-form">
                        <div className="form-content">
                            <div className="form-left">
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.nameLabel')}</label>
                                    <input type="text" id="name" name="name" placeholder={t('contact.namePlaceholder')} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.emailLabel')}</label>
                                    <input type="email" id="email" name="email" placeholder={t('contact.emailPlaceholder')} required />
                                </div>
                            </div>
                            <div className="form-right">
                                <div className="form-group form-group-message">
                                    <label htmlFor="message">{t('contact.messageLabel')}</label>
                                    <textarea id="message" name="message" placeholder={t('contact.messagePlaceholder')} required></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">{t('contact.submit')}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
