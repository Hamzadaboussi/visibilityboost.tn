
import React from 'react';
import { Star, ShieldCheck, Zap, Users } from 'lucide-react';
import { CONFIG } from '../constants';

const TrustBar: React.FC = () => {
  const stats = [
    { icon: <Users className="text-blue-500" />, label: "50+ Clients Satisfaits" },
    { icon: <Star className="text-yellow-500" fill="currentColor" />, label: "4.9/5 Note Moyenne" },
    { icon: <Zap className="text-purple-500" />, label: "< 2h Temps de Réponse" },
    { icon: <ShieldCheck className="text-green-500" />, label: "Garantie ROI Incluse" },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-6">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="font-bold text-slate-700 whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
