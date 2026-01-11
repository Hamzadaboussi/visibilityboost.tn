
import React from 'react';
import { Check, ArrowRight, Zap, Crown, Target, Plus } from 'lucide-react';
import { CONFIG } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4 block">Tarification Transparente</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic">{CONFIG.services.headline}</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">{CONFIG.services.subheadline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {CONFIG.services.packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col p-10 md:p-12 rounded-[50px] transition-all duration-500 border-4 ${
                pkg.popular 
                ? 'border-red-600 bg-white shadow-[0_40px_100px_-30px_rgba(231,0,19,0.2)] scale-105 z-10' 
                : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl ring-8 ring-red-50">
                  RECOMMANDÉ BUSINESS
                </div>
              )}

              <div className="mb-10 text-center md:text-left">
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{pkg.name}</h3>
                <p className="text-slate-400 font-bold text-sm mb-8 italic">{pkg.tagline}</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-6xl font-black text-slate-900">{pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="text-slate-300 line-through font-bold text-xl">{pkg.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="space-y-10 flex-1 mb-12">
                {pkg.included.map((cat) => (
                  <div key={cat.category}>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 border-b border-slate-200 pb-2">{cat.category}</h4>
                    <ul className="space-y-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                          <Check size={18} className="text-red-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <button className={`w-full py-6 rounded-3xl font-black text-xl transition-all shadow-xl ${
                pkg.popular 
                ? 'bg-red-600 text-white hover:bg-red-700 hover:-translate-y-1' 
                : 'bg-slate-900 text-white hover:bg-black'
              }`}>
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Extensions Table */}
        <div className="bg-slate-900 rounded-[60px] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <h3 className="text-3xl md:text-5xl font-black mb-4 italic">Extensions À La Carte</h3>
                <p className="text-xl text-slate-400 font-medium">Besoin d'un boost spécifique ? Ajoutez ces modules à n'importe quel pack.</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-black text-red-500 uppercase tracking-widest bg-red-500/10 px-6 py-3 rounded-full border border-red-500/20">
                 <Plus /> Option de paiement 3x dispo
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CONFIG.services.extensions.items.map(item => (
                <div key={item.id} className="group bg-white/5 p-8 rounded-[40px] border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-xl font-black text-white group-hover:text-red-500 transition-colors leading-tight">{item.name}</h4>
                    <span className="text-2xl font-black text-red-500 shrink-0">{item.price}</span>
                  </div>
                  <p className="text-slate-400 font-medium text-sm mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2 mb-8">
                    {item.included.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
                        <div className="w-1 h-1 bg-red-600 rounded-full" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-white/10 hover:bg-white text-white hover:text-slate-900 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all">Ajouter au Devis</button>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 opacity-10 blur-[150px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
