import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">DevPortfolio</h2>
          <p className="text-slate-500 text-sm italic">© {new Date().getFullYear()} All rights reserved. Designed with passion.</p>
        </div>
        
        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-blue-400 transition-colors">GH</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LI</a>
          <a href="#" className="hover:text-blue-400 transition-colors">TW</a>
          <a href="#" className="hover:text-blue-400 transition-colors">ML</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
