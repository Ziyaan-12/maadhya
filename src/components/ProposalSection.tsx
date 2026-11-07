import React, { useState } from 'react';
import { Heart, Sparkles, X, Gift, Utensils, Compass, Clock, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

export const ProposalSection: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState<{ x: number; y: number } | null>(null);
  const [noCount, setNoCount] = useState(0);
  const [isYesModalOpen, setIsYesModalOpen] = useState(false);

  const playfulNoTexts = [
    'No 🥺',
    'Wait, really? 😳',
    'Think again! 😉',
    'Error 404: "No" not found! ❌',
    'Nice reflex, but I’m faster! 🏃💨',
    'You know you love me! 💕',
    'That button is purely decorative! ✨',
    'You cannot escape my love! 🔒',
    'Just click Yes already! 🥰',
  ];

  const handleNoInteraction = () => {
    const maxOffset = 140;
    const randomX = (Math.random() - 0.5) * maxOffset * 2.4;
    const randomY = (Math.random() - 0.5) * maxOffset * 1.8;

    setNoButtonPosition({ x: randomX, y: randomY });
    setNoCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    romanticAudio.playCelebrationChime();
    setIsYesModalOpen(true);

    const count = 220;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#d8b168', '#ff4d6d', '#ffffff', '#c9184a', '#fdf0d5'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const yesButtonScale = Math.min(1 + noCount * 0.08, 1.4);

  return (
    <section id="proposal" className="relative py-32 px-4 sm:px-6 maroon-velvet-gradient overflow-hidden film-grain">
      
      {/* Background radial warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20 text-center">
        
        {/* Ribbon Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-500/25 bg-maroon-950/80 mb-5">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          <span className="text-[11px] font-cormorant italic tracking-widest uppercase text-amber-200">
            One Urgent Question
          </span>
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
        </div>

        {/* The Big Question */}
        <h2 className="font-cormorant text-4xl sm:text-7xl font-light text-amber-100 mb-4 leading-tight">
          Will You Go Out On A Date With Me?
        </h2>

        <p className="font-display italic text-amber-200/70 text-base sm:text-xl max-w-lg mx-auto mb-14">
          &ldquo;I have a magical evening planned, a thousand smiles to steal, and all the time in the world for you.&rdquo;
        </p>

        {/* Interactive Buttons Container */}
        <div className="relative min-h-[170px] flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
          
          {/* YES Button */}
          <button
            onClick={handleYesClick}
            style={{ transform: `scale(${yesButtonScale})` }}
            className="group relative z-10 px-9 sm:px-12 py-4 rounded-full bg-gradient-to-r from-[#d8b168] via-[#e6c887] to-[#d8b168] text-maroon-950 font-cormorant text-lg sm:text-xl font-bold tracking-widest uppercase shadow-[0_10px_35px_rgba(216,177,104,0.4)] hover:brightness-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
          >
            <span>YES, ABSOLUTELY! ❤️</span>
            <Sparkles className="w-4 h-4 text-maroon-950 fill-maroon-950" />
          </button>

          {/* RUNAWAY NO Button */}
          <button
            onMouseEnter={handleNoInteraction}
            onTouchStart={handleNoInteraction}
            onClick={handleNoInteraction}
            style={
              noButtonPosition
                ? {
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                    transition: 'all 0.22s ease-out',
                  }
                : undefined
            }
            className="px-6 sm:px-8 py-3.5 rounded-full border border-maroon-700 bg-maroon-950/80 text-amber-200/60 font-sans text-xs sm:text-sm tracking-wider uppercase hover:border-amber-500/30 select-none cursor-pointer transition-all"
          >
            {playfulNoTexts[noCount % playfulNoTexts.length]}
          </button>

        </div>

        {/* Playful hint text */}
        {noCount > 0 && (
          <p className="mt-8 text-xs font-sans text-amber-300/70 animate-pulse">
            Psst... this website was programmed with 0% chance of you saying no 😉
          </p>
        )}

      </div>

      {/* Date Night Confirmation Celebration Modal */}
      {isYesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-gradient-to-b from-[#2e050e] via-[#1d0309] to-[#120104] p-6 sm:p-9 rounded-3xl border border-amber-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.95)] text-center">
            
            {/* Close modal */}
            <button
              onClick={() => setIsYesModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-amber-300/60 hover:text-amber-100 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Beating Heart Icon */}
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#8a1327] to-[#d8b168] mx-auto flex items-center justify-center shadow-lg mb-5 animate-bounce">
              <Heart className="w-9 h-9 text-white fill-white" />
            </div>

            <span className="font-cormorant text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold block mb-1">
              Officially Confirmed & Sealed
            </span>
            <h3 className="font-cormorant text-3xl sm:text-5xl font-light text-amber-100 mb-3">
              It&rsquo;s A Date, Beautiful! 🥂
            </h3>

            <p className="font-display italic text-sm sm:text-base text-amber-200/80 leading-relaxed mb-6">
              You just made me the happiest person in the universe. Dress in whatever makes you feel like the goddess you are — I have the rest taken care of.
            </p>

            {/* Antique VIP Date Pass Voucher */}
            <div className="p-5 rounded-2xl bg-[#140104] border border-dashed border-amber-500/40 text-left space-y-3 shadow-inner">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
                <div className="flex items-center space-x-1.5">
                  <Gift className="w-4 h-4 text-amber-400" />
                  <span className="font-cormorant text-sm font-bold text-amber-200 tracking-wider">
                    VIP DATE PASS • MAADHYA
                  </span>
                </div>
                <span className="text-[10px] font-sans text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  Confirmed
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs font-sans text-amber-200/75 pt-1">
                <div className="flex items-center space-x-2">
                  <Utensils className="w-3.5 h-3.5 text-amber-400" />
                  <span>Whatever You Crave</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>The Whole Evening</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>Infinite Hugs & Kisses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Our Secret Spot</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsYesModalOpen(false)}
              className="mt-6 w-full py-3.5 rounded-full bg-gradient-to-r from-[#d8b168] to-[#e6c887] text-maroon-950 font-cormorant font-bold text-xs uppercase tracking-widest hover:brightness-105 transition-all shadow-md"
            >
              Seal It With A Kiss 💋
            </button>

          </div>
        </div>
      )}

    </section>
  );
};
