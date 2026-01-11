
import React from 'react';
import { GraduationCap, Award, Briefcase, Linkedin, ArrowRight } from 'lucide-react';
import { CONFIG } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Chef Alone */}
      <div className="flex justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-[40px] overflow-hidden border-2 border-red-600 shadow-[0_20px_50px_-15px_rgba(231,0,19,0.2)]">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src={CONFIG.trustFace.photo} 
              alt={CONFIG.trustFace.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2 inline-block">Le Fondateur</span>
              <h3 className="text-3xl font-black">{CONFIG.trustFace.name}</h3>
              <p className="text-sm font-bold text-red-400 italic">{CONFIG.trustFace.title}</p>
            </div>
          </div>
          <div className="p-8">
            <p className="text-slate-600 font-medium italic mb-6 leading-relaxed">"{CONFIG.trustFace.bio}"</p>
            <div className="flex gap-2 flex-wrap">
              {CONFIG.trustFace.expertise.slice(0, 3).map(skill => (
                <span key={skill} className="text-[9px] font-black bg-slate-50 text-slate-400 px-2 py-1 rounded-md uppercase border border-slate-100">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Squad Horizontal Scroll */}
      <div className="relative group">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg pointer-events-none md:hidden">
          <ArrowRight className="text-slate-400 rotate-180" size={20} />
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-8 no-scrollbar scroll-smooth">
          {CONFIG.team.map((member) => (
            <div key={member.id} className="min-w-[280px] md:min-w-[320px] snap-center bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-md">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider">{member.role}</span>
                  <h4 className="text-xl font-black">{member.name}</h4>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <GraduationCap size={14} className="text-red-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] font-black text-slate-900">{member.education.university}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">{member.education.degree}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Briefcase size={14} className="text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] font-black text-slate-900">Expérience : {member.experience.years}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">{member.experience.projectsCompleted}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1 h-12 overflow-y-auto no-scrollbar">
                  {member.personalAchievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Award size={12} className="text-yellow-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] font-bold text-slate-500">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg pointer-events-none md:hidden">
          <ArrowRight className="text-slate-400" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Team;
