
import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  Users,
  ShieldCheck,
  Zap,
  Award,
  BookOpen,
  ArrowUpRight,
  Target,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import { CONFIG } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PainPoints from './components/PainPoints';
import SuccessStories from './components/SuccessStories';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONFIG.ctas.whatsappFloat.message);
    window.open(`https://wa.me/${CONFIG.trustFace.contactDirect?.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="relative overflow-x-hidden bg-white text-slate-900 selection:bg-red-100 selection:text-red-600">
      {/* Scroll indicator for scannability */}
      <div className="fixed top-0 left-0 w-full h-1 bg-red-600 z-[100] origin-left scale-x-0 animate-scroll-progress"></div>

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main>
        {/* HERO: The Trust Identity */}
        <Hero />

        {/* 30-SEC SCAN: The Commando Squad */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4 block">Notre Élite</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic">Un Escadron d'Experts À Votre Service</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Chaque membre est un ingénieur diplômé, expert dans son domaine spécifique. Pas de stagiaires, pas de freelances improvisés.</p>
            </div>
            <Team />
          </div>
        </section>

        {/* EMOTION: Pain Points & Real Cases */}
        <PainPoints />

        {/* RESULTS: Success Stories (Numbers) */}
        <SuccessStories />

        {/* VISUALS: Portfolio */}
        <Portfolio />

        {/* PRICING: Transparent Table */}
        <Services />

        {/* FAQ */}
        <FAQ />

        {/* CALL TO ACTION FINAL */}
        <section className="py-24 bg-red-600 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              PRÊT À <span className="underline decoration-white/30 italic">DOMINER</span> VOTRE MARCHÉ ?
            </h2>
            <p className="text-2xl text-red-100 mb-12 max-w-3xl mx-auto font-medium">
              Chaque jour où vous attendez, vos concurrents volent vos clients potentiels. Arrêtez l'hémorragie aujourd'hui.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button onClick={handleWhatsApp} className="bg-white text-red-600 px-10 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                <MessageCircle fill="currentColor" /> Diagnostic Gratuit
              </button>
              <a href="tel:+21620000000" className="bg-red-700 text-white px-10 py-6 rounded-2xl font-black text-2xl border border-red-500 hover:bg-red-800 transition-all flex items-center justify-center gap-3">
                <Phone /> Appeler Maintenant
              </a>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Widget */}
      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform animate-pulse flex items-center gap-3 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-black text-lg">
          {CONFIG.ctas.whatsappFloat.buttonText}
        </span>
        <MessageCircle size={32} fill="currentColor" />
      </button>
    </div>
  );
};

export default App;
