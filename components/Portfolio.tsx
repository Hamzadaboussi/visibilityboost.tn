
import React from 'react';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONFIG } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-2 block">Nos Travaux</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Ils nous ont fait confiance</h2>
            <p className="text-lg text-slate-400 font-medium italic">Découvrez comment nous avons transformé ces business locaux.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-3xl font-black text-red-600">75+</p>
              <p className="text-[10px] uppercase font-bold text-slate-500">Projets Livrés</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-green-500">94%</p>
              <p className="text-[10px] uppercase font-bold text-slate-500">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Portfolio */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar scroll-smooth px-4 -mx-4">
            {CONFIG.portfolio.map((project) => (
              <div key={project.id} className="min-w-[300px] md:min-w-[400px] snap-center group bg-white/5 rounded-[40px] overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.screenshot} 
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-xl text-white">
                    <ExternalLink size={18} />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-[10px] font-black uppercase text-red-500 tracking-[0.2em]">{project.category}</span>
                    <h3 className="text-2xl font-black group-hover:text-red-500 transition-colors">{project.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(project.results).map(([key, val]) => (
                      <div key={key} className="bg-white/5 p-3 rounded-2xl border border-white/5">
                        <p className="text-[9px] uppercase font-black text-slate-500 mb-1">{key}</p>
                        <p className="text-lg font-black text-green-400 leading-none">{val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold bg-white/5 text-slate-400 px-2 py-0.5 rounded-lg">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="flex justify-center gap-2 mt-4">
            {CONFIG.portfolio.map((_, i) => (
              <div key={i} className="w-8 h-1 bg-white/10 rounded-full group-hover:bg-red-600 transition-colors"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
