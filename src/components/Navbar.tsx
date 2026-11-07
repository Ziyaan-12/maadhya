import React, { useState } from 'react';
import { Heart, Volume2, VolumeX, Menu, X } from 'lucide-react';

interface NavbarProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isPlaying, onToggleMusic }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'The Letter', href: '#letter' },
    { name: 'Scrapbook', href: '#polaroids' },
    { name: 'My Favourite', href: '#favourite' },
    { name: 'Before 2027', href: '#bucketlist' },
    { name: 'A Question', href: '#proposal' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#120104]/90 backdrop-blur-md border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Monogram */}
          <a
            href="#hero"
            className="group flex items-center space-x-2.5 text-decoration-none"
          >
            <div className="w-7 h-7 rounded-full border border-amber-500/30 flex items-center justify-center bg-[#23040b] group-hover:border-amber-400 transition-colors">
              <Heart className="w-3.5 h-3.5 text-amber-300 fill-amber-300/80" />
            </div>
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-amber-100 group-hover:text-amber-300 transition-colors">
              MAADHYA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-cormorant italic text-sm tracking-widest uppercase text-amber-200/70 hover:text-amber-100 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Audio Controller */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onToggleMusic}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full border text-xs tracking-wider transition-all duration-300 ${
                isPlaying
                  ? 'border-amber-400/50 bg-amber-500/10 text-amber-300'
                  : 'border-maroon-800 bg-[#1a0207] text-amber-200/50 hover:border-amber-500/30 hover:text-amber-200'
              }`}
              title={isPlaying ? 'Mute melody' : 'Play melody'}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  <span className="font-cormorant italic text-xs hidden sm:inline">Melody Playing</span>
                  <span className="flex items-end space-x-0.5 h-2.5">
                    <span className="w-0.5 bg-amber-400 animate-pulse h-2"></span>
                    <span className="w-0.5 bg-amber-400 animate-pulse h-3 delay-75"></span>
                    <span className="w-0.5 bg-amber-400 animate-pulse h-1.5 delay-150"></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="font-cormorant italic text-xs hidden sm:inline">Play Melody</span>
                </>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-amber-200/80 hover:text-amber-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-amber-500/15 bg-[#120104]/98 backdrop-blur-xl px-5 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-xs tracking-widest uppercase font-cormorant text-amber-100 hover:text-amber-300 py-2.5 border-b border-maroon-900/60"
            >
              <span>{link.name}</span>
              <span className="text-amber-400/40">✦</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
