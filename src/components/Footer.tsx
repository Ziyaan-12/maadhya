import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0d0103] border-t border-amber-500/15 py-14 px-4 sm:px-6 text-center text-amber-200/60 overflow-hidden film-grain">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        
        {/* Monogram */}
        <div className="flex items-center space-x-2.5">
          <Heart className="w-3.5 h-3.5 text-rose-500/70 fill-rose-500/70" />
          <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.25em] text-amber-100">
            MAADHYA
          </span>
          <Heart className="w-3.5 h-3.5 text-rose-500/70 fill-rose-500/70" />
        </div>

        <p className="font-cormorant italic text-base sm:text-lg text-amber-200/80 max-w-md">
          &ldquo;Two names, two hearts, and a thousand tomorrows waiting to be written.&rdquo;
        </p>

        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-amber-300/40">
          Handcrafted with devotion • Always & Forever
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="mt-4 p-2.5 rounded-full bg-[#1e0308] border border-amber-500/20 text-amber-300/80 hover:text-amber-100 hover:border-amber-400 hover:scale-105 transition-all shadow-md group"
          title="Back to the top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
