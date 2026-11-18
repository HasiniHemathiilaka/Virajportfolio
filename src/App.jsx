import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="tech-bg min-h-screen selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 194, 255, 0.035), transparent 80%)`
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-xs text-gray-600 border-t border-gray-900/50 bg-[#030712]/40 backdrop-blur-sm">
        &lt;VIRAJ_STUDIO/&gt; © {new Date().getFullYear()}
      </footer>
    </div>
  );
}