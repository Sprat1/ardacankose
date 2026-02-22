import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useTranslation();
    const skills = t('about.skills') || [];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="heading-secondary">{t('about.title')}</h2>
                <p className="about-subtitle">
                    {t('about.subtitle')}
                </p>

                <div className="about-content">
                    <div className="about-text">
                        <h3>{t('about.getToknowMe')}</h3>
                        <p>
                            {t('about.p1_1')}<strong>{t('about.p1_bold1')}</strong>{t('about.p1_2')}<strong>{t('about.p1_bold2')}</strong>{t('about.p1_3')}
                        </p>
                        <p>
                            {t('about.p2')}
                        </p>

                        <a href="#contact" className="btn btn-primary mt-4">{t('about.contactBtn')}</a>
                    </div>

                    <div className="about-skills">
                        <h3>{t('about.skillsTitle')}</h3>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-chip">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
