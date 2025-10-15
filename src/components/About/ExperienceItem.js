import React from 'react';
import '../../styles/AboutStyles/experienceItem.css';

const ExperienceItem = ({ experience, isOpen, onToggle }) => {
  return (
    <div className="experience-item">
      <button
        onClick={onToggle}
        className="experience-header"
      >
        <div className="experience-header-content">
          <div className="experience-icon">
            <i className="fi fi-rr-briefcase"></i>
          </div>
          <div className="experience-details">
            <h3 className="experience-title">{experience.title}</h3>
            <p className="experience-company">{experience.company}</p>
            <div className="experience-meta">
              <span className="meta-item">
                <i className="fi fi-rr-calendar-check"></i>
                {experience.duration}
              </span>
              <span className="meta-item">
                <i className="fi fi-rr-marker"></i>
                {experience.location}
              </span>
            </div>
          </div>
        </div>
        <i className={`fi metaIcon ${isOpen ? "fi-rr-angle-small-up" :"fi-rr-angle-small-down"}`}></i>
      </button>

      <div className={`experience-content ${isOpen ? 'open' : ''}`}>
        <div className="experience-content-inner">
          <p className="experience-description">{experience.description}</p>

          <div className="experience-section-new">
            <h4 className="section-title">Key Responsibilities:</h4>
            <ul className="responsibilities-list">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>

          <div className="experience-section-new">
            <h4 className="section-title">Technologies:</h4>
            <div className="technologies-list">
              {experience.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;