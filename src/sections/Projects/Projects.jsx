import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { t } = useTranslation();
    const items = t('projects.items') || [];

    const projectsData = items.map((item, index) => {
        const links = [
            'https://drive.google.com/drive/folders/1t4pea2hQFRA3Adu8-HX_oXTP337EyEP6?usp=drive_link',
            'https://www.linkedin.com/in/ardacankose'
        ];
        return { ...item, link: links[index] };
    });

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="heading-secondary">{t('projects.title')}</h2>
                <p className="projects-subtitle">
                    {t('projects.subtitle')}
                </p>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary project-btn">
                                    {t('projects.viewDetails')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
