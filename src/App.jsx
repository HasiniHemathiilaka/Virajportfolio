
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="tech-bg min-h-screen selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-xs text-gray-600 border-t border-gray-900/50">
        &lt;HASINI_DEV/&gt; © {new Date().getFullYear()}
      </footer>
    </div>
  );
}