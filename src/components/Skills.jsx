import React from 'react';

const SKILL_CATEGORIES = [
  {
    title: "Music Production & DAWs",
    skills: ["Ableton Live", "Logic Pro", "FL Studio", "Audio Engineering", "Mixing & Mastering", "Sound Design", "Audio Editing"]
  },
  {
    title: "Video Editing & Motion",
    skills: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Apple Motion", "Motion Graphics", "VFX Editing"]
  },
  {
    title: "Production & Visuals",
    skills: ["Color Correction & Grading", "Multi-Cam Editing", "Videography", "Photography & Editing", "Visual Storytelling", "Content Creation"]
  },
  {
    title: "Workflow & Collaboration",
    skills: ["Project Coordination", "Adobe Stock Asset Creation", "Creative Problem Solving", "Team Collaboration", "Time Management"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        Technical <span className="text-[#00C2FF]">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <div key={index} className="cyber-card p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00C2FF] shadow-[0_0_8px_#00C2FF]" />
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 text-xs bg-cyan-950/20 text-cyan-300 border border-cyan-900/50 rounded-lg font-mono hover:border-[#00C2FF]/60 hover:bg-cyan-950/40 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}