import { useEffect } from 'react';
import NavDots from './NavDots';
import Welcome from './sections/Welcome';
import Insight from './sections/Insight';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import './Stylesheet.css';

function ScrollLanding() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>

      <div className="scroll-bg-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="scroll-video"
        >
          <source src="src/Bilder/projectVid.mp4" type="video/mp4" />
        </video>
        <div className="scroll-overlay" aria-hidden="true" />
      </div>

      <NavDots />

      <main>
        <section id="welcome" className="welcome fade-in-section">
          <Welcome />
        </section>
        <section id="Insight" className="Insight fade-in-section">
          <Insight />
        </section>
        <section id="Projects" className="Projects fade-in-section">
          <Projects />
        </section>
        <section id="Skills" className="Skills fade-in-section">
          <Skills />
        </section>
        <section id="Contact" className="Contact fade-in-section">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default ScrollLanding;