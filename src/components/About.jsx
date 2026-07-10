import React from 'react';
import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-16 glow-title">
        About <span className="text-[#00C2FF]">Me</span>
      </h2>

      <div className="grid md:grid-cols-12 gap-12 items-center mt-8">
        
        {/* Profile Picture Frame using local Asset */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative p-1.5 rounded-2xl bg-gradient-to-b from-cyan-500/30 to-transparent">
            <div className="rounded-xl overflow-hidden border border-cyan-500/20 max-w-[340px] shadow-[0_0_30px_rgba(0,194,255,0.05)]">
              <img 
                src={profileImg} 
                alt="Hasini Hemathilaka" 
                className="w-full h-auto object-cover tracking-normal transition duration-500" 
              />
            </div>
          </div>
        </div>

        {/* Updated Info & Core Domain Badges */}
        <div className="md:col-span-7 space-y-4">
          
          {/* Custom Description Block */}
          <div className="bg-[#111827]/60 border border-gray-800/60 p-6 rounded-2xl">
            <p className="text-gray-300 leading-relaxed font-light">
              Motivated Computer Engineering undergraduate with practical experience in software development, 
              DevOps and cloud technologies through academic and personal projects. Passionate about building 
              scalable applications, automating workflows and solving technical problems. Eager to learn emerging 
              technologies and contribute to innovative engineering and research projects while working effectively 
              in collaborative environments.
            </p>
          </div>

          {/* 1. Full-stack Development */}
          <div className="flex items-center gap-4 bg-[#111827]/30 border border-gray-900 p-4 rounded-xl">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5"/>
                <line x1="12" x2="20" y1="19" y2="19"/>
              </svg>
            </div>
            <span className="text-gray-300 font-medium">Full-stack Development</span>
          </div>

          {/* 2. DevOps */}
          <div className="flex items-center gap-4 bg-[#111827]/30 border border-gray-900 p-4 rounded-xl">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <span className="text-gray-300 font-medium">DevOps</span>
          </div>

          {/* 3. AI / ML */}
          <div className="flex items-center gap-4 bg-[#111827]/30 border border-gray-900 p-4 rounded-xl">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
            </div>
            <span className="text-gray-300 font-medium">AI / ML</span>
          </div>

          {/* 4. Cloud Systems */}
          <div className="flex items-center gap-4 bg-[#111827]/30 border border-gray-900 p-4 rounded-xl">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
              </svg>
            </div>
            <span className="text-gray-300 font-medium">Cloud Systems</span>
          </div>

        </div>
      </div>
    </section>
  );
}