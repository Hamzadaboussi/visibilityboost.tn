
import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { CONFIG } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Ressources & Expertise</h2>
            <p className="text-xl text-slate-600">Apprenez comment dominer votre marché digital en Tunisie.</p>
          </div>
          <button className="text-[#E70013] font-black text-lg hover:underline flex items-center gap-2">
            Tout le blog <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFIG.articles.map((article) => (
            <article key={article.id} className="group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={article.thumbnail} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">
                    <Tag size={12} /> {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#E70013] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 font-medium mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="font-black text-slate-900 flex items-center gap-2 group/btn">
                  Lire l'article <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
