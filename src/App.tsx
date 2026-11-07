import React, { useState } from 'react';
import { PetalCanvas } from './components/PetalCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LoveLetter } from './components/LoveLetter';
import { PolaroidSection } from './components/PolaroidSection';
import { FavouritePerson } from './components/FavouritePerson';
import { BucketList } from './components/BucketList';
import { ProposalSection } from './components/ProposalSection';
import { Footer } from './components/Footer';
import { romanticAudio } from './utils/audio';

export const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleMusic = () => {
    const nextState = romanticAudio.toggle();
    setIsPlaying(nextState);
  };

  const handleScrollToLetter = () => {
    const el = document.getElementById('letter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#150104] text-amber-50 selection:bg-rose-900/60 selection:text-amber-200">
      {/* Floating Rose Petals & Golden Sparkles */}
      <PetalCanvas />

      {/* Top Glassmorphic Navigation Bar */}
      <Navbar isPlaying={isPlaying} onToggleMusic={handleToggleMusic} />

      {/* Main Content Sections */}
      <main>
        {/* Landing Page */}
        <Hero onExploreClick={handleScrollToLetter} />

        {/* Vintage Wax-Sealed Cursive Love Letter */}
        <LoveLetter />

        {/* Aesthetic Scrapbook Polaroids & Retro Vinyl Music Player */}
        <PolaroidSection isPlaying={isPlaying} onToggleMusic={handleToggleMusic} />

        {/* My Favourite Person Spotlight */}
        <FavouritePerson />

        {/* Before 2027 Bucket List */}
        <BucketList />

        {/* Date Proposal with Runaway No Button */}
        <ProposalSection />
      </main>

      {/* Romantic Footer */}
      <Footer />
    </div>
  );
};

export default App;
