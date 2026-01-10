
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 dark:bg-card-dark px-6 py-12 border-t border-gray-200 dark:border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col gap-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-slate-900 dark:text-white font-black uppercase text-base tracking-widest">Luxury Raschel</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm max-w-xs">
            Global leaders in premium Raschel blanket manufacturing for wholesale and export.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Company</h4>
            <Link to="/about" className="text-slate-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">About Us</Link>
            <Link to="/about" className="text-slate-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">Factory Tour</Link>
            <a className="text-slate-500 dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Certifications</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Export Support</h4>
            <a className="text-slate-500 dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Logistics</a>
            <a className="text-slate-500 dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Contact Us</a>
            <Link to="/detail" className="text-slate-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">Bulk Inquiry</Link>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-8 py-8 border-y border-gray-200 dark:border-white/10">
        <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">mail</span>
        <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">phone_in_talk</span>
        <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">location_on</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <p className="text-center text-slate-500 text-[11px] font-medium">© 2024 Luxury Raschel Manufacturing Co. All Rights Reserved.</p>
        <p className="text-center text-slate-400 text-[10px]">Industrial Zone A-12, Textile District.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
