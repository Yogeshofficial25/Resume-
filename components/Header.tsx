
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Identity', href: '#about' },
    { name: 'Logs', href: '#experience' },
    { name: 'Upgrades', href: '#skills' },
    { name: 'Communicate', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className={`max-w-7xl mx-auto px-6`}>
        <div className={`flex justify-between items-center px-8 py-3 rounded-full transition-all duration-500 ${
          scrolled ? 'bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent'
        }`}>
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center group">
            <div className="w-8 h-8 bg-[#e63946] rounded-lg mr-3 flex items-center justify-center group-hover:rotate-45 transition-transform">
               <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className={scrolled ? 'text-white' : 'text-slate-900'}>Yogesh KulkarniK<span className="text-[#00f5ff]">.</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#00f5ff] ${
                  scrolled ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-[#00f5ff] text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-110 active:scale-95 transition-all shadow-lg shadow-[#00f5ff]/20"
            >
              Contact Support
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${scrolled ? 'text-white' : 'text-slate-900'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-[#0f172a] z-[-1] transition-all duration-500 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-3xl font-black text-white uppercase tracking-widest hover:text-[#00f5ff] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
