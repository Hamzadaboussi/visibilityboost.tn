
import React, { useState } from 'react';
import { AlertCircle, ChevronDown, CheckCircle2, ArrowRight, TrendingUp, Target } from 'lucide-react';
import { CONFIG } from '../constants';

const PainPoints: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="problems" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            VOTRE <span className="text-red-600">INVISIBILITÉ</span> VOUS TUE.
          </h2>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium">
            Chaque clic que vous ne recevez pas est un client qui enrichit votre concurrent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {CONFIG.problemsSolutions.problems.map((problem) => (
              <div 
                key={problem.id}
                className={`group border-4 transition-all duration-500 rounded-[40px] overflow-hidden ${
                  expandedId === problem.id 
                  ? 'border-red-600 bg-red-50/30 ring-8 ring-red-50' 
                  : 'border-slate-50 bg-white hover:border-slate-100'
                }`}
              >
                <div 
                  className="p-10 cursor-pointer flex items-center justify-between"
                  onClick={() => setExpandedId(problem.id)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                       <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                         expandedId === problem.id ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-400'
                       }`}>
                         {problem.emotion}
                       </span>
                    </div>
                    <h3 className={`text-3xl font-black transition-colors ${
                      expandedId === problem.id ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      {problem.painPoint}
                    </h3>
                  </div>
                  <ChevronDown className={`transition-transform duration-500 ${expandedId === problem.id ? 'rotate-180 text-red-600' : 'text-slate-200'}`} size={32} />
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
             {CONFIG.problemsSolutions.problems.map((problem) => (
               expandedId === problem.id && (
                 <div key={problem.id} className="animate-in fade-in slide-in-from-right duration-500 bg-slate-900 rounded-[50px] p-12 text-white shadow-2xl relative">
                    <div className="mb-12">
                       <h4 className="text-xs font-black text-red-500 uppercase tracking-[0.3em] mb-4">Les Symptômes</h4>
                       <ul className="grid grid-cols-1 gap-4">
                         {problem.symptoms.map((s, i) => (
                           <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                              <AlertCircle className="text-red-500 shrink-0" />
                              <span className="font-bold text-slate-300">{s}</span>
                           </li>
                         ))}
                       </ul>
                    </div>

                    <div className="mb-12 bg-white/5 rounded-[35px] p-8 border border-white/10 relative overflow-hidden">
                       <h4 className="text-xs font-black text-green-500 uppercase tracking-[0.3em] mb-6">Étude de Cas Réelle</h4>
                       <div className="mb-6">
                          <p className="text-slate-500 text-sm font-bold uppercase mb-2 italic tracking-wider">Avant VitrineTrust</p>
                          <p className="text-xl font-medium text-slate-200 leading-relaxed italic">"{problem.realCase.before}"</p>
                       </div>
                       <div className="flex items-center gap-6 p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                          <TrendingUp className="text-green-500" size={32} />
                          <div>
                             <p className="text-xs font-black uppercase text-green-500">Après Intervention</p>
                             <p className="text-3xl font-black text-white">{problem.realCase.metric}</p>
                          </div>
                       </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                       <div>
                          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Solution</p>
                          <p className="text-xl font-black text-white">{problem.solution.what}</p>
                       </div>
                       <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 group">
                          {problem.cta} <ArrowRight className="group-hover:translate-x-1" />
                       </button>
                    </div>
                 </div>
               )
             ))}
             {/* Decorative Background for Case */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-slate-900/5 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
