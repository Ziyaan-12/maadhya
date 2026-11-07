import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Heart, Plane, Utensils, MapPin, Check, Stamp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

interface BucketItem {
  id: string;
  title: string;
  description: string;
  category: 'restaurant' | 'travel' | 'food' | 'adventure' | 'cuddle';
  completed: boolean;
}

export const BucketList: React.FC = () => {
  // Countdown to 2027
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2027-01-01T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const defaultItems: BucketItem[] = [
    {
      id: 'kiss-restaurant',
      title: 'Kiss at the first restaurant we ever met',
      description: 'Sit at our original table, order what we had on that day, and kiss right as the dessert arrives.',
      category: 'restaurant',
      completed: false,
    },
    {
      id: 'dream-destination',
      title: 'Our dream destination trip',
      description: 'Pack our bags and watch the sunset from the exact city we keep talking about late at night.',
      category: 'travel',
      completed: false,
    },
    {
      id: 'favorite-food',
      title: 'Eat our favorite food till we cannot move',
      description: 'Order everything we crave, feed each other bites, and laugh uncontrollably with sauce on our cheeks.',
      category: 'food',
      completed: false,
    },
    {
      id: 'spontaneous-city',
      title: 'Travel somewhere new with zero itinerary',
      description: 'Take a train or flight, wander down cobblestone streets, and find hidden vintage cafes hand-in-hand.',
      category: 'adventure',
      completed: false,
    },
    {
      id: 'midnight-stargazing',
      title: 'Midnight rooftop stargazing',
      description: 'One big cozy blanket, warm mugs of cocoa, resting your head on my chest while counting shooting stars.',
      category: 'cuddle',
      completed: false,
    },
    {
      id: 'photobooth-kisses',
      title: 'Photobooth strip kiss marathon',
      description: 'Take 4 silly and romantic strip photos to keep folded inside our phone cases forever.',
      category: 'cuddle',
      completed: false,
    },
  ];

  const [items, setItems] = useState<BucketItem[]>(() => {
    const saved = localStorage.getItem('maadhya_bucket_2027');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultItems;
      }
    }
    return defaultItems;
  });

  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('maadhya_bucket_2027', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextState = !item.completed;
          if (nextState) {
            romanticAudio.playStampThump();
            confetti({
              particleCount: 45,
              spread: 60,
              origin: { y: 0.75 },
              colors: ['#d8b168', '#c9184a', '#fdf0d5'],
            });
          }
          return { ...item, completed: nextState };
        }
        return item;
      })
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: BucketItem = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      description: newDesc.trim() || 'A memory we will live together before 2027 begins.',
      category: 'adventure',
      completed: false,
    };

    setItems((prev) => [...prev, newItem]);
    setNewTitle('');
    setNewDesc('');
    setShowAddForm(false);
  };

  const completedCount = items.filter((i) => i.completed).length;

  const getCategoryBadge = (category: BucketItem['category']) => {
    switch (category) {
      case 'restaurant':
        return { label: 'Our Beginnings', icon: <MapPin className="w-3.5 h-3.5 text-rose-400" /> };
      case 'travel':
        return { label: 'Journey', icon: <Plane className="w-3.5 h-3.5 text-amber-300" /> };
      case 'food':
        return { label: 'Comfort Food', icon: <Utensils className="w-3.5 h-3.5 text-amber-300" /> };
      default:
        return { label: 'Intimate', icon: <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" /> };
    }
  };

  return (
    <section id="bucketlist" className="relative py-28 px-4 sm:px-6 bg-[#150205] overflow-hidden film-grain">
      
      {/* Background warmth */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-maroon-700/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-500/25 bg-maroon-950/70 mb-3">
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-cormorant italic tracking-widest uppercase text-amber-200">
              The 2027 Horizon
            </span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl font-light text-amber-100 mb-2 tracking-wide">
            Our Shared Bucket List
          </h2>
          <p className="font-display italic text-amber-200/60 text-sm sm:text-base max-w-md mx-auto">
            &ldquo;The adventures we will live, the meals we will share, and the promises sealed before 2027 starts.&rdquo;
          </p>
        </div>

        {/* Vintage Countdown Ticket to 2027 */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#200308]/90 via-[#2d050d]/90 to-[#200308]/90 border border-amber-500/25 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-5">
            <span className="font-cormorant italic text-sm tracking-[0.25em] text-amber-200 uppercase">
              Time Remaining Until 2027 Begins
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="bg-[#120104]/80 border border-amber-500/20 rounded-xl p-4 text-center shadow-inner"
              >
                <div className="font-cormorant text-4xl sm:text-5xl font-light gold-text">
                  {unit.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-amber-200/50 mt-1 font-sans">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex justify-between text-xs font-sans text-amber-200/70 mb-2">
              <span>{completedCount} of {items.length} Memories Sealed</span>
              <span className="font-semibold text-amber-300">
                {Math.round((completedCount / items.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#120104] rounded-full overflow-hidden border border-amber-500/10">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-rose-500 rounded-full transition-all duration-700"
                style={{ width: `${(completedCount / items.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* The List of Dreams (Boarding Pass / Travel Note Style) */}
        <div className="space-y-4">
          {items.map((item) => {
            const badge = getCategoryBadge(item.category);

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`group cursor-pointer p-5 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-start sm:items-center justify-between gap-4 ${
                  item.completed
                    ? 'bg-[#29050d]/80 border-amber-500/40 shadow-[0_4px_20px_rgba(216,177,104,0.15)]'
                    : 'bg-[#1b0206]/70 border-amber-900/30 hover:border-amber-500/30 hover:bg-[#220308]/80'
                }`}
              >
                <div className="flex items-start sm:items-center space-x-4">
                  {/* Ink Stamp Toggle */}
                  <div
                    className={`mt-1 sm:mt-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                      item.completed
                        ? 'bg-[#7a1022] border-amber-400 text-amber-100 shadow-md'
                        : 'border-amber-500/30 bg-[#120104] group-hover:border-amber-400/60'
                    }`}
                  >
                    {item.completed ? (
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Heart className="w-3.5 h-3.5 text-amber-300/30 group-hover:text-amber-300/70" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-[#120104] border border-amber-500/20 text-[10px] uppercase font-sans tracking-wider text-amber-200/70">
                        {badge.icon}
                        <span>{badge.label}</span>
                      </span>
                      <h4
                        className={`font-cormorant text-xl sm:text-2xl transition-colors ${
                          item.completed
                            ? 'text-amber-200 line-through opacity-75'
                            : 'text-amber-100 group-hover:text-amber-200'
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-amber-200/55 mt-1 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Ink Seal Stamp Mark */}
                {item.completed ? (
                  <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full border border-rose-500/40 bg-rose-950/60 text-rose-300 text-[11px] font-cormorant tracking-widest uppercase rotate-3">
                    <Stamp className="w-3.5 h-3.5" />
                    <span>Sealed With Love</span>
                  </div>
                ) : (
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-amber-300/30 font-sans group-hover:text-amber-300/60">
                    Tap to seal
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Add Custom Dream */}
        <div className="mt-10 text-center">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-amber-500/30 bg-maroon-950/70 text-amber-200 hover:text-white hover:border-amber-400 transition-all text-xs uppercase tracking-widest font-sans"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Our Own Dream To The List</span>
            </button>
          ) : (
            <form
              onSubmit={handleAddItem}
              className="max-w-md mx-auto p-6 rounded-2xl bg-[#200308] border border-amber-500/30 shadow-2xl space-y-3 text-left"
            >
              <h4 className="font-cormorant text-lg text-amber-100 font-normal">
                What do you want us to do before 2027?
              </h4>
              <input
                type="text"
                placeholder="Title of our dream..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-[#120104] border border-amber-500/20 text-amber-100 placeholder-amber-200/30 text-xs focus:outline-none focus:border-amber-400"
              />
              <input
                type="text"
                placeholder="A tender note about it..."
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#120104] border border-amber-500/20 text-amber-100 placeholder-amber-200/30 text-xs focus:outline-none focus:border-amber-400"
              />
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-1.5 text-xs text-amber-200/60 hover:text-amber-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-amber-400 text-maroon-950 font-cormorant font-bold text-xs uppercase tracking-wider hover:bg-amber-300"
                >
                  Add Dream
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
