
import React from 'react';
import TopAppBar from '../components/TopAppBar';
import Footer from '../components/Footer';
import { IMAGES } from '../constants';

const DetailPage: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-24">
      <TopAppBar title="Product Specification" showBack={true} rightIcon="share" />
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Gallery Section */}
        <section className="md:p-4 lg:p-6">
          <div 
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-background-light dark:bg-background-dark md:rounded-3xl min-h-[400px] md:min-h-[550px] relative group shadow-2xl" 
            style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 40%), url("${IMAGES.detailMain}")`}}
          >
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-xl text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-xs font-black uppercase tracking-widest border border-white/20 shadow-lg cursor-pointer hover:bg-black/70 transition-colors">
              <span className="material-symbols-outlined text-lg">zoom_in</span>
              Tap to inspect weave
            </div>
            <div className="flex justify-center gap-3 p-8">
              <div className="size-2.5 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
              <div className="size-2.5 rounded-full bg-white/30 backdrop-blur-md"></div>
              <div className="size-2.5 rounded-full bg-white/30 backdrop-blur-md"></div>
              <div className="size-2.5 rounded-full bg-white/30 backdrop-blur-md"></div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 md:px-6 mt-10">
          {/* Info Side */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/20 text-primary text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg border border-primary/30 shadow-sm">
                Luxury Export Grade
              </span>
              <span className="text-slate-400 dark:text-gray-500 text-xs font-bold font-display uppercase tracking-widest">In Stock: Available for Export</span>
            </div>
            <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl md:text-5xl font-black leading-tight font-display uppercase mb-4">
              Premium Royal Embossed <br/> Raschel Blanket
            </h1>
            <p className="text-slate-500 dark:text-gray-400 text-base font-bold uppercase tracking-wider mb-8">
              SKU: RB-ME-2024-LUX-01 | Material: 100% High-Grade Double-Ply Polyester
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Material', val: '100% PES' },
                { label: 'Weight', val: '6.5 - 8 KG' },
                { label: 'Type', val: 'Double Layer' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2 rounded-2xl p-6 border border-slate-200 dark:border-white/10 bg-white dark:bg-card-dark shadow-sm">
                  <p className="text-slate-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                  <p className="text-slate-900 dark:text-white text-xl font-black font-display">{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="space-y-12">
               <div>
                  <h3 className="text-slate-900 dark:text-white text-2xl font-black uppercase tracking-tight font-display mb-6">Master Craftsmanship</h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="aspect-square rounded-2xl overflow-hidden relative group">
                      <img alt="Edge Binding" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={IMAGES.craft1}/>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-xl text-[11px] text-white p-3 rounded-xl text-center font-black uppercase tracking-widest border border-white/10">Reinforced Edges</div>
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden relative group">
                      <img alt="Stitching Detail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={IMAGES.craft2}/>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-xl text-[11px] text-white p-3 rounded-xl text-center font-black uppercase tracking-widest border border-white/10">High Pile Density</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { icon: 'verified', title: 'Anti-Static Treatment', desc: 'Advanced finishing process optimized for dry desert climates to eliminate static buildup.' },
                      { icon: 'eco', title: 'Hypoallergenic Fibers', desc: 'Sourced from Oeko-Tex Standard 100 certified recycled polyester, safe for sensitive skin.' },
                      { icon: 'auto_awesome', title: 'Deep 3D Embossing', desc: 'Proprietary heat-stamping technology creates a permanent, luxurious tactile depth.' }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="flex-shrink-0 size-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                          <span className="material-symbols-outlined text-primary text-3xl">{feat.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-black text-lg text-slate-900 dark:text-white uppercase font-display tracking-tight">{feat.title}</h4>
                          <p className="text-sm text-slate-500 dark:text-gray-400 font-medium leading-relaxed">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Inquiry Side (Form) */}
          <div className="lg:col-span-5">
            <div className="sticky top-[100px] p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-card-dark border-2 border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="flex flex-col gap-2 mb-8">
                <h3 className="text-slate-900 dark:text-white text-2xl font-black font-display uppercase tracking-tight">Wholesale Inquiry</h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm font-medium">Export pricing for container-load and high-volume orders.</p>
              </div>
              
              <form className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Target Quantity (MOQ: 500 units)</label>
                  <input className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-2xl focus:ring-primary text-slate-900 dark:text-white py-4 px-6 font-bold" placeholder="e.g. 1,000" type="number"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Import Destination Port</label>
                  <input className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-2xl focus:ring-primary text-slate-900 dark:text-white py-4 px-6 font-bold" placeholder="e.g. Dubai, Jebel Ali" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest px-1">Trading Company Name</label>
                  <input className="w-full bg-slate-100 dark:bg-background-dark border-none rounded-2xl focus:ring-primary text-slate-900 dark:text-white py-4 px-6 font-bold" placeholder="Business name" type="text"/>
                </div>
                
                <div className="pt-4">
                  <button type="button" className="w-full bg-primary hover:bg-primary/90 text-background-dark font-black py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 text-lg uppercase tracking-widest">
                    Request Pricing
                  </button>
                  <p className="text-center text-slate-400 text-[10px] mt-4 font-bold uppercase tracking-widest">Includes Pro-Forma Invoice Draft</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-2xl border-t border-slate-200 dark:border-white/10 p-4 md:p-6 flex items-center justify-center z-[100] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl w-full flex items-center justify-between gap-6">
          <div className="hidden sm:flex flex-col">
            <span className="text-[11px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest">Est. Export Base</span>
            <span className="text-2xl font-black text-primary font-display">$24.50<span className="text-sm text-slate-400 font-bold tracking-normal uppercase ml-1">/Unit</span></span>
          </div>
          <button className="flex-1 max-w-2xl bg-primary text-background-dark h-16 rounded-2xl font-black text-base tracking-[0.1em] shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-95 uppercase">
            <span className="material-symbols-outlined text-2xl">mail</span>
            Request Wholesale Quotation
          </button>
        </div>
      </div>
      
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default DetailPage;
