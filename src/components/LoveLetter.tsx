import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Feather, Maximize2, Minimize2, Check, RotateCcw, Edit3 } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Short, sweet, and deeply authentic letter
  const [letterContent, setLetterContent] = useState({
    date: 'November 7th & Always',
    greeting: 'My Dearest Girl,',
    body1:
      'It was never just one grand moment that made me fall for you — it was the quiet accumulation of all the little ones. The way your eyes light up when you laugh, the warmth of your hand in mine, and how effortlessly you make any ordinary day feel like magic.',
    body2:
      'In a world that is always loud and in a hurry, you are my favorite peace. Thank you for simply being you, and for making my heart feel so completely at home.',
    closing: 'Forever your person, through every tomorrow,',
    signature: 'All my love, always ❤️',
  });

  const handleOpen = () => {
    if (isOpen) return;
    romanticAudio.playWaxSealPop();
    setIsOpen(true);
    setTimeout(() => {
      romanticAudio.playPaperSlide();
    }, 350);
  };

  const handleClose = () => {
    if (!isOpen) return;
    romanticAudio.playPaperSlide();
    setIsEditing(false);
    setIsMaximized(false);
    setIsOpen(false);
    setTimeout(() => {
      romanticAudio.playStampThump();
    }, 700);
  };

  const handleCopy = () => {
    const text = `${letterContent.greeting}\n\n${letterContent.body1}\n\n${letterContent.body2}\n\n${letterContent.closing}\n${letterContent.signature}`;
    navigator.clipboard.writeText(text);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  return (
    <section id="letter" className="relative py-28 px-4 sm:px-6 bg-[#140205] overflow-hidden film-grain">
      
      {/* Candlelight Warmth Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-maroon-700/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-500/25 bg-maroon-950/70 mb-3">
            <Feather className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-cormorant italic tracking-widest uppercase text-amber-200">
              An Intimate Parchment
            </span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl font-light text-amber-100 mb-2 tracking-wide">
            The Wax-Sealed Letter
          </h2>
          <p className="font-display italic text-amber-200/60 text-sm sm:text-base max-w-md mx-auto">
            &ldquo;Tap the crimson seal to unseal the letter tucked inside.&rdquo;
          </p>
        </div>

        {/* Envelope Stage */}
        <div className="flex flex-col items-center justify-center min-h-[580px] sm:min-h-[640px] relative">
          
          <div className="relative w-full max-w-[440px] sm:max-w-[480px] flex items-center justify-center" style={{ perspective: 1200 }}>
            
            {/* THE ENVELOPE BASE (Always physically present) */}
            <div className="relative w-full h-[280px] sm:h-[300px] bg-[#2d050e] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-amber-500/20 overflow-visible mt-32 sm:mt-40">
              
              {/* Dark Interior Pocket Lining */}
              <div className="absolute inset-1.5 bg-gradient-to-b from-[#180206] to-[#24040b] rounded-xl overflow-hidden shadow-inner" />

              {/* THE PARCHMENT LETTER (Smooth Framer Motion Slide-Up) */}
              <motion.div
                initial={{ y: 0, opacity: 0, scale: 0.95 }}
                animate={
                  isOpen
                    ? {
                        y: isMaximized ? 0 : -260,
                        opacity: 1,
                        scale: 1,
                        zIndex: 40,
                      }
                    : {
                        y: 0,
                        opacity: 0,
                        scale: 0.95,
                        zIndex: 10,
                      }
                }
                transition={{
                  duration: 0.75,
                  delay: isOpen ? 0.35 : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`absolute left-3 right-3 sm:left-4 sm:right-4 origin-bottom transition-all ${
                  isMaximized
                    ? '!fixed !inset-4 sm:!inset-12 !top-20 !translate-y-0 !z-50 overflow-y-auto max-w-2xl mx-auto'
                    : ''
                }`}
              >
                {/* Deckle-Edged Antique Parchment Sheet */}
                <div className="parchment-paper deckle-edge rounded-lg p-6 sm:p-8 border border-[#bfa268]/40 shadow-[0_25px_65px_rgba(0,0,0,0.85)] text-[#2b120c] relative">
                  
                  {/* Parchment Toolbar */}
                  <div className="flex items-center justify-between border-b border-[#c8aa68]/30 pb-2.5 mb-5">
                    <div className="flex items-center space-x-1.5 text-xs font-cormorant italic text-[#785124]">
                      <Feather className="w-3.5 h-3.5 text-[#8a5d2c]" />
                      <span>{letterContent.date}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-[11px] font-sans px-2.5 py-0.5 rounded border border-[#8a5d2c]/30 hover:bg-[#8a5d2c]/10 text-[#543310] transition-colors flex items-center space-x-1"
                        title="Edit text"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>{isEditing ? 'Done' : 'Edit'}</span>
                      </button>

                      <button
                        onClick={handleCopy}
                        className="text-[11px] font-sans px-2.5 py-0.5 rounded border border-[#8a5d2c]/30 hover:bg-[#8a5d2c]/10 text-[#543310] transition-colors flex items-center space-x-1"
                        title="Copy text"
                      >
                        {copiedNotice ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-700" />
                            <span className="text-emerald-800">Copied</span>
                          </>
                        ) : (
                          <span>Copy</span>
                        )}
                      </button>

                      <button
                        onClick={() => setIsMaximized(!isMaximized)}
                        className="p-1 rounded text-[#543310] hover:bg-[#8a5d2c]/10 transition-colors"
                        title={isMaximized ? 'Minimize' : 'Maximize'}
                      >
                        {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={handleClose}
                        className="text-[11px] font-sans px-2.5 py-0.5 rounded bg-[#520d18] text-amber-100 hover:bg-[#6c1221] transition-colors flex items-center space-x-1 ml-1"
                        title="Fold back into envelope"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Fold</span>
                      </button>
                    </div>
                  </div>

                  {/* Salutation */}
                  {isEditing ? (
                    <input
                      type="text"
                      value={letterContent.greeting}
                      onChange={(e) => setLetterContent({ ...letterContent, greeting: e.target.value })}
                      className="font-cursive text-3xl text-[#520d18] w-full bg-transparent border-b border-[#bfa268]/40 outline-none mb-3"
                    />
                  ) : (
                    <h3 className="font-cursive text-3xl sm:text-4xl text-[#520d18] mb-4 leading-tight">
                      {letterContent.greeting}
                    </h3>
                  )}

                  {/* Letter Body (Short, Sweet, Poetic) */}
                  {isEditing ? (
                    <div className="space-y-3">
                      <textarea
                        value={letterContent.body1}
                        onChange={(e) => setLetterContent({ ...letterContent, body1: e.target.value })}
                        rows={3}
                        className="w-full font-handwriting text-xl text-[#2a110a] bg-transparent border border-[#bfa268]/30 rounded p-2 outline-none"
                      />
                      <textarea
                        value={letterContent.body2}
                        onChange={(e) => setLetterContent({ ...letterContent, body2: e.target.value })}
                        rows={3}
                        className="w-full font-handwriting text-xl text-[#2a110a] bg-transparent border border-[#bfa268]/30 rounded p-2 outline-none"
                      />
                    </div>
                  ) : (
                    <div className="space-y-3.5 font-cursive text-2xl sm:text-3xl text-[#2b120c] leading-relaxed tracking-wide">
                      <p>{letterContent.body1}</p>
                      <p>{letterContent.body2}</p>
                    </div>
                  )}

                  {/* Sign-Off & Wax Stamp Impression */}
                  <div className="mt-6 pt-4 border-t border-[#c8aa68]/30 flex items-end justify-between">
                    <div>
                      <p className="font-cursive text-xl sm:text-2xl text-[#520d18]">
                        {letterContent.closing}
                      </p>
                      <p className="font-cursive text-2xl sm:text-3xl text-[#3a0610] font-bold mt-0.5">
                        {letterContent.signature}
                      </p>
                    </div>

                    {/* Wax Stamp Seal */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7a1022] to-[#420812] shadow-inner border border-[#9b2034] flex items-center justify-center rotate-12">
                      <Heart className="w-4 h-4 text-[#d8b168] fill-[#d8b168]" />
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* ENVELOPE FRONT FOLDS (Sides & Bottom Triangle) */}
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-2xl">
                {/* Left Flap */}
                <div className="absolute top-0 bottom-0 left-0 w-0 h-0 border-t-[140px] sm:border-t-[150px] border-t-transparent border-b-[140px] sm:border-b-[150px] border-b-transparent border-l-[210px] sm:border-l-[240px] border-l-[#320610]/95" />
                
                {/* Right Flap */}
                <div className="absolute top-0 bottom-0 right-0 w-0 h-0 border-t-[140px] sm:border-t-[150px] border-t-transparent border-b-[140px] sm:border-b-[150px] border-b-transparent border-r-[210px] sm:border-r-[240px] border-r-[#2b050e]/95" />
                
                {/* Bottom Flap */}
                <div className="absolute bottom-0 left-0 right-0 w-0 h-0 border-l-[220px] sm:border-l-[240px] border-l-transparent border-r-[220px] sm:border-r-[240px] border-r-transparent border-b-[160px] sm:border-b-[175px] border-b-[#22040a]" />

                {/* Subtle gold line along bottom seam */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
              </div>

              {/* ENVELOPE TOP FLAP (Framer Motion 3D Rotation) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{
                  duration: 0.65,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                }}
                className={`absolute top-0 left-0 right-0 h-32 sm:h-36 [clip-path:polygon(0_0,100%_0,50%_100%)] bg-gradient-to-b from-[#4a0816] via-[#3a0611] to-[#2c050d] shadow-lg border-t border-amber-500/30 cursor-pointer ${
                  isOpen ? 'pointer-events-none z-0' : 'z-35'
                }`}
                onClick={!isOpen ? handleOpen : undefined}
              >
                {/* Inner flap lining */}
                <div className="w-full h-full bg-[#1b0308]/60" />
              </motion.div>

              {/* THE WAX SEAL (Smooth fade & fracture on click) */}
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    key="wax-seal"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2, filter: 'blur(4px)' }}
                    transition={{ duration: 0.25 }}
                    onClick={handleOpen}
                    className="absolute top-28 sm:top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer group flex flex-col items-center"
                  >
                    {/* Wax Seal Disc */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#8a1327] via-[#5c0b1a] to-[#36050e] shadow-[0_8px_25px_rgba(0,0,0,0.85),inset_0_2px_4px_rgba(255,255,255,0.25)] border border-amber-400/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 active:scale-95">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-dashed border-amber-300/40 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-amber-200 fill-amber-200/90 animate-pulse" />
                      </div>
                    </div>

                    {/* Hint Tag */}
                    <span className="mt-3 font-cormorant text-xs tracking-[0.2em] uppercase text-amber-200/90 font-medium px-3.5 py-1 bg-maroon-950/90 rounded-full border border-amber-500/30 shadow-md group-hover:border-amber-400 transition-colors">
                      Break Seal & Read
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Envelope Recipient Calligraphy */}
              {!isOpen && (
                <div className="absolute bottom-5 left-6 z-35 pointer-events-none">
                  <span className="font-cursive text-2xl text-amber-200/70 block">
                    For Maadhya,
                  </span>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-amber-300/40">
                    Confidential & Devoted
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
