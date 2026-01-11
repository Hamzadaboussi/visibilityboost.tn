
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CONFIG } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-4">
            <HelpCircle size={18} />
            Des questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-slate-600">Tout ce que vous devez savoir pour démarrer sereinement.</p>
        </div>

        <div className="space-y-4">
          {CONFIG.faq.map((item, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                openIndex === i ? 'border-[#E70013] shadow-lg' : 'border-slate-100'
              }`}
            >
              <button 
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg md:text-xl font-black text-slate-900">{item.question}</span>
                <ChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 md:px-8 pb-8 animate-in slide-in-from-top duration-300">
                  <div className="h-[1px] bg-slate-100 mb-6"></div>
                  <p className="text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
