import React from 'react';

const PROJECTS_DATA = [
  {
    title: "KRODHA – Kaliyugaya (කලියුගය)",
    subtitle: "Official Music Video | Mixing, Mastering & Beat Production, Videography & Post-Production",
    description: "Handled full cinematography, multi-cam editing, color correction & grading, and rhythmic sound-synced cuts for the official music video.",
    tags: ["Logic Pro", "DaVinci Resolve", "Final Cut Pro", "Color Grading"],
    image: "https://img.youtube.com/vi/pWQbgs0BJ08/maxresdefault.jpg",
    link: "https://youtu.be/pWQbgs0BJ08?si=NJa8Oscm1TFMBez_"
  },
  {
    title: "කාලරේඛ - KRODHA (Official Music Video)",
    subtitle: "YouTube Music Channel | Mixing, Mastering & Beat Production",
    description: "Original tracks, instrumental compositions, vocal mixing, and master engineering produced using Logic Pro.",
    tags: ["Ableton Live", "Logic Pro", "FL Studio", "Mix & Master"],
    image: "https://img.youtube.com/vi/mpwLXx_45uU/maxresdefault.jpg",
    link: "https://youtu.be/mpwLXx_45uU?si=MuCr3alkvNZ1Dhit"
  },
  {
    title: "Me Jeewithe (මේ ජීවිතේ) – Synth Pop Cover",
    subtitle: "Music Arrangement, Vocals, Mix & Master | Toneark Studios",
    description: "Reimagined Rookantha Goonatillake's classic into an 80s-inspired synth-pop production. Handled lead cover vocals, electronic synth arrangement, mixing, mastering, and futuristic cyberpunk visual production.",
    tags: ["Synth-Pop", "Music Arrangement", "Vocals", "Mixing & Mastering", "Visual Production"],
    image: "https://img.youtube.com/vi/1aaqjKpdsIo/maxresdefault.jpg",
    link: "https://youtu.be/1aaqjKpdsIo?si=uuvPnxeE8QeiXjkU"
  },
  {
    title: "Adobe Stock Creator Portfolio",
    subtitle: "Commercial Stock Media | Motion & Visual Assets",
    description: "Designing and contributing high-resolution commercial video assets, motion backgrounds, and creative templates for global creators.",
    tags: ["Adobe Stock", "After Effects", "Visual Design", "Content Creation"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600",
    link: "YOUR_FACEBOOK_OR_STOCK_LINK"
  },
  {
    title: "Mathaka Soya (මතක සොයා) – Reggae Cover",
    subtitle: "Music Arrangement, Vocals, Mix & Master | Toneark Studio",
    description: "Reimagined Mahiru Senarathne and Prabhasha Weerasinghe's popular Sinhala track into a laid-back reggae cover, handling cover vocals, reggae instrumental arrangement, and mixing & mastering.",
    tags: ["Reggae", "Music Arrangement", "Vocals", "Mixing & Mastering"],
    image: "https://img.youtube.com/vi/4OYJXH8PXYU/maxresdefault.jpg",
    link: "https://youtu.be/4OYJXH8PXYU?si=bXCSx3d3zl7tL9n_"
  },
  {
    title: "Sinhala Cover Song Production – Vol. 1",
    subtitle: "Facebook Music Release | Vocals, Arrangement & Mix",
    description: "Produced and recorded a full cover rendition, handling vocal tracking, custom instrumental arrangement, mixing, mastering, and video editing.",
    tags: ["Cover Song", "Vocals", "Music Arrangement", "Mix & Master"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600",
    link: "https://www.facebook.com/share/v/1KRWUvbPmk/?mibextid=wwXIfr"
  },
  {
    title: "Sinhala Cover Song Production – Vol. 2",
    subtitle: "Facebook Music Release | Audio Engineering & Video Edit",
    description: "Rearranged, mixed, and mastered a vocal cover performance paired with synchronized multi-cut video editing and color grading.",
    tags: ["Cover Song", "Audio Engineering", "Video Editing", "Logic Pro"],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600",
    link: "https://www.facebook.com/share/v/1DyohFnstv/?mibextid=wwXIfr"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        Featured <span className="text-[#00C2FF]">Works</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div 
            key={index} 
            className="cyber-card rounded-2xl overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="h-44 overflow-hidden relative border-b border-gray-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-80" />
              </div>

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
            
            <div className="p-6 pt-0 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[11px] bg-cyan-950/20 text-cyan-400 border border-cyan-950/60 px-2 py-0.5 rounded-md font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#00C2FF] hover:text-cyan-300 transition pt-2"
              >
                Watch / View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}