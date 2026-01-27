
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const socialLinks = [
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/yogeshkulkarnioficial/', color: 'hover:text-[#0a66c2]' },
  { name: 'GitHub',   icon: 'fab fa-github',         url: 'https://github.com/Yogeshofficial25',       color: 'hover:text-[#e63946]' },
];

  return (
    <footer className="py-16 px-6 border-t border-slate-100 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="text-2xl font-black tracking-tighter flex items-center group cursor-default">
            <div className="w-6 h-6 bg-[#e63946] rounded-md mr-2 flex items-center justify-center group-hover:rotate-12 transition-transform">
               <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-slate-900 uppercase">Yogesh Kulkarni<span className="text-[#00f5ff]">.</span></span>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Protocol: Continuous Improvement</p>
        </div>
        
        <div className="text-slate-500 text-sm font-medium order-3 md:order-2">
          © {new Date().getFullYear()} <span className="text-slate-900 font-bold">{PERSONAL_INFO.name}</span>. All systems nominal.
        </div>

        <div className="flex space-x-4 order-2 md:order-3">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-100 ${link.color} group`}
              aria-label={link.name}
            >
              <i className={`${link.icon} text-xl transition-transform group-hover:scale-110`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Aesthetic "Circuit" Footer Note */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-4 opacity-20">
           <div className="h-px w-8 bg-slate-400"></div>
           <i className="fas fa-microchip text-xs text-slate-400"></i>
           <div className="h-px w-8 bg-slate-400"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
