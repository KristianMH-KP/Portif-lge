import { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

import cppIcon from '../Bilder/c++ icon.png';
import htmlIcon from '../Bilder/html icon.png';
import cssIcon from '../Bilder/css icon.png';
import jsIcon from '../Bilder/js icon.png';
import sqlIcon from '../Bilder/sql icon.png';
import phpIcon from '../Bilder/php icon.png';

function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [category, setCategory] = useState('Frontend');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categorizedSkills = {
    Frontend: [
      {
        title: 'HTML',
        icon: htmlIcon,
        details: ['Semantisk struktur', 'Responsiv oppbygning', 'Formularer og tilgjengelighet', 'SEO-prinsipper']
      },
      {
        title: 'CSS',
        icon: cssIcon,
        details: ['Grid & Flexbox', 'Animasjoner', 'Responsiv design', 'Variabler og effekter']
      },
      {
        title: 'JavaScript',
        icon: jsIcon,
        details: ['ES6+ funksjoner', 'DOM-manipulasjon', 'Asynkrone kall', 'API-integrasjon']
      }
    ],
    Backend: [
      {
        title: 'PHP',
        icon: phpIcon,
        details: ['Serverlogikk', 'Formbehandling', 'Databindning med MySQL', 'Sessionshåndtering']
      },
      {
        title: 'C++',
        icon: cppIcon,
        details: ['Minnehåndtering', 'STL-biblioteker', 'Multitråding', 'Optimalisering']
      }
    ],
    Database: [
      {
        title: 'SQL',
        icon: sqlIcon,
        details: ['Relasjonsdatabaser', 'Joins og subqueries', 'Stored procedures', 'Datamodellering']
      }
    ]
  };

  const categories = Object.keys(categorizedSkills);

  return (
    <section
      id="Skills"
      ref={sectionRef}
      className={`Skills fade-in-section${isVisible ? ' visible' : ''}`}
    >
      <div className="Skills-content">
        <h1 className="Skills-title blood-effect">Ferdigheter i Kode</h1>

        <div className="skills-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-button${category === cat ? ' active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="Skills-grid">
          {categorizedSkills[category].map((skill, index) => (
            <div key={index} className="Skills-card">
              <div className="skill-header">
                <img src={skill.icon} alt={skill.title} className="skill-icon" />
                <h2 className="skill-title">{skill.title}</h2>
              </div>
              <ul>
                {skill.details.map((item, i) => (
                  <li key={i} className="skill-detail">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
