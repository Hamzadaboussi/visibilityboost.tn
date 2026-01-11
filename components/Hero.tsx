
import React from 'react';
import { ArrowRight, CheckCircle2, Star, Target, Zap, ChevronRight } from 'lucide-react';
import { CONFIG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-5 py-2.5 rounded-2xl font-black text-sm mb-8 border border-red-100 uppercase tracking-widest animate-in fade-in slide-in-from-left duration-500">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              Experts certifiés en Tunisie
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 animate-in fade-in slide-in-from-left duration-700">
              VOTRE <span className="text-red-600 italic">RÉUSSITE</span><br />
              EST NOTRE <span className="underline decoration-red-600/20">MÉTIER</span>
            </h1>
            
            <p className="text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium animate-in fade-in slide-in-from-left duration-1000">
              Vous avez un bon business mais personne ne vous voit ? 
              Nous utilisons la <span className="keyword-highlight font-black text-slate-900">science de la visibilité</span> pour ramener les clients chez vous.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-12">
              <button onClick={() => window.open(`https://wa.me/21620000000`, '_blank')} className="w-full sm:w-auto bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:bg-black transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group">
                Parlons de votre projet
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-14 h-14 rounded-full border-4 border-white shadow-lg" alt="Client" />
                ))}
                <div className="w-14 h-14 rounded-full bg-red-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-black text-xs">+50</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start opacity-70">
               <div className="flex items-center gap-2 font-black text-slate-400 uppercase text-[10px] tracking-widest">
                 <Target className="text-red-600" size={16} /> Clientèle Ciblée
               </div>
               <div className="flex items-center gap-2 font-black text-slate-400 uppercase text-[10px] tracking-widest">
                 <Zap className="text-yellow-500" size={16} /> Site ultra rapide
               </div>
               <div className="flex items-center gap-2 font-black text-slate-400 uppercase text-[10px] tracking-widest">
                 <CheckCircle2 className="text-green-500" size={16} /> Résultats prouvés
               </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
