import '../styles/Welcome.css';

function Welcome() {
  return (
    <section id="velkomst" className="welcome">

      <div className="animated-fog" aria-hidden="true"></div>
      <div className="fog-layer" aria-hidden="true"></div>

      <h1 className="gothic-title">
        <span className="intro-tekst">Velkommen til min</span>{' '}
        <span className="blood-effect">
          {'Portefølje'.split('').map((char, i) => (
            <span key={i} className="blood-letter" style={{ '--i': i }}>{char}</span>
          ))}
        </span>
      </h1>

      <div className="welcome-content">
        <p className="welcome-name">Kristian Magnus Hamre</p>
        <br />
        <br />
        <p className="welcome-quote">"We are born of the blood, made men by the blood, undone by the blood. Our eyes are yet to open... Fear the old blood. - Master Willem"</p>
      </div>
    </section>
  );
}

export default Welcome;