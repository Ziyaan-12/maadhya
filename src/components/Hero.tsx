import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden maroon-velvet-gradient px-4 sm:px-6 pt-24 pb-16 film-grain"
    >
      {/* Subtle deep ambient glow behind title */}
      <div className="absolute w-[360px] sm:w-[650px] h-[360px] sm:h-[650px] rounded-full bg-maroon-700/15 blur-[140px] pointer-events-none -top-20 left-1/2 -translate-x-1/2" />
      <div className="absolute w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full bg-amber-600/10 blur-[130px] pointer-events-none bottom-12 left-1/3" />

      {/* Delicate Architectural Hairline Border */}
      <div className="absolute inset-5 sm:inset-10 border border-amber-500/15 rounded-3xl pointer-events-none">
        {/* Subtle Antique Corner Accents */}
        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-amber-400/40" />
        <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-amber-400/40" />
        <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-amber-400/40" />
        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-amber-400/40" />
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Editorial Subtitle Pill */}
        <div className="inline-flex items-center space-x-3 px-4 py-1 rounded-full border border-amber-500/20 bg-maroon-950/70 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
          <span className="font-cormorant italic text-xs sm:text-sm tracking-[0.25em] text-amber-200 uppercase">
            Volume I • An Intimate Monograph
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
        </div>

        {/* Big Elegant Title: MAADHYA */}
        <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] sm:tracking-[0.22em] uppercase mb-4 gold-text select-none drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          MAADHYA
        </h1>

        {/* Subtle Serif Divider */}
        <div className="flex items-center justify-center space-x-4 my-4 w-48 sm:w-64">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
          <Heart className="w-3.5 h-3.5 text-amber-300 fill-amber-300/80" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        </div>

        {/* Name Blend Explanation & Romance Description */}
        <p className="font-cormorant italic text-xl sm:text-3xl text-amber-100/90 max-w-2xl mt-4 mb-3 leading-relaxed">
          &ldquo;Two names fused into one devotion, built on stolen glances, inside jokes, and quiet promises.&rdquo;
        </p>

        <p className="font-sans text-xs sm:text-sm text-amber-200/60 max-w-lg mb-10 tracking-wider font-light leading-relaxed">
          Crafted solely for the girl who turned ordinary days into my favorite memories. Every photograph, note, and melody here is dedicated to you.
        </p>

        {/* Refined Luxury Button */}
        <button
          onClick={onExploreClick}
          className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-cormorant text-base sm:text-lg tracking-[0.18em] uppercase text-amber-200 border border-amber-400/40 bg-gradient-to-r from-maroon-900/80 to-maroon-950/80 hover:border-amber-300 hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        >
          <span className="relative z-10 flex items-center space-x-3">
            <span>Open The Letter</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* Scroll Indicator */}
        <div
          onClick={onExploreClick}
          className="mt-16 sm:mt-20 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-amber-200/70 mb-2 font-sans font-light">
            Scroll To Read
          </span>
          <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
        </div>

      </div>
    </section>
  );
};
