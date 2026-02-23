import React, { useState } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Mensajınız başarıyla gönderildi!'); // You can localize this later
                e.target.reset();
            } else {
                setStatus('Bir hata oluştu. Lütfen tekrar deneyin.'); // You can localize this later
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="heading-secondary">{t('contact.title')}</h2>
                <p className="contact-subtitle">
                    {t('contact.subtitle')}
                </p>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-content">
                            <div className="form-left">
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.nameLabel')}</label>
                                    <input type="text" id="name" name="name" placeholder={t('contact.namePlaceholder')} required disabled={isLoading} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.emailLabel')}</label>
                                    <input type="email" id="email" name="email" placeholder={t('contact.emailPlaceholder')} required disabled={isLoading} />
                                </div>
                            </div>
                            <div className="form-right">
                                <div className="form-group form-group-message">
                                    <label htmlFor="message">{t('contact.messageLabel')}</label>
                                    <textarea id="message" name="message" placeholder={t('contact.messagePlaceholder')} required disabled={isLoading}></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn" disabled={isLoading}>
                            {isLoading ? 'Gönderiliyor...' : t('contact.submit')}
                        </button>
                        {status && <p className={`contact-status ${status.includes('hata') ? 'error' : 'success'}`}>{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
