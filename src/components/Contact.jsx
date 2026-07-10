import React, { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Using Web3Forms free tier API access token
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-4 glow-title">
        Get In <span className="text-[#00C2FF]">Touch</span>
      </h2>
      <p className="text-center text-gray-400 mt-6 mb-16 max-w-md mx-auto text-sm font-light">
        Have an exciting opportunity, a research proposal, or just want to connect? Drop a message below!
      </p>

      <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
        
        {/* Functional Live Message Form */}
        <form className="md:col-span-6 space-y-6 flex flex-col justify-between" onSubmit={onSubmit}>
          <div>
            <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Name</label>
            <input type="text" name="name" required placeholder="Your name" className="w-full bg-[#111827]/40 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C2FF] transition text-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Email</label>
            <input type="email" name="email" required placeholder="your.email@example.com" className="w-full bg-[#111827]/40 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C2FF] transition text-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Message</label>
            <textarea name="message" rows="4" required placeholder="Your message..." className="w-full bg-[#111827]/40 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C2FF] transition text-white resize-none"></textarea>
          </div>
          
          <button type="submit" className="w-full py-3 bg-[#00C2FF] text-black font-semibold rounded-xl hover:bg-cyan-400 transition cursor-pointer text-sm shadow-md shadow-cyan-500/10">
            Send Message
          </button>
          
          {result && <p className="text-center text-xs text-cyan-400 font-mono mt-2">{result}</p>}
        </form>

        {/* Updated Personal Network Detail Panels */}
        <div className="md:col-span-6 bg-[#111827]/50 border border-gray-900 p-8 rounded-2xl flex flex-col justify-center space-y-4">
          <h3 className="text-lg font-bold text-white mb-2 tracking-wide">Contact Information</h3>
          
          {/* Email */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-4 rounded-xl border border-gray-950">
            <div className="p-3 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Direct Email</p>
              <a href="mailto:hasinihemathilaka@gmail.com" className="text-sm text-gray-300 hover:text-white break-all font-light">hasinihemathilaka@gmail.com</a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-4 rounded-xl border border-gray-950">
            <div className="p-3 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">LinkedIn</p>
              <a href="https://www.linkedin.com/in/hasini-hemathilaka-aa9a242ab/" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white break-all font-light">hasini-hemathilaka-aa9a242ab</a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-4 rounded-xl border border-gray-950">
            <div className="p-3 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">GitHub</p>
              <a href="https://github.com/HasiniHemathiilaka" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white break-all font-light">HasiniHemathiilaka</a>
            </div>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-4 rounded-xl border border-gray-950">
            <div className="p-3 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              {/* Custom cleanly formatted dynamic book/article icon for Medium */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Medium Articles</p>
              <a href="https://medium.com/@hasinihemathilaka" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white break-all font-light">@hasinihemathilaka</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}