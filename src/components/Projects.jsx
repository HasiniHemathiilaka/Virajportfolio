import React from 'react';

const PROJECTS_DATA = [
  {
    title: "Bridge the Gap Between Human Emotions and Artistic Painting",
    subtitle: "University of Jaffna | 2026 – Present (Ongoing Research)",
    description: "Researching AI techniques to transform human emotions into artistic paintings. Exploring emotion recognition and generative AI models for creative image generation. Evaluating model performance through experiments.",
    tags: ["Python", "Deep Learning", "Machine Learning", "Computer Vision", "Generative AI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600"
  },
  {
    title: "DevOps Capstone Project",
    subtitle: "IBM DevOps & Software Engineering Specialization | July 2026",
    description: "Developed a Python Flask microservice using Test-Driven Development. Containerized and deployed the application with Docker and Kubernetes. Automated testing and deployment using GitHub Actions CI/CD pipelines.",
    tags: ["Python", "Flask", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Agile"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600"
  },
  {
    title: "Inventory Management System (IMS)",
    subtitle: "University of Jaffna | February 2026",
    description: "Developed the backend using Spring Boot and MySQL. Built secure REST APIs with role-based authentication using Spring Security. Implemented inventory management and approval workflows.",
    tags: ["Java Spring Boot", "React.js", "Spring Security", "MySQL", "REST APIs", "Jira"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
  },
  {
    title: "JamSync – Real-Time Remote Jam Platform",
    subtitle: "University of Jaffna | March 2026",
    description: "Built a WebRTC-based application with real-time audio, video, and text communication. Implemented peer-to-peer connectivity using PeerJS. Designed a highly responsive user interface.",
    tags: ["WebRTC", "PeerJS", "JavaScript", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600"
  },
  {
    title: "Laptop Store Web Application",
    subtitle: "Java Spring Boot Project | October 2025",
    description: "Developed an e-commerce platform using Java Spring Boot. Implemented authentication, shopping cart features, and product management workflows. Containerized the build using Docker.",
    tags: ["Java", "Spring Boot", "Docker", "H2 Database", "REST APIs"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600"
  },
  {
    title: "Google Sheets Email Automation",
    subtitle: "n8n Workflow Automation | August 2025",
    description: "Built an automated background workflow to fire off targeted Gmail notifications directly from Google Sheets rows. Integrated real-time Google Sheets and Gmail API events.",
    tags: ["n8n", "Google Sheets API", "Gmail API", "Workflow Automation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600"
  },
  {
    title: "Laboratory Booking System",
    subtitle: "University of Jaffna | May 2025",
    description: "Developed an interactive web application for university laboratory reservation and scheduling. Implemented robust role-based access controls and custom approval workflows.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        Featured <span className="text-[#00C2FF]">Projects</span>
      </h2>

      {/* Grid layout rendering your exact projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#111827]/50 border border-gray-900 rounded-2xl overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Dynamic Image Cover with Dark Gradient Overlay */}
              <div className="h-44 overflow-hidden relative border-b border-gray-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-80" />
              </div>

              {/* Text Information Blocks */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00C2FF] transition duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-[11px] text-cyan-400/80 mt-1.5 font-mono tracking-tight">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </div>
            
            {/* Tag Badge Footer Wrapper */}
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[11px] bg-cyan-950/20 text-cyan-400 border border-cyan-950/60 px-2 py-0.5 rounded-md font-mono"
                  >
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