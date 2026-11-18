import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    const spacing = 40;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          let angle = Math.sin(x * 0.005 + time) * Math.cos(y * 0.005 + time) * Math.PI;
          let strength = 1.0;

          if (mouse.x > -500) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 300) {
              const force = (300 - distance) / 300;
              angle = Math.atan2(dy, dx) + (force * Math.PI * 0.5);
              strength = 1.0 + force * 2.0; 
            }
          }

          const lineLength = 6 * strength;
          const endX = x + Math.cos(angle) * lineLength;
          const endY = y + Math.sin(angle) * lineLength;

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = strength > 1.2 
            ? `rgba(0, 194, 255, ${0.15 * strength})` 
            : 'rgba(0, 194, 255, 0.06)';
          ctx.lineWidth = strength > 1.2 ? 1.5 : 1;
          ctx.stroke();

          if (strength > 1.8) {
            ctx.beginPath();
            ctx.arc(x, y, 0.8, 0, Math.PI * 2);
            ctx.fillStyle = '#00C2FF';
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-cyan-500/10 shadow-[0_0_80px_rgba(0,194,255,0.02)]" />
      </div>

      <div className="z-10 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 select-none">
          Viraj <span className="text-[#00C2FF] drop-shadow-[0_0_15px_rgba(0,194,255,0.15)]">Balasooriya</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 tracking-wide font-light">
          Music Producer | Video Editor & Audio Engineer
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a 
            href="/cv.pdf" 
            download="Viraj_Balasooriya_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#00C2FF] text-black font-semibold rounded-full transform transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,194,255,0.4)] cursor-pointer text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Download CV
          </a>

          <a 
            href="#projects" 
            className="flex items-center gap-2 px-6 py-3 bg-transparent text-[#00C2FF] font-semibold rounded-full border border-[#00C2FF] transform transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,194,255,0.2)] text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            View Works
          </a>
        </div>

        {/* Social Links (Replace placeholders with his YouTube Music & Facebook URLs) */}
        <div className="mt-12 flex justify-center gap-6 text-gray-400">
          {/* YouTube Music Channel */}
          <a href="YOUR_YOUTUBE_MUSIC_LINK" target="_blank" rel="noreferrer" title="YouTube Music Channel" className="hover:text-[#00C2FF] transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
              <path d="m10 15 5-3-5-3z"/>
            </svg>
          </a>
          
          {/* Facebook */}
          <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noreferrer" title="Facebook" className="hover:text-[#00C2FF] transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          
          {/* Direct Email */}
          <a href="mailto:hivirajbalasooriya@gmail.com" title="Email Viraj" className="hover:text-[#00C2FF] transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}