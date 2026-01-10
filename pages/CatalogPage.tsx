
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import Footer from '../components/Footer';
import { IMAGES } from '../constants';

const CatalogPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const tabs = ['All Catalog', 'Luxury Export', 'New Arrivals', 'Best Sellers'];

  const categories = [
    { title: 'Single Layer', sub: 'Lightweight Comfort', img: IMAGES.singleLayer },
    { title: 'Double Layer', sub: 'Extreme Warmth', img: IMAGES.doubleLayer },
    { title: 'Embossed', sub: 'Tactile Elegance', img: IMAGES.embossed },
    { title: 'Printed', sub: 'Vibrant Designs', img: IMAGES.printed }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <TopAppBar 
        title="Premium Collections" 
        showBack={true} 
        rightIcon="tune" 
        onRightIconClick={() => setShowFilters(true)}
      />
      
      <nav className="sticky top-[64px] z-40 bg-background-light dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto flex px-4 gap-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab, i) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(i)}
              className={`flex flex-col items-center justify-center border-b-[3px] transition-all whitespace-nowrap pb-4 pt-5 ${
                activeTab === i 
                  ? 'border-b-primary text-slate-900 dark:text-white font-black' 
                  : 'border-b-transparent text-slate-500 dark:text-gray-500 font-bold'
              }`}
            >
              <p className="text-sm uppercase tracking-wider">{tab}</p>
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-2">Wholesale Distribution</p>
              <h3 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight font-display uppercase">Raschel Blanket <br className="hidden md:block"/> Categories</h3>
            </div>
            <span className="text-slate-500 dark:text-gray-400 text-base font-bold bg-white dark:bg-white/5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
              4 Primary Lines Available
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              onClick={() => navigate('/detail')} 
              className="group relative bg-cover bg-center flex flex-col gap-3 rounded-[1.5rem] justify-end p-6 aspect-[3/4] overflow-hidden shadow-xl cursor-pointer transition-transform hover:-translate-y-2 duration-300" 
              style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%), url("${cat.img}")`}}
            >
              <div className="relative z-10">
                <p className="text-white text-2xl font-black font-display uppercase leading-none">{cat.title}</p>
                <div className="h-1 w-8 bg-primary mt-2 transition-all group-hover:w-16"></div>
                <p className="text-primary text-xs font-black uppercase tracking-widest mt-3 opacity-90">{cat.sub}</p>
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Global Export Banner */}
        <div className="mt-16 p-8 md:p-12 bg-primary rounded-[2rem] flex flex-col md:flex-row gap-8 items-center text-center md:text-left shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 opacity-10">
             <span className="material-symbols-outlined text-[15rem]">inventory_2</span>
          </div>
          <div className="size-20 rounded-2xl bg-background-dark/10 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-background-dark text-5xl">inventory_2</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 relative z-10">
            <h4 className="text-background-dark font-black text-2xl md:text-3xl tracking-tight uppercase font-display">Wholesale Export Catalog</h4>
            <p className="text-background-dark/80 text-base md:text-lg font-bold leading-relaxed max-w-2xl">
              Full product specifications, packaging details, and shipping weights are available in our official PDF catalog.
            </p>
          </div>
          <button 
            onClick={() => navigate('/detail')} 
            className="w-full md:w-auto bg-background-dark text-primary font-black py-4 px-10 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all text-base uppercase tracking-wider relative z-10"
          >
            Inquire for Quote
          </button>
        </div>
      </main>

      {/* Filter Sidebar (Modal Style) */}
      <div className={`fixed inset-0 z-[60] flex flex-col justify-end transition-transform duration-500 ${showFilters ? 'translate-y-0' : 'translate-y-full pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowFilters(false)}></div>
        <div className="relative w-full max-w-2xl mx-auto bg-background-light dark:bg-background-dark rounded-t-[2.5rem] flex flex-col shadow-2xl p-8 border-t border-white/10">
          <button className="flex h-6 w-full items-center justify-center mb-6" onClick={() => setShowFilters(false)}>
            <div className="h-1.5 w-16 rounded-full bg-slate-300 dark:bg-white/10"></div>
          </button>
          
          <div className="flex items-center justify-between mb-10">
            <h4 className="text-2xl font-black uppercase tracking-tight font-display">Product Filters</h4>
            <button className="text-primary font-black text-xs uppercase tracking-widest hover:underline">Reset All</button>
          </div>

          <div className="space-y-10 mb-12">
            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">Weight Range</label>
                <span className="text-primary font-black bg-primary/10 px-3 py-1 rounded">2.5 KG - 9.0 KG</span>
              </div>
              <div className="relative h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full">
                <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full"></div>
                <div className="absolute left-[0%] top-1/2 -translate-y-1/2 size-6 bg-white border-4 border-primary rounded-full shadow-lg cursor-pointer"></div>
                <div className="absolute left-[75%] top-1/2 -translate-y-1/2 size-6 bg-white border-4 border-primary rounded-full shadow-lg cursor-pointer"></div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400 mb-6">Blanket Size Standards</label>
              <div className="flex flex-wrap gap-4">
                {['Single (160x220)', 'Double (220x240)', 'King (240x260)'].map((size) => (
                  <button 
                    key={size}
                    className={`px-6 py-3 rounded-xl border-2 font-black text-xs uppercase tracking-wider transition-all ${
                      size.includes('Double') 
                        ? 'border-primary bg-primary/10 text-primary shadow-lg shadow-primary/10' 
                        : 'border-slate-200 dark:border-white/5 bg-transparent text-slate-500 dark:text-white hover:border-primary/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowFilters(false)} 
            className="w-full py-5 bg-primary text-background-dark font-black rounded-2xl shadow-xl shadow-primary/20 text-lg uppercase tracking-widest hover:scale-[1.02] transition-transform"
          >
            Apply Selection
          </button>
          <div className="h-10"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CatalogPage;
