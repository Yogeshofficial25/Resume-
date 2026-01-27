import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0f172a]">
      {/* Wall-E Starfield Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Holographic Grids */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: 'radial-gradient(#00f5ff 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.2}px) rotate(2deg)` 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 space-y-8">
          <div className="animate-reveal delay-100 flex items-center space-x-3">
             <div className="h-px w-12 bg-[#00f5ff]"></div>
             <span className="text-[#00f5ff] font-bold tracking-[0.2em] text-sm uppercase">Directive: Build Systems</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight animate-reveal delay-200">
            Design. <br/> 
            <span className="text-[#00f5ff] glitch-hover inline-block">Execute.</span> <br/>
            Repeat.
          </h1>
          
          <div className="puffy-ui p-8 max-w-lg animate-reveal delay-300 relative overflow-hidden group">
            <div className="scan-line"></div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Hey, I'm <span className="font-extrabold text-[#e63946]">{PERSONAL_INFO.name}</span>. 
              Like <span className="italic font-bold text-slate-800">Baymax</span> for your product, I focus on health, systems, and user care through advanced data-driven engineering.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-4 animate-reveal delay-400">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-[#e63946] text-white font-black rounded-full shadow-[0_10px_0_#b91c1c] active:translate-y-[4px] active:shadow-none transition-all racing-slant flex items-center [...]"
            >
              IGNITION START
              <i className="fas fa-bolt ml-3 group-hover:animate-bounce"></i>
            </a>
            <a 
              href="#experience" 
              className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center"
            >
              SYSTEM LOGS
              <i className="fas fa-terminal ml-3 text-xs opacity-50"></i>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative group">
            {/* Baymax/Eve Aesthetic Avatar Frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00f5ff] to-[#e63946] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-[12px] border-white overflow-hidden shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=800";
                }}
              />
              {/* EVE-style Scan Overlay */}
              <div className="absolute inset-0 bg-[#00f5ff]/5 pointer-events-none"></div>
              <div className="absolute top-1/4 left-0 w-full h-1 bg-[#00f5ff] shadow-[0_0_15px_#00f5ff] opacity-50 animate-[scan_4s_ease-in-out_infinite]"></div>
            </div>

            {/* Floating HUD Badges */}
            <div className="absolute -top-4 -right-4 puffy-ui p-4 shadow-xl animate-float">
               <div className="flex items-center space-x-2">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-xs font-black text-slate-800 uppercase tracking-tighter">System: Optimal</span>
               </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2rem] shadow-2xl animate-float delay-500 border-2 border-[#00f5ff]/20">
              <div className="text-4xl font-black text-[#e63946]">4.0</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Engage/Retain</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Manual Override</span>
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#00f5ff] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;