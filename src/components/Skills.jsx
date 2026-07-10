import React from 'react';

const SKILLS_DATA = {
  languages: ["Golang", "Java", "Python", "C++", "JavaScript", "SQL", "C"],
  frameworks: ["Spring Boot", "React.js", "React Native", "Express.js", "Next.js", ".NET"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  tools: ["Git", "Docker", "Kubernetes", "GitHub Actions", "Postman", "Figma", "Jira"],
  other: ["Microservices", "Azure", "WSO2 Choreo", "CI/CD", "OAuth2", "JWT", "REST APIs"]
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
            {/* Styled category topic title matching the image layout */}
            <h3 className="text-xl font-semibold text-[#00C2FF] capitalize mb-6 relative tracking-wide inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[1.5px] after:bg-[#00C2FF]">
              {category === 'other' ? 'Other Concepts' : category}
            </h3>
            
            <div className="flex flex-wrap gap-3 mt-2">
              {items.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-5 py-2 rounded-full text-sm bg-[#111827]/50 border border-cyan-950 text-gray-300 hover:border-[#00C2FF]/40 hover:text-white transition duration-300 cursor-default font-light"
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