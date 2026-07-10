import React from 'react';

const PROJECTS_DATA = [
  {
    title: "Worky",
    subtitle: "Trainee Management System",
    description: "Built at WSO2 using React Native, Golang, PostgreSQL, and Choreo platform. Features Azure authentication and modern UI/UX.",
    tags: ["React Native", "Golang", "PostgreSQL", "Azure"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
  },
  {
    title: "Computer Use Agent",
    subtitle: "Automated Research Tool",
    description: "Built an autonomous AI agent using Google Gemini 2.5 that controls browsers to perform web research tasks.",
    tags: ["Python", "Google Gemini 2.5", "Playwright"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600"
  },
  {
    title: "Exam Registration Portal",
    subtitle: "University System",
    description: "Full-stack web application built with .NET, MySQL, and Blazor for streamlined exam registration process.",
    tags: [".NET", "MySQL", "Blazor"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        Featured <span className="text-[#00C2FF]">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="bg-[#111827]/50 border border-gray-900 rounded-2xl overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="h-48 overflow-hidden relative border-b border-gray-950">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#00C2FF]">{project.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5 tracking-wide">{project.subtitle}</p>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed font-light">{project.description}</p>
              </div>
            </div>
            
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs bg-cyan-950/30 text-cyan-400 border border-cyan-950 px-2.5 py-1 rounded-md font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}