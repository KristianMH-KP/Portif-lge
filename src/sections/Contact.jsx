import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section fade-in-section" id="kontakt" aria-labelledby="contact-title">
      <div className="contact-container">
        <h1 id="contact-title" className="contact-title blood-effect">
          Kontakt og Kommunion
        </h1>

        <p className="contact-subtitle">
          Enten det er skjebne eller nysgjerrighet — ta kontakt.
        </p>

        <div className="contact-box">
          <p>
            <strong>E-post:</strong>{" "}
            <a href="mailto:kristian.m.hamre@icloud.com">
              kristian.m.hamre@icloud.com
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/KristianMH-KP"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/KristianMH-KP
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/kristian-magnus-hamre-706982354/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/Kristian-Magnus-Hamre
            </a>
          </p>

          <p><a href="http://" target="_blank" rel="noopener noreferrer"></a>
            <strong>CC:</strong>{" "}
            <a>
              Insikt videoclipp er en redigertversjon av sabcakes video omgjort til en gif. https://www.reddit.com/r/bloodborne/comments/n7u5fa/for_my_next_project_i_animated_and_rendered/ 
            </a>
          </p>
          <p><a href="http://" target="_blank" rel="noopener noreferrer"></a>
            <strong>CC:</strong>{" "}
            <a>
              Alt annet tilhører Fromsoftware
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
