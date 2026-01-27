
import React, { useState } from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <Section id="contact" title="Get in Touch">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <p className="text-xl text-slate-600 leading-relaxed">
            Have a project in mind or looking to hire a dedicated Product Manager? 
            Let's discuss how I can help grow your product.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Email Me</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Call Me</p>
                <p className="text-lg font-bold text-slate-900">+91 {PERSONAL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-location-dot text-xl"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Location</p>
                <p className="text-lg font-bold text-slate-900">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600">Thanks for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-blue-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
