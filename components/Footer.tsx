
import React from 'react';
import { CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#E70013] p-1.5 rounded-lg">
                <span className="text-white font-black text-xl italic tracking-tighter">VT</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">{CONFIG.brand.name}</span>
            </div>
            <p className="text-slate-400 text-lg max-w-md mb-8 leading-relaxed">
              {CONFIG.brand.tagline}. Nous aidons les entreprises tunisiennes à prospérer dans l'économie digitale grâce à l'IA et aux données.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E70013] transition-colors border border-white/10">FB</a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E70013] transition-colors border border-white/10">IG</a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E70013] transition-colors border border-white/10">IN</a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xl mb-6">Solutions</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Sites Vitrine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Local</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chatbots IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-6">Contact Direct</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li>{CONFIG.trustFace.contactDirect?.phone}</li>
              <li>{CONFIG.trustFace.contactDirect?.email}</li>
              <li>{CONFIG.brand.headquartersCity}, {CONFIG.brand.country}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-slate-500">
          <p>© {new Date().getFullYear()} {CONFIG.brand.legalName}. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
