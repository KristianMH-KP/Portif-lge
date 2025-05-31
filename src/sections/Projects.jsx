import { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prosjekter = [
    {
      tittel: 'Twine Story',
      beskrivelse: 'Et gotisk tekstspill satt i en drømmende fordervelse.',
      teknologier: ['Twine', 'SugarCube', 'CSS'],
      bilde: 'src/Bilder/twine-blood.webp',
    },
    {
      tittel: '3D Print Service',
      beskrivelse: 'Former ideer til virkelighet.',
      teknologier: ['HTML', 'CSS'],
      bilde: 'src/Bilder/3d-print.webp',
    },
    {
      tittel: 'SQL Crypt',
      beskrivelse: 'En labyrint av forheksede spørringer.',
      teknologier: ['SQL', 'PHP'],
      bilde: 'src/Bilder/sql-dark.webp',
    },
    {
      tittel: 'Portfolio',
      beskrivelse: 'Dette arkivet du nå utforsker.',
      teknologier: ['React', 'CSS', 'JSX'],
      bilde: 'src/Bilder/portfolio-blood.webp',
    }
  ];

  return (
    <section
      id="prosjekter"
      ref={sectionRef}
      className={`prosjekt-seksjon${isVisible ? ' synlig' : ''}`}
    >
      <div className="animated-fog" aria-hidden="true"></div>
      <div className="fog-layer" aria-hidden="true"></div>

      <video
        className="bakgrunns-video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload"
      >
        <source src="src/Bilder/projectVid.mp4" type="video/mp4" />
      </video>

      <h1 className="prosjekt-tittel">Echoes of Code</h1>

      <div className="prosjekt-grid">
        {prosjekter.map((p, i) => (
          <div className="prosjekt-kort" key={i}>
            <img src={p.bilde} alt={p.tittel} />
            <h2>{p.tittel}</h2>
            <p>{p.beskrivelse}</p>
            <div className="teknologier">
              {p.teknologier.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
