import React, { useState } from 'react';
import { Camera, Sparkles, Pin } from 'lucide-react';

export const FavouritePerson: React.FC = () => {
  const [herPhoto, setHerPhoto] = useState<string>(
    '/assets/images/favourite-person.jpg'
  );

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHerPhoto(URL.createObjectURL(file));
    }
  };

  const tenderNotes = [
    {
      title: 'The Unscripted Laugh',
      text: 'The one that catches in your chest when something is genuinely funny. My favorite sound in any room.',
      rotation: '-rotate-2',
    },
    {
      title: 'Your Quiet Fierceness',
      text: 'How deeply you care, how loyal you are to those you love, and the quiet strength you carry without boasting.',
      rotation: 'rotate-1',
    },
    {
      title: 'Stealing My Sweaters',
      text: 'Walking around with sleeves hanging past your fingers and acting like they were always yours.',
      rotation: 'rotate-2',
    },
    {
      title: 'My Favorite Stillness',
      text: 'Just resting your head on my shoulder in the car while rain hits the windshield. Pure, effortless peace.',
      rotation: '-rotate-1',
    },
  ];

  return (
    <section id="favourite" className="relative py-28 px-4 sm:px-6 bg-[#130205] overflow-hidden film-grain">
      
      {/* Warm golden backlight */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-500/25 bg-maroon-950/70 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-cormorant italic tracking-widest uppercase text-amber-200">
              A Private Tribute
            </span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl font-light text-amber-100 mb-2 tracking-wide">
            My Favourite Person
          </h2>
          <p className="font-display italic text-amber-200/60 text-sm sm:text-base max-w-md mx-auto">
            &ldquo;In a world that never stops moving, you are the one place I want to stay.&rdquo;
          </p>
        </div>

        {/* Two-Column Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-14 items-center">
          
          {/* Left: Portrait in Brushed Antique Gold Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              
              {/* Outer Antique Brass Border */}
              <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#3d0813] via-[#24040a] to-[#160205] border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                
                {/* Antique Corner Filigrees */}
                <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t border-l border-amber-400/60" />
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t border-r border-amber-400/60" />
                <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b border-l border-amber-400/60" />
                <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b border-r border-amber-400/60" />

                {/* Portrait container */}
                <div className="relative w-64 sm:w-80 h-88 sm:h-[420px] rounded-xl overflow-hidden bg-black/80 border border-amber-900/40">
                  <img
                    src={herPhoto}
                    alt="My Favourite Person"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Soft film vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140205]/80 via-transparent to-black/20" />

                  {/* Elegant Monogram Tag */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="font-cormorant italic text-xs tracking-[0.25em] uppercase text-amber-200 bg-maroon-950/90 px-4 py-1.5 rounded-full border border-amber-500/30 shadow-lg">
                      Her — My Entire World
                    </span>
                  </div>

                  {/* Photo Upload Button */}
                  <label
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-maroon-950/80 text-amber-200 border border-amber-500/30 shadow-lg cursor-pointer hover:scale-110 transition-transform backdrop-blur-sm"
                    title="Upload her photo"
                  >
                    <Camera className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoUpload}
                    />
                  </label>
                </div>

              </div>
            </div>

            <p className="mt-4 text-xs font-sans text-amber-300/50 flex items-center space-x-1.5">
              <span>✦</span>
              <span>Tap camera icon to place her photograph here</span>
            </p>
          </div>

          {/* Right: The Real, Poetic Essay & Tactile Pinned Notes */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* The Candid Reflection */}
            <div className="relative p-7 sm:p-9 rounded-2xl bg-[#1e0308]/80 border border-amber-500/20 shadow-2xl backdrop-blur-md">
              <h3 className="font-cormorant text-2xl sm:text-3xl text-amber-100 font-normal leading-relaxed mb-4">
                &ldquo;Why are you my favourite person? Because you make reality feel softer than any dream.&rdquo;
              </h3>

              <div className="space-y-3 font-sans text-xs sm:text-sm text-amber-200/70 font-light leading-relaxed">
                <p>
                  It wasn’t one single thunderclap moment that convinced me. It was the thousand quiet, ordinary seconds that you turned into gold.
                  The effortless way you understand what I’m thinking before I’ve even formed the words. The fierce, tender way you love the people in your life.
                  And that unmistakable sensation of relief every time you walk into the room.
                </p>
                <p>
                  To the rest of the world, you might just be one wonderful person. But to me, you are the conversation I never want to end, and the only hand I ever want to hold.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-amber-500/15 flex items-center justify-between">
                <span className="font-cursive text-2xl text-amber-300">
                  Forever fascinated by you
                </span>
                <span className="font-cormorant text-xs tracking-widest uppercase text-amber-400/60">
                  Maadhya
                </span>
              </div>
            </div>

            {/* Tactile Pinned Sticky Notes (Authentic scrapbook vibe) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tenderNotes.map((item) => (
                <div
                  key={item.title}
                  className={`p-4 rounded-xl bg-[#23040b]/90 border border-amber-500/15 hover:border-amber-400/40 transition-all duration-300 shadow-lg relative ${item.rotation}`}
                >
                  {/* Subtle Pin Icon */}
                  <Pin className="w-3.5 h-3.5 text-amber-400/60 absolute top-2 right-2 rotate-45" />

                  <h4 className="font-cormorant text-lg text-amber-100 font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-amber-200/65 font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
