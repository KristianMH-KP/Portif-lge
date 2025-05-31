import React, { useEffect, useState } from 'react';
import './styles/NavDots.css';

const sectionIds = ['welcome', 'Insight', 'Projects', 'Skills'];

const sectionImages = {
  welcome: 'Hunter Design.png',
  Insight: 'insight.png',
  Projects: 'Lantern.png',
  Skills: 'skills.png',
};

const NavDots = ({ isBurgerOpen }) => {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`nav-dots-wrapper ${isBurgerOpen ? 'inside-burger' : ''}`}
      aria-label="Section navigation"
    >
      <div className="nav-dots">
        {sectionIds.map((id, i) => {
          const imgSrc = `src/Bilder/${sectionImages[id] || 'default.png'}`;
          return (
            <div key={id} className="nav-dot-wrapper">
              <img
                src={imgSrc}
                alt={`Navigate to ${id}`}
                className={`nav-image ${activeSection === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') scrollToSection(id);
                }}
              />
              {i < sectionIds.length - 1 && <div className="nav-dot-line" />}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavDots;
