
import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const skillIconMap: Record<string, string> = {
  // Product & Delivery
  "JIRA": "fab fa-jira",
  "Confluence": "fas fa-layer-group",
  "Notion": "fas fa-file-lines",
  "Trello": "fab fa-trello",
  "AWS": "fab fa-aws",
  // Design & UX
  "Figma": "fab fa-figma",
  "Miro": "fas fa-object-group",
  "Balsamiq": "fas fa-pencil-ruler",
  "Whimsical": "fas fa-wand-magic-sparkles",
  // Analytics
  "Power BI": "fas fa-chart-bar",
  "SQL": "fas fa-database",
  "Google Analytics": "fas fa-magnifying-glass-chart",
  "Firebase": "fas fa-fire",
  // Web & APIs
  "Postman": "fas fa-paper-plane",
  "Git": "fab fa-git-alt",
  "GitHub": "fab fa-github",
  "JavaScript": "fab fa-js",
  "React": "fab fa-react",
  "Node.js": "fab fa-node-js"
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Hardware & Software" dark className="bg-[#0f172a] overflow-hidden relative">
      {/* Background Circuit Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f5ff]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e63946]/5 rounded-full blur-[100px] -z-0"></div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {SKILL_CATEGORIES.map((cat, index) => (
          <div key={index} className="bg-slate-900/50 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 group hover:border-[#00f5ff]/30 transition-all duration-500">
            <div className="flex items-center space-x-3 mb-8">
               <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center text-[#00f5ff] group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_10px_rgba(0,245,255,0.1)]">
                  <i className={`fas ${index === 0 ? 'fa-layer-group' : index === 1 ? 'fa-pen-nib' : index === 2 ? 'fa-chart-pie' : 'fa-code'}`}></i>
               </div>
               <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">{cat.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2.5 bg-white/5 text-slate-300 text-xs font-bold rounded-xl border border-white/5 hover:bg-[#00f5ff] hover:text-slate-900 hover:scale-105 transition-all cursor-default flex items-center group/skill shadow-sm"
                >
                  <i className={`${skillIconMap[skill] || 'fas fa-microchip'} mr-2.5 text-sm transition-colors duration-300 ${index % 2 === 0 ? 'text-[#00f5ff]' : 'text-[#e63946]'} group-hover/skill:text-slate-900`}></i>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 bg-white/5 p-12 rounded-[3rem] border border-white/10 relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
           <div className="max-w-md">
             <div className="flex items-center space-x-2 mb-4">
                <span className="w-2 h-2 bg-[#00f5ff] rounded-full animate-pulse"></span>
                <h3 className="text-3xl font-black text-white">The Innovation Core</h3>
             </div>
             <p className="text-slate-400 font-medium leading-relaxed">
               High-speed product delivery powered by cross-functional synergy and deep user empathy. My internal OS is optimized for scalability and clean architecture, much like the precision of a racing machine.
             </p>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Product Vision", icon: "fa-eye", color: "#00f5ff" },
                { label: "Market Speed", icon: "fa-tachometer-alt", color: "#e63946" },
                { label: "User Care", icon: "fa-heart", color: "#00f5ff" },
                { label: "Logic Flow", icon: "fa-project-diagram", color: "#e63946" }
              ].map((core, i) => (
                <div key={i} className="bg-slate-900 p-6 rounded-3xl border border-white/5 flex flex-col items-center group/core hover:border-white/20 transition-all">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-3 group-hover/core:scale-110 transition-transform">
                      <i className={`fas ${core.icon} text-2xl transition-all duration-500`} style={{ color: core.color }}></i>
                   </div>
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">{core.label}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
