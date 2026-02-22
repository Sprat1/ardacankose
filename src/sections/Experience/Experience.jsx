import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import './Experience.css';

const Experience = () => {
    const { t } = useTranslation();
    const items = t('experience.items') || [];

    // Attach links that shouldn't be duplicated in translation files
    const experienceData = items.map((item, index) => {
        const links = [
            'https://www.instagram.com/ytumint/?hl=en',
            'https://www.instagram.com/ytumint/?hl=en',
            'https://www.instagram.com/ytumint/?hl=en',
            null
        ];
        return { ...item, href: links[index] };
    });

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="heading-secondary">{t('experience.title')}</h2>
                <p className="experience-subtitle">
                    {t('experience.subtitle')}
                </p>

                <div className="experience-timeline">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{exp.role}</h3>
                                {exp.href ? (
                                    <a href={exp.href} target="_blank" rel="noopener noreferrer" className="timeline-company-link">
                                        <h4 className="timeline-company">{exp.company}</h4>
                                    </a>
                                ) : (
                                    <h4 className="timeline-company">{exp.company}</h4>
                                )}
                                <div className="timeline-meta">
                                    <span className="timeline-date">{exp.date}</span>
                                    {exp.type && <span className="timeline-type">{exp.type}</span>}
                                    {exp.location && <span className="timeline-location">{exp.location}</span>}
                                </div>
                                <p className="timeline-desc">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
