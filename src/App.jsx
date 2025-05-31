import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import ScrollLanding from './ScrollLanding';
import Welcome from './sections/Welcome';
import Insight from './sections/Insight';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

import { setupScrollReveal } from './utils/scrollReveal';

const App = () => {
  useEffect(() => {
    setupScrollReveal('.reveal-section'); 
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ScrollLanding />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Insight" element={<Insight />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
