import React from 'react';

const CERTIFICATIONS_DATA = [
  {
    title: "Advanced Mix and Master Engineering",
    issuer: "Azim Ousman Studio",
    category: "Audio Engineering"
  },
  {
    title: "Music Production",
    issuer: "Professional Audio Certification",
    category: "Production"
  },
  {
    title: "Audio Engineering",
    issuer: "Studio & Sound Engineering",
    category: "Sound Design"
  },
  {
    title: "Video Editing Fundamentals",
    issuer: "Post-Production & Media",
    category: "Video Editing"
  },
  {
    title: "Motion Graphics Essentials",
    issuer: "Visual Effects & Animation",
    category: "Motion Graphics"
  },
  {
    title: "Digital Content Creation",
    issuer: "Social & Commercial Media",
    category: "Content Strategy"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        Training & <span className="text-[#00C2FF]">Certifications</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <div key={index} className="cyber-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-950/30 text-[#00C2FF] border border-cyan-900/50">
                  {cert.category}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-400 mt-2 font-mono">
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}