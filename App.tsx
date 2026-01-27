
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Section from './components/Section';
import { EDUCATION, CERTIFICATIONS, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main>
        <Hero />
        
        {/* About / Summary Section */}
        <Section id="about" title="About Me">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-2xl text-slate-700 font-light leading-relaxed mb-8">
                {PERSONAL_INFO.summary}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-slate-400 uppercase text-xs font-bold tracking-widest">Availability</h4>
                  <p className="text-lg font-semibold text-slate-900">Open to new roles</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-400 uppercase text-xs font-bold tracking-widest">Focus</h4>
                  <p className="text-lg font-semibold text-slate-900">AI-Enabled SaaS & FinTech</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-xl shadow-blue-100">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-80">Top Certifications</h4>
                <div className="space-y-4">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className="flex items-start">
                      <i className="fas fa-award mt-1 mr-3 text-emerald-300"></i>
                      <div>
                        <div className="font-bold leading-tight">{cert.name}</div>
                        <div className="text-xs opacity-70">{cert.issuer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Experience />

        <Skills />

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="grid md:grid-cols-3 gap-8">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                <div className="text-blue-600 font-bold mb-2 uppercase text-xs tracking-tighter">{edu.period}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                <p className="text-slate-500 text-sm">{edu.institution}</p>
              </div>
            ))}
          </div>
        </Section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
