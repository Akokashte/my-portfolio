import React, { useState } from 'react';
import '../../styles/AboutStyles/experienceSection.css';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      title: "Associate MERN Developer",
      company: "Savitar Innovative Solutions",
      duration: "Jan 2025 - Oct 2025",
      location: "Nagpur, India",
      description: "Developed a comprehensive full-stack service platform with web and mobile applications, managing both frontend development (React.js, React Native) and backend API architecture (Node.js). Implemented key integrations including payment processing and location services while leading UI development for company projects.",
      responsibilities: [
        "Developed and maintained full-stack service-based platform with user dashboard using React.js",
        "Built responsive mobile application using React Native",
        "Took ownership of backend API development and maintenance using Node.js",
        "Integrated Google Maps API for location-based services and features",
        "Implemented Razorpay payment gateway for secure transaction processing",
        "Led UI development for company NGO website project using React.js",
        "Ensured seamless user experience across web and mobile platforms"
      ],
      technologies: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Firebase", "Google Maps API", "Razorpay", "Bootstrap", "Git"]
    },
    {
      title: "Associate MERN Developer",
      company: "CYDA",
      duration: "Mar 2025 - Jun 2025",
      location: "Pune, India",
      description: "Developed and deployed two React Native applications for event and post management, creating intuitive user interfaces and implementing robust API integrations. Built comprehensive admin dashboards for efficient content and event management.",
      responsibilities: [
        "Developed two complete React Native applications from scratch for event and post management",
        "Led UI/UX design and implementation for mobile applications",
        "Integrated RESTful APIs for seamless data flow between frontend and backend",
        "Built dedicated admin dashboard interface with full CRUD operations for events and posts",
        "Implemented Redux Toolkit for efficient state management across applications",
        "Collaborated with backend team to ensure smooth API integration and data handling",
        "Deployed applications ensuring stable performance and optimal user experience"
      ],
      technologies: ["React Native", "Javascript", "Redux Toolkit", "REST API", "Git", "GitHub"]
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="experience-header-section">
          <h2 className="main-title">Work Experience</h2>
          <p className="main-subtitle">My professional journey and achievements</p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              experience={experience}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;