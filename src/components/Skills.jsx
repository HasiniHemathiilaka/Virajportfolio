import React from 'react';

const SKILLS_DATA = {
  languages: ["Golang", "Java", "Python", "C++", "JavaScript", "SQL", "C", "C#"],
  frameworks: ["Gin", "GORM", "React.js", "React Native", "Next.js", "Expo", ".NET", "Blazor", "FastAPI", "Express.js", "Spark MLlib"],
  tools: ["Git", "Docker", "Postman", "Figma", "Jira"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        Skills & <span className="text-[#00C2FF]">Technologies</span>
      </h2>

      <div className="space-y-12">
        {Object.entries(SKILLS_DATA).map(([category, items]) => (
          <div key={category} className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[#00C2FF] capitalize mb-6 border-b border-cyan-950/40 pb-2 tracking-wide">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-5 py-2 rounded-full text-sm bg-[#111827]/50 border border-cyan-950 text-gray-300 hover:border-[#00C2FF]/40 hover:text-white transition duration-300 cursor-default"
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