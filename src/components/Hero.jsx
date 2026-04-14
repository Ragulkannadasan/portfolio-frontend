import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900">
      <div className="max-w-4xl text-center space-y-6">
        <h3 className="text-blue-400 font-mono tracking-widest uppercase">Full Stack Developer</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Building Digital <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Experiences</span> That Matter
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Passionate about building scalable backend systems and high-performance frontend interfaces.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <a href="#projects" className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all">
            View My Work ➔
          </a>
          <div className="flex gap-4 px-6 py-3 bg-slate-800 rounded-xl border border-slate-700">
            <a href="#" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
