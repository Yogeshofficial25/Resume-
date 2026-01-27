
import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Blueprint & Logs" className="bg-white">
      <div className="relative space-y-16">
        {/* The Racing Track Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block">
           <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-[#e63946] via-[#00f5ff] to-[#e63946] opacity-30"></div>
        </div>

        {EXPERIENCES.map((exp, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Content Card */}
            <div className={`w-full md:w-5/12 group`}>
              <div className="puffy-ui p-8 hover:scale-[1.02] transition-transform relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                   <i className="fas fa-cog fa-5x animate-spin-slow"></i>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black tracking-widest text-[#e63946] uppercase bg-[#e63946]/5 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>)}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-1">{exp.role}</h3>
                <div className="text-[#00f5ff] font-bold text-sm mb-6 flex items-center">
                   <i className="fas fa-microchip mr-2 text-xs"></i>
                   {exp.company}
                </div>

                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 leading-relaxed group/li">
                      <div className="w-1.5 h-1.5 bg-[#e63946] rounded-full mt-1.5 mr-3 group-hover/li:scale-150 transition-transform"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Center Node (Robot Eye) */}
            <div className="relative z-10 w-16 h-16 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center shadow-xl md:mx-auto">
               <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-4 h-4 bg-[#00f5ff] rounded-full shadow-[0_0_10px_#00f5ff] animate-pulse"></div>
               </div>
               <div className="absolute -inset-2 border border-slate-200 rounded-full animate-spin-slow"></div>
            </div>

            {/* Spacer for layout */}
            <div className="hidden md:block w-5/12"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
