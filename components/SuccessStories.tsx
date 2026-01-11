
import React from 'react';
import { TrendingUp, UserPlus, Globe, Award, ArrowRight, Quote } from 'lucide-react';
import { CONFIG } from '../constants';

const SuccessStories: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] italic">
              DES <span className="text-red-600 underline decoration-red-600/30">RÉSULTATS</span><br /> 
              QUI PARLENT.
            </h2>
            <p className="text-2xl text-slate-400 font-medium mb-12 max-w-xl">
              Nous ne listons pas des sites. Nous listons des transformations de chiffre d'affaires.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:border-red-500/50 transition-all">
                  <p className="text-5xl font-black text-red-600 mb-2">{CONFIG.teamAchievements.overallStats.avgVisIncrease}</p>
                  <p className="text-xs font-black uppercase text-slate-500 tracking-widest">Visibility Increase</p>
               </div>
               <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:border-red-500/50 transition-all">
                  <p className="text-5xl font-black text-green-500 mb-2">{CONFIG.teamAchievements.overallStats.revenueGrowth}</p>
                  <p className="text-xs font-black uppercase text-slate-500 tracking-widest">Revenue Growth</p>
               </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-8 relative z-10">
            {CONFIG.teamAchievements.successStories.map((story) => (
              <div key={story.id} className="bg-white/5 backdrop-blur-xl rounded-[50px] p-10 md:p-14 border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="bg-red-600 text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest">{story.businessType}</span>
                  <span className="text-slate-500 font-black uppercase tracking-widest text-xs italic">Tunisie, {story.location}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-black leading-tight group-hover:text-red-500 transition-colors">{story.impactHighlight}</h3>
                    <div className="flex items-center gap-6">
                       <div className="text-center">
                          <p className="text-xs font-black text-slate-500 uppercase mb-2">Avant</p>
                          <p className="text-3xl font-black text-slate-600 line-through">INVISIBLE</p>
                       </div>
                       <ArrowRight className="text-red-600 animate-pulse" />
                       <div className="text-center">
                          <p className="text-xs font-black text-green-500 uppercase mb-2">Après</p>
                          <p className="text-4xl font-black text-white">#1 LOCAL</p>
                       </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-[35px] p-8 text-slate-900 relative shadow-2xl">
                     <Quote className="absolute top-4 right-4 text-red-600/20" size={40} />
                     <p className="text-lg font-bold italic mb-6 leading-relaxed">"{story.clientQuote}"</p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xs">Prop.</div>
                        <div>
                           <p className="text-sm font-black leading-none">Client Satisfait</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vérifié par VitrineTrust</p>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                   {story.keyActions.map(action => (
                     <span key={action} className="text-[10px] font-black bg-white/10 px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">{action}</span>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Abstract Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 opacity-5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600 opacity-5 blur-[200px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default SuccessStories;
