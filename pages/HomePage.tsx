
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import Footer from '../components/Footer';
import { IMAGES } from '../constants';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <TopAppBar title="Luxury Raschel" />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="md:p-4 lg:p-6">
          <div 
            className="flex min-h-[500px] md:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:rounded-3xl items-start justify-end px-6 pb-16 md:px-12 relative overflow-hidden" 
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(18, 18, 18, 0.9) 100%), url("${IMAGES.hero}")`}}
          >
            <div className="flex flex-col gap-4 text-left max-w-2xl relative z-10">
              <span className="text-primary text-xs md:text-sm font-black uppercase tracking-[0.3em] drop-shadow-lg">
                Premium Global Manufacturer
              </span>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight font-display">
                Elite Raschel <br className="hidden md:block"/> Blankets
              </h1>
              <p className="text-gray-300 text-base md:text-xl font-medium leading-relaxed max-w-xl opacity-90">
                Crafted for Elegance, Engineered for Scale. Over 20 years of excellence in high-volume textile manufacturing and global export.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10 mt-4">
              <button 
                onClick={() => navigate('/detail')} 
                className="group flex-1 sm:flex-none flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary text-background-dark text-base font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
              >
                Inquiry Now
              </button>
              <button 
                onClick={() => navigate('/catalog')} 
                className="flex-1 sm:flex-none flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-white/10 backdrop-blur-xl text-white border border-white/30 text-base font-bold transition-all hover:bg-white/20"
              >
                Collections
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-6 py-16">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight font-display uppercase">Why Industry Leaders Choose Us</h2>
          <div className="w-20 h-1.5 bg-primary mt-3 rounded-full mx-auto md:mx-0"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'history', title: '20+ Years Exp', desc: 'Unparalleled expertise in large-scale textile production cycles.' },
            { icon: 'language', title: 'Global Export', desc: 'Seamless logistics management to any port worldwide.' },
            { icon: 'verified', title: 'ISO Quality', desc: 'Stringent quality controls meeting ISO 9001 standards.' },
            { icon: 'factory', title: 'Direct Supply', desc: 'Manufacturer-direct pricing for optimized wholesale margins.' }
          ].map((feat, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card-dark p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-primary bg-primary/10 size-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl">{feat.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{feat.title}</h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-white/50 dark:bg-white/[0.02] py-16">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
            <div>
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight font-display uppercase">Featured Collections</h2>
              <p className="text-slate-500 dark:text-gray-400 text-lg mt-2 font-medium">New 2024 Autumn/Winter Export Series</p>
            </div>
            <button 
              onClick={() => navigate('/catalog')} 
              className="text-primary text-sm font-black pb-1 border-b-2 border-primary hover:text-white transition-colors"
            >
              VIEW ALL COLLECTIONS
            </button>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x">
            {[
              { img: IMAGES.royalGold, title: 'Royal Gold Series', sub: 'Ultra-soft 12lb Weight', badge: 'New Arrival' },
              { img: IMAGES.imperialMaroon, title: 'Imperial Maroon', sub: 'Traditional Arabesque Patterns' },
              { img: IMAGES.silkTouch, title: 'Silk-Touch Velvet', sub: 'Lightweight All-Season' }
            ].map((item, i) => (
              <div key={i} onClick={() => navigate('/detail')} className="flex-none w-[280px] md:w-[380px] flex flex-col gap-4 group cursor-pointer snap-start">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/5 relative shadow-xl">
                  <img src={item.img} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  {item.badge && <div className="absolute top-4 left-4 bg-primary text-background-dark text-[11px] font-black px-3 py-1.5 rounded uppercase tracking-wider shadow-lg">{item.badge}</div>}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-bold flex items-center gap-2">View details <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-slate-900 dark:text-white font-bold text-xl">{item.title}</h3>
                  <p className="text-slate-500 dark:text-gray-400 text-base font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-6 py-20">
        <div className="bg-primary/10 border-2 border-primary/20 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-5 -translate-y-1/2 translate-x-1/4">
             <span className="material-symbols-outlined text-[20rem]">support_agent</span>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
            <span className="material-symbols-outlined text-primary text-6xl">support_agent</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black leading-tight font-display">Ready for a <br className="hidden md:block"/> Wholesale Quote?</h2>
            <p className="text-slate-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-md font-medium">
              Request bulk pricing, custom labeling, and global logistics quotes directly from our export department.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-4 relative z-10">
            <button 
              onClick={() => navigate('/detail')} 
              className="w-full md:min-w-[300px] flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-16 bg-primary text-background-dark text-lg font-black shadow-2xl shadow-primary/30 transition-transform active:scale-95"
            >
              Get Free Catalog & Quote
            </button>
            <p className="text-center text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">Typical response time: &lt; 24 hours</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
