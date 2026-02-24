import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import Highlighter from '../../components/Highlighter/Highlighter';
import './Projects.css';
import colabLogo from '../../assets/colab-logo.png';

const Projects = () => {
    const { t } = useTranslation();
    const items = t('projects.items') || [];

    const projectsData = items.map((item, index) => {
        const links = [
            'https://www.kaggle.com/code/ardacankse/pgs5e5-ardacan-kose',
            'https://www.linkedin.com/in/ardacankose'
        ];
        return { ...item, link: item.link || links[index] };
    });

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="heading-secondary"><Highlighter>{t('projects.title')}</Highlighter></h2>
                <p className="projects-subtitle">
                    {t('projects.subtitle')}
                </p>

                <div className="projects-grid">
                    {projectsData.map((project, index) => {
                        const isColabProject = project.title === 'Quantitative Financial Projects';

                        return (
                            <div key={index} className={`project-card ${isColabProject ? 'bg-white' : ''}`}>
                                <div className="project-content">
                                    <h3 className={`project-title ${isColabProject ? 'text-colab' : ''}`}>{project.title}</h3>
                                    <p className={`project-desc ${isColabProject ? 'text-dark' : ''}`}>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary project-btn">
                                        {t('projects.viewDetails')}
                                    </a>
                                    {isColabProject && (
                                        <img src={colabLogo} alt="Google Colab" className="colab-card-logo" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
