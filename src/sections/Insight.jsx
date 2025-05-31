import { useEffect, useRef, useState } from 'react';
import '../styles/Insight.css';

function Insight() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [valgt, setValgt] = useState(null);

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

  const fragmenter = [
    {
      tittel: 'Fragment I',
      tekst: 'Kode er et minne. Den enkleste løsningen er ofte den mest levende.',
    },
    {
      tittel: 'Fragment II',
      tekst: 'Hver feil bærer gammelt blod. Hver krasj er en mulighet til å gjenoppstå.',
    },
    {
      tittel: 'Fragment III',
      tekst: 'Ekte kode føles. Den gjenlyder i dem som tør å møte det ukjente.',
    },
  ];

  return (
    <section
      id="innsikt"
      ref={sectionRef}
      className={`Insight${isVisible ? ' visible' : ''}`}
    >
      {/* Tåke */}
      <div className="animated-fog" aria-hidden="true"></div>
      <div className="fog-layer" aria-hidden="true"></div>

      {/* Innhold */}
      <div className="insight-pedestal">
        <h1 className="insight-title">Fragmenter av Innsikt</h1>
        <p className="insight-sub">Kun de med innsikt kan høre ekkoet av gammel kode...</p>

        {/* Tekstbaserte knapper */}
        <div className="valg-container">
          {fragmenter.map((frag, index) => (
            <button
              key={index}
              className={`innsikt-knapp${valgt === index ? ' aktiv' : ''}`}
              onClick={() => setValgt(index)}
              aria-label={`Vis ${frag.tittel}`}
            >
              {frag.tittel}
            </button>
          ))}
        </div>

        {/* Innhold for valgt fragment */}
        {valgt !== null && (
          <div className="insight-scrolls">
            <div className="insight-scroll">
              <h2>{fragmenter[valgt].tittel}</h2>
              <p>{fragmenter[valgt].tekst}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Insight;
