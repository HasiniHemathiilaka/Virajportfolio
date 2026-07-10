import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const CERT_DATA = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jan 2026",
    id: "Credential ID: AWS-ASA-994",
    link: "#"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Issued Nov 2025",
    id: "Credential ID: DL-AI-8839",
    link: "#"
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "Issued Aug 2025",
    id: "Credential ID: GCP-PDE-1102",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        Licenses & <span className="text-[#00C2FF]">Certifications</span>
      </h2>

      <div className="relative border-l border-cyan-950 ml-4 md:ml-6 space-y-12">
        {CERT_DATA.map((cert, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline node node indicator */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-[#00C2FF] shadow-[0_0_8px_#00C2FF] group-hover:bg-[#00C2FF] transition duration-300" />
            
            <div className="bg-[#111827]/40 border border-gray-900/60 p-6 rounded-2xl hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 text-[#00C2FF] font-semibold text-lg">
                    <Award size={18} />
                    <h3>{cert.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  <p className="text-gray-600 text-xs mt-2 font-mono tracking-tight">{cert.id}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-950 px-3 py-1.5 rounded-md">
                    <Calendar size={12} /> {cert.date}
                  </span>
                  <a href={cert.link} className="p-2 bg-cyan-950/20 rounded-md text-gray-400 hover:text-[#00C2FF] transition">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}