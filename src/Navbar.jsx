import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" role="banner">
          <img
            src="src/Bilder/Kristian_Magnus_Hamre_moon-kopi.webp"
            alt="Kristian Magnus Hamre Logo"
            loading="lazy"
            decoding="async"
          />
        </div>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="main-navigation" className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={getNavClass}>Home</NavLink>
          </li>

          {isHome ? (
            <>
              <li><a href="#Insight" className="nav-link">Insight</a></li>
              <li><a href="#Projects" className="nav-link">Projects</a></li>
              <li><a href="#Skills" className="nav-link">Skills</a></li>
            </>
          ) : (
            <>
              <li><NavLink to="/insight" className={getNavClass}>Insight</NavLink></li>
              <li><NavLink to="/projects" className={getNavClass}>Projects</NavLink></li>
              <li><NavLink to="/skills" className={getNavClass}>Skills</NavLink></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
