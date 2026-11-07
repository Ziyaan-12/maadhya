import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Sparkles, Heart, ZoomIn, X, Camera, RotateCw } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface PolaroidItem {
  id: number;
  image: string;
  caption: string;
  secretNote: string;
  date: string;
  rotation: string;
}

interface PolaroidSectionProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
}

export const PolaroidSection: React.FC<PolaroidSectionProps> = ({ isPlaying, onToggleMusic }) => {
  const tracks = [
    { title: 'Lover — Acoustic Strings', artist: 'For Maadhya', duration: 241 },
    { title: 'Golden Hour (Midnight Reverie)', artist: 'Acoustic Piano', duration: 210 },
    { title: 'Until I Found You', artist: 'Vintage Vinyl Edition', duration: 188 },
    { title: 'Those Eyes', artist: 'Gentle Arpeggio', duration: 224 },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(51);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(true);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [selectedPhoto, setSelectedPhoto] = useState<PolaroidItem | null>(null);

  // Photos featuring your real uploaded couple memories with intimate candid notes
  const [photos, setPhotos] = useState<PolaroidItem[]>([
    {
      id: 1,
      image: '/assets/images/couple-1.jpg',
      caption: 'The way you looked at me here ✨',
      secretNote: 'I remember this exact second. You made that adorable face with your glasses on and my heart decided right then that it was never letting you go.',
      date: 'Our Booth Date Moment',
      rotation: '-rotate-2',
    },
    {
      id: 2,
      image: '/assets/images/couple-2.jpg',
      caption: 'Wrapped in my arms 🫂',
      secretNote: 'Having you right here in my arms while we take silly mirror pictures is my absolute definition of home.',
      date: 'Cozy Mirror Hugs',
      rotation: 'rotate-3',
    },
    {
      id: 3,
      image: '/assets/images/couple-3.jpg',
      caption: 'Our goofy peace signs ✌️',
      secretNote: 'Sitting across from you, eating our favorite food, and teasing each other until our cheeks hurt. My favorite kind of evening.',
      date: 'Dinner & Infinite Laughs',
      rotation: '-rotate-3',
    },
    {
      id: 4,
      image: '/assets/images/couple-5.jpg',
      caption: 'Kisses on top of your head 💋',
      secretNote: 'A gentle, quiet reminder that you are protected, cherished, and loved beyond anything words could ever measure.',
      date: 'Soft Whispers & Warmth',
      rotation: 'rotate-2',
    },
    {
      id: 5,
      image: '/assets/images/couple-4.jpg',
      caption: 'Golden hour with my queen 🌅',
      secretNote: 'Sunlight looks gorgeous on you, but honestly, your smile outshines every golden sunset I have ever seen.',
      date: 'Pure Radiant Sunshine',
      rotation: '-rotate-1',
    },
    {
      id: 6,
      image: '/assets/images/couple-6.jpg',
      caption: 'Resting my chin on your shoulder 🫂',
      secretNote: 'Looking into the mirror with you smiling right there in front of me... this is the only view I ever want to see.',
      date: 'Our Warmest Reflection',
      rotation: 'rotate-2',
    },
  ]);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime((prev) => {
          const track = tracks[currentTrackIndex];
          if (prev >= track.duration) {
            if (isRepeat) return 0;
            handleNextTrack();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrackIndex, isRepeat]);

  const handleNextTrack = () => {
    if (isShuffle) {
      const nextIdx = Math.floor(Math.random() * tracks.length);
      setCurrentTrackIndex(nextIdx);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    }
    setCurrentTime(0);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setCurrentTime(0);
  };

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentTrack = tracks[currentTrackIndex];
  const progressPercent = (currentTime / currentTrack.duration) * 100;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotos((prev) =>
        prev.map((item) => (item.id === id ? { ...item, image: url } : item))
      );
    }
  };

  return (
    <section id="polaroids" className="relative py-28 px-4 sm:px-6 bg-[#160205] overflow-hidden film-grain">
      
      {/* Background blend using authentic moodboard textures */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-screen"
        style={{ backgroundImage: `url('/assets/images/polaroids-music-ref.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#140205] via-transparent to-[#140205] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-500/25 bg-maroon-950/70 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-cormorant italic tracking-widest uppercase text-amber-200">
              The Living Moodboard
            </span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl font-light text-amber-100 mb-2 tracking-wide">
            Moments Stolen From Time
          </h2>
          <p className="font-display italic text-amber-200/60 text-sm sm:text-base max-w-md mx-auto">
            &ldquo;Click any photograph to flip it and read the secret memory written on the back.&rdquo;
          </p>
        </div>

        {/* Vintage Turntable & Acoustic Player (Inspired by reference image 2) */}
        <div className="mb-20 max-w-3xl mx-auto bg-gradient-to-br from-[#240308]/90 via-[#1b0206]/95 to-[#120104]/95 p-6 sm:p-7 rounded-2xl border border-amber-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* The Turntable & Grooved Vinyl Disc */}
            <div className="flex items-center space-x-6">
              <div className="relative cursor-pointer select-none" onClick={onToggleMusic}>
                {/* Turntable Platter */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0a0a0a] border-4 border-[#1a1a1a] shadow-2xl flex items-center justify-center p-1.5 relative overflow-hidden">
                  
                  {/* Vinyl Grooves Texture */}
                  <div
                    className={`w-full h-full rounded-full transition-transform ${
                      isPlaying ? 'spin-record' : 'spin-record-paused'
                    }`}
                    style={{
                      backgroundImage:
                        'repeating-radial-gradient(circle at center, #1c1c1c 0, #0d0d0d 2px, #181818 3px)',
                    }}
                  >
                    {/* Vinyl Center Red Label */}
                    <div className="absolute inset-0 m-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#6a0e1e] to-[#991b32] border border-amber-400/50 flex items-center justify-center shadow-inner">
                      <Heart className="w-4 h-4 text-amber-200 fill-amber-200" />
                    </div>
                  </div>
                </div>

                {/* Metallic Tonearm with Needle */}
                <div
                  className={`absolute -top-2 right-1 w-12 h-16 pointer-events-none transition-transform duration-700 origin-top-right ${
                    isPlaying ? 'rotate-12' : '-rotate-12 opacity-50'
                  }`}
                >
                  <div className="w-1.5 h-12 bg-gradient-to-b from-amber-200 to-amber-500 rounded-full mx-auto shadow-md" />
                  <div className="w-3 h-2 bg-amber-600 rounded-sm mx-auto -mt-1" />
                </div>
              </div>

              {/* Track Metadata */}
              <div>
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-rose-500 animate-ping' : 'bg-amber-500/40'}`} />
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-amber-300/80 font-semibold">
                    {isPlaying ? 'Playing on Vinyl' : 'Turntable Idle'}
                  </span>
                </div>
                <h4 className="font-cormorant font-normal text-xl sm:text-2xl text-amber-100 mt-0.5 tracking-wide">
                  {currentTrack.title}
                </h4>
                <p className="font-sans text-xs text-amber-200/50 mt-0.5">{currentTrack.artist}</p>
              </div>
            </div>

            {/* Retro Controls & Timeline */}
            <div className="w-full md:w-80 flex flex-col space-y-3">
              {/* Progress Scrubber */}
              <div className="space-y-1.5">
                <div
                  className="w-full h-1.5 bg-[#140103] rounded-full overflow-hidden cursor-pointer relative border border-amber-500/10"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newPercent = clickX / rect.width;
                    setCurrentTime(Math.floor(newPercent * currentTrack.duration));
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 via-rose-400 to-amber-300 rounded-full transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-sans text-amber-200/50 tracking-wider">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(currentTrack.duration)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center space-x-6 text-amber-200/80 pt-1">
                <button
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`transition-colors ${isShuffle ? 'text-rose-400' : 'text-amber-200/40 hover:text-amber-200'}`}
                  title="Shuffle"
                >
                  <Shuffle className="w-4 h-4" />
                </button>

                <button
                  onClick={handlePrevTrack}
                  className="hover:text-amber-100 hover:scale-110 transition-all"
                  title="Previous"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={onToggleMusic}
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d8b168] to-[#f4d48f] text-maroon-950 flex items-center justify-center shadow-[0_0_20px_rgba(216,177,104,0.4)] hover:scale-105 active:scale-95 transition-all"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-maroon-950" />
                  ) : (
                    <Play className="w-4 h-4 fill-maroon-950 ml-0.5" />
                  )}
                </button>

                <button
                  onClick={handleNextTrack}
                  className="hover:text-amber-100 hover:scale-110 transition-all"
                  title="Next"
                >
                  <SkipForward className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={`transition-colors ${isRepeat ? 'text-rose-400' : 'text-amber-200/40 hover:text-amber-200'}`}
                  title="Repeat"
                >
                  <Repeat className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Polaroid Scrapbook Gallery with Double-Sided Secret Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {photos.map((item) => {
            const isFlipped = flippedCards[item.id] || false;

            return (
              <div
                key={item.id}
                className={`relative group perspective-1200 transition-transform duration-500 hover:z-30 ${item.rotation}`}
              >
                {/* Frosted Washi Tape on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape -rotate-2 z-30 pointer-events-none" />

                {/* Flip Container */}
                <div
                  className="relative w-full h-[380px] sm:h-[400px] transition-transform duration-700 transform-style-3d cursor-pointer"
                  style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                  onClick={() => toggleFlip(item.id)}
                >
                  {/* FRONT SIDE: Crimson Polaroid Frame */}
                  <div
                    className="absolute inset-0 bg-[#35070f] p-3.5 sm:p-4 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.85)] border border-amber-500/20 flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Photo */}
                    <div className="relative aspect-square w-full overflow-hidden bg-black/60 rounded-xs border border-maroon-900/40">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80';
                        }}
                      />

                      {/* Hover action toolbar */}
                      <div
                        className="absolute inset-0 bg-maroon-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setSelectedPhoto(item)}
                          className="p-2.5 rounded-full bg-amber-400 text-maroon-950 hover:scale-110 transition-transform shadow-lg"
                          title="Zoom"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>

                        <label
                          className="p-2.5 rounded-full bg-maroon-900 text-amber-200 border border-amber-400/40 hover:scale-110 cursor-pointer transition-transform shadow-lg"
                          title="Upload your own picture"
                        >
                          <Camera className="w-4 h-4" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handlePhotoUpload(e, item.id)}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Polaroid Chin with Handwritten Caption */}
                    <div className="pt-3 pb-1 text-center">
                      <p className="font-handwriting text-2xl text-amber-100 leading-snug">
                        {item.caption}
                      </p>
                      <div className="flex items-center justify-between mt-1 px-1 text-[10px] font-sans uppercase tracking-widest text-amber-300/40">
                        <span>{item.date}</span>
                        <span className="flex items-center space-x-1 text-amber-300/70">
                          <RotateCw className="w-3 h-3" />
                          <span>Tap to flip</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE: Handwritten Secret Memory on Lined Notebook Paper */}
                  <div
                    className="absolute inset-0 parchment-paper p-6 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.85)] border border-[#bfa268]/40 flex flex-col justify-between text-[#2e130c]"
                    style={{
                      transform: 'rotateY(180deg)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-[#c8aa68]/30 pb-2 mb-4">
                        <span className="font-cormorant italic text-xs text-[#785124]">
                          {item.date} — A Private Note
                        </span>
                        <Heart className="w-3.5 h-3.5 text-[#8a1327] fill-[#8a1327]" />
                      </div>

                      <p className="font-handwriting text-2xl sm:text-3xl text-[#2a1008] leading-relaxed">
                        &ldquo;{item.secretNote}&rdquo;
                      </p>
                    </div>

                    <div className="text-right border-t border-[#c8aa68]/20 pt-2">
                      <span className="font-cursive text-xl text-[#6a101f]">
                        Always thinking of you ❤️
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-[#35070f] p-5 rounded-lg border border-amber-400/40 shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-amber-400 text-maroon-950 font-bold flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-square w-full rounded overflow-hidden bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-cursive text-3xl text-amber-100">
                {selectedPhoto.caption}
              </p>
              <span className="font-sans text-xs tracking-widest uppercase text-amber-300/60 mt-1 block">
                {selectedPhoto.date}
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
