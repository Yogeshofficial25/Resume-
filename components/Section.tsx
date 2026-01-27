
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", dark = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-32 px-6 md:px-12 lg:px-24 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${dark ? 'bg-slate-900 text-white' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="text-[10px] font-black text-[#e63946] uppercase tracking-[0.5em] mb-4">Directory / {id}</div>
            <h2 className={`text-4xl md:text-6xl font-black tracking-tighter ${dark ? 'text-white' : 'text-slate-900'}`}>
              {title}<span className="text-[#00f5ff]">_</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent mt-6 opacity-50"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
