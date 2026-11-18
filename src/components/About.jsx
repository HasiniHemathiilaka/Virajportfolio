import React from 'react';
import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-20 glow-title">
        About <span className="text-[#00C2FF]">Me</span>
      </h2>

      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Profile Picture */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00C2FF] to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500 animate-pulse" />
            <img
              src={profileImg}
              alt="Viraj Balasooriya"
              className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border border-gray-800 bg-[#111827]"
            />
          </div>
        </div>

        {/* Bio & Experience */}
        <div className="md:col-span-7 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Creative <span className="text-[#00C2FF]">Music Producer</span> & Visual Storyteller
          </h3>

          <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
            Based in Colombo, Sri Lanka, I am a detail-oriented Music Producer, Audio Engineer, and Video Editor skilled in crafting immersive audio productions, mixing and mastering tracks, and producing high-impact music videos, digital ads, and social media content.
          </p>

          <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
            As an active <span className="text-cyan-400 font-normal">Adobe Stock Contributor</span> and studio producer trained in Advanced Mix & Master Engineering at Azim Ousman Studio, I combine industry-standard DAWs with modern motion graphics and multi-cam post-production workflows to bring creative visions to life under tight deadlines.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="cyber-card p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-[#00C2FF]">3+ DAWs</p>
              <p className="text-xs text-gray-400 mt-1 font-mono">Ableton, Logic, FL</p>
            </div>
            <div className="cyber-card p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-[#00C2FF]">Pro Suite</p>
              <p className="text-xs text-gray-400 mt-1 font-mono">Premiere, AE, DaVinci</p>
            </div>
            <div className="cyber-card p-4 rounded-xl text-center col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold text-[#00C2FF]">Adobe Stock</p>
              <p className="text-xs text-gray-400 mt-1 font-mono">Creator & Contributor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}