import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import './Education.css';

const Education = () => {
    const { t } = useTranslation();
    const items = t('education.items') || [];

    const educationData = items.map((item) => ({
        ...item,
        link: 'https://www.linkedin.com/in/ardacankose'
    }));

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="heading-secondary">{t('education.title')}</h2>
                <p className="education-subtitle">
                    {t('education.subtitle')}
                </p>

                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">{edu.institution}</h3>
                                <h4 className="timeline-degree">{edu.degree}</h4>
                                <p className="timeline-date">{edu.date}</p>
                                <p className="timeline-desc">{edu.description}</p>
                                <a href={edu.link} target="_blank" rel="noreferrer" className="timeline-link">{edu.viewDetails || t('projects.viewDetails')}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
