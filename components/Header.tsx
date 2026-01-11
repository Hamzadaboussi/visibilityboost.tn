
import React from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CONFIG } from '../constants';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { label: 'Problèmes', href: '#problems' },
    { label: 'Résultats', href: '#results' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#E70013] p-1.5 rounded-lg">
            <span className="text-white font-black text-xl italic tracking-tighter">VT</span>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            {CONFIG.brand.name}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-semibold text-slate-600 hover:text-[#E70013] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => window.open(`https://wa.me/21620000000`, '_blank')}
            className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#1eb956] transition-all"
          >
            <MessageCircle size={18} /> WhatsApp
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-lg font-bold text-slate-900 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button 
              className="w-full bg-[#E70013] text-white py-4 rounded-xl font-bold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Diagnostic Gratuit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
