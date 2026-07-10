import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030712]/70 backdrop-blur-md z-50 border-b border-gray-900/40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-sm font-bold tracking-widest text-[#00C2FF]">&lt;HASINI_DEV/&gt;</a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#certifications" className="hover:text-white transition">Certifications</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}