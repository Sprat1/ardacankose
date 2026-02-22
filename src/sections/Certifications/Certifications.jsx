import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import './Certifications.css';

const Certifications = () => {
    const { t } = useTranslation();
    const items = t('certifications.items') || [];

    const certificationsData = items.map((item) => ({
        ...item,
        link: 'https://www.linkedin.com/in/ardacankose'
    }));

    return (
        <section id="certifications" className="section certifications-section">
            <div className="container">
                <h2 className="heading-secondary">{t('certifications.title')}</h2>
                <p className="certifications-subtitle">
                    {t('certifications.subtitle')}
                </p>

                <div className="certifications-grid">
                    {certificationsData.map((cert, index) => (
                        <div key={index} className="cert-card">
                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <h4 className="cert-issuer">{cert.issuer}</h4>
                                <p className="cert-date">{cert.date}</p>
                                <p className="cert-desc">{cert.description}</p>
                                <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">{cert.viewCert || t('projects.viewDetails')}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
