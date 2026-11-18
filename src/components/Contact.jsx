import React, { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Generate a free access key at web3forms.com using hivirajbalasooriya@gmail.com
    formData.append("access_key", "YOUR_VIRAJ_WEB3FORMS_ACCESS_KEY");

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
        Need music production, mixing & mastering, or high-impact video editing? Drop a message below!
      </p>

      <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
        {/* Live Message Form */}
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
            <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Project Details</label>
            <textarea name="message" rows="6" required placeholder="Tell me about your track, music video, or edit..." className="w-full bg-[#111827]/40 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C2FF] transition text-white resize-none"></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 bg-[#00C2FF] text-black font-semibold rounded-xl transform transition-all duration-300 hover:bg-cyan-400 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] cursor-pointer text-sm font-mono tracking-wider"
          >
            SEND_MESSAGE //
          </button>
          
          {result && <p className="text-center text-xs text-cyan-400 font-mono mt-2">{result}</p>}
        </form>

        {/* Contact Details */}
        <div className="md:col-span-6 bg-[#111827]/50 border border-gray-900 p-8 rounded-2xl flex flex-col justify-center space-y-3.5">
          <h3 className="text-lg font-bold text-white mb-2 tracking-wide">Booking & Socials</h3>
          
          {/* Email */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-3.5 rounded-xl border border-gray-950">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Direct Email</p>
              <a href="mailto:hivirajbalasooriya@gmail.com" className="text-sm text-gray-300 hover:text-white break-all font-light">hivirajbalasooriya@gmail.com</a>
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-3.5 rounded-xl border border-gray-950">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Phone / WhatsApp (Colombo)</p>
              <a href="tel:+94705895322" className="text-sm text-gray-300 hover:text-white font-light">+94 70 589 5322</a>
            </div>
          </div>

          {/* YouTube Music Channel */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-3.5 rounded-xl border border-gray-950">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">YouTube Music Channel</p>
              <a href="https://youtube.com/@virajbalasooriya?si=URWIn6lIfp5ULThl" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white font-light">youtube.com/@virajbalasooriya</a>
            </div>
          </div>

          {/* YouTube Vlog Channel */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-3.5 rounded-xl border border-gray-950">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">YouTube Vlog Channel</p>
              <a href="https://youtube.com/@virahasi?si=Btsyt7LzEAX1x2tD" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white font-light">youtube.com/@virahasi</a>
            </div>
          </div>

          {/* Facebook Profile */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-3.5 rounded-xl border border-gray-950">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Facebook</p>
              <a href="https://www.facebook.com/share/1B5gqGkFrT/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white font-light">Viraj Balasooriya</a>
            </div>
          </div>

          {/* Tone Arc Studio Facebook Page */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-3.5 rounded-xl border border-gray-950">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Tone Arc Studio Page</p>
              <a href="https://www.facebook.com/share/1EkjqA7sFt/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white font-light">Tone Arc Studio</a>
            </div>
          </div>

          {/* TikTok */}
          <div className="flex items-center gap-4 bg-[#030712]/60 p-3.5 rounded-xl border border-gray-950">
            <div className="p-2.5 bg-cyan-950/40 rounded-lg text-[#00C2FF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">TikTok</p>
              <a href="https://www.tiktok.com/@viraj.balasooriya1?_r=1&_t=ZS-9BVfX88NzVN" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white font-light">@viraj.balasooriya1</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}