
import React from 'react';
import TopAppBar from '../components/TopAppBar';
import Footer from '../components/Footer';
import { IMAGES } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <TopAppBar title="Our Heritage" showBack={true} rightIcon="share" />
      
      <main className="flex-1">
        {/* About Hero */}
        <section className="relative md:p-4 lg:p-6">
          <div 
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-background-dark md:rounded-[2.5rem] min-h-[350px] md:min-h-[500px] relative shadow-2xl" 
            style={{backgroundImage: `linear-gradient(0deg, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.3) 60%), url("${IMAGES.aboutHero}")`}}
          >
            <div className="flex flex-col p-8 md:p-16 max-w-4xl">
              <div className="bg-primary text-background-dark text-[11px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-lg w-fit mb-6 shadow-xl">Global Excellence</div>
              <h1 className="text-white tracking-tight text-4xl md:text-7xl font-black leading-[1.1] font-display uppercase">Mastering Raschel <br/> Textiles</h1>
              <p className="text-slate-300 text-lg md:text-xl mt-6 font-medium leading-relaxed max-w-2xl opacity-90 italic">
                "Defining luxury comfort through high-precision engineering and authentic textile craftsmanship since 1998."
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto w-full px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'precision_manufacturing', label: 'Annual Capacity', val: '12M+ Meters' },
              { icon: 'verified_user', label: 'QC Standard', val: 'ISO 9001:2025' },
              { icon: 'public', label: 'Export Reach', val: '65+ Countries' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-[2rem] p-8 bg-white dark:bg-card-dark shadow-xl border border-slate-200 dark:border-white/5 group hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">{stat.icon}</span>
                <p className="text-slate-500 dark:text-gray-400 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</p>
                <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-black font-display uppercase">{stat.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure */}
        <section className="bg-white/50 dark:bg-white/[0.02] py-20">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight font-display uppercase">Global Infrastructure</h2>
              <div className="w-20 h-2 bg-primary mt-4 rounded-full"></div>
              <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl mt-6 font-medium max-w-3xl leading-relaxed">
                Our facility operates 48 ultra-high-speed Karl Mayer Raschel warp knitting units, maintaining continuous 24/7 production to fulfill massive global demands.
              </p>
            </div>

            <div className="flex overflow-x-auto gap-8 no-scrollbar pb-8 snap-x">
              {[
                { title: 'Embossing Lab', desc: 'Precision 3D heat-forming for unique tactile patterns.', img: IMAGES.infra1 },
                { title: 'Eco-Dyeing Plant', desc: 'Closed-loop sustainable coloring system for high-fastness hues.', img: IMAGES.infra2 }
              ].map((card, i) => (
                <div key={i} className="min-w-[300px] md:min-w-[500px] bg-white dark:bg-card-dark rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl snap-start">
                  <div className="h-64 md:h-80 bg-cover bg-center" style={{backgroundImage: `url("${card.img}")`}}></div>
                  <div className="p-8 md:p-10">
                    <h3 className="font-black text-2xl md:text-3xl dark:text-white font-display uppercase tracking-tight">{card.title}</h3>
                    <p className="text-base md:text-lg text-slate-500 dark:text-gray-400 mt-3 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto w-full px-4 md:px-6 py-24">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight font-display uppercase mb-16 text-center">Our Evolution</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20 rounded-full"></div>
            <div className="space-y-16">
              {[
                { year: '1998', title: 'Plant Genesis', desc: 'Established inaugural high-speed textile plant in the industrial zone.' },
                { year: '2005', title: 'Global Hub', desc: 'Opened primary logistics and distribution centers in Dubai and Jeddah.' },
                { year: '2018', title: 'Digital Evolution', desc: 'Implemented full AI-driven automation for knitting and defect detection.' },
                { year: 'Today', title: 'Global Hegemony', desc: 'Currently the leading exporter of premium Raschel textiles worldwide.' }
              ].map((m, i) => (
                <div key={i} className={`relative flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'} pl-12 md:pl-0`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 size-6 rounded-full bg-primary border-4 border-background-light dark:border-background-dark z-10 shadow-lg"></div>
                  <div className={`w-full md:w-[45%] flex flex-col gap-2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-primary font-black text-xl font-display">{m.year}</span>
                    <h4 className="font-black text-2xl dark:text-white uppercase tracking-tight font-display">{m.title}</h4>
                    <p className="text-slate-500 dark:text-gray-400 font-medium leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto w-full px-4 md:px-6 pb-24">
           <div className="p-8 md:p-16 rounded-[3rem] bg-background-dark dark:bg-card-dark text-white flex flex-col items-center text-center gap-8 shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-primary/5"></div>
              <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight relative z-10">Export Ready Infrastructure</h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed relative z-10">
                Partner with the world's most efficient Raschel blanket production engine. High-volume, low-latency manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center relative z-10">
                <button className="bg-primary text-background-dark font-black py-5 px-12 rounded-2xl shadow-xl shadow-primary/10 transition-all hover:scale-105 active:scale-95 text-base uppercase tracking-widest">
                  Download Factory Profile
                </button>
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest relative z-10">
                Available in English, Arabic, and Chinese
              </p>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
