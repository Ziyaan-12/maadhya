# MARADHYA — Our Romantic Love Story Website

A luxury, romantic pair-programmed website crafted with devotion for your girlfriend.

## ✨ Features & Architecture

### 1. The Regal Landing Page ("MARADHYA")
- **Palette**: Deep maroon velvet gradient with luxury gold foil typography (`Cinzel Decorative`, `Playfair Display`).
- **Story Subtitle**: "Two souls, two names woven into one eternity" — highlighting the blend of your names.
- **Atmosphere**: Canvas-rendered drifting crimson rose petals and glowing golden dust particles.
- **Audio Engine**: Integrated Web Audio ambient romantic chime/lullaby synthesizer with volume visualizer pill, plus full music player controls.

### 2. The Interactive 3D Envelope & Handwritten Cursive Letter
- **Wax Seal**: Tap the royal crimson wax seal with golden crest — it triggers an authentic seal-crack audio chime!
- **Deckle-Edged Antique Parchment**: The envelope folds open in 3D, and the vintage textured letter slides upwards.
- **Typography**: Flowing cursive calligraphy (`Great Vibes`) with greeting, paragraphs, and seal stamp.
- **Customizable**: Built-in "Copy Text", "Full Screen / Zoom", and "Fold Back" controls.

### 3. Aesthetic Polaroid Scrapbook & Working Retro Vinyl Music Player
- Directly matches your reference images (`polaroids-music-ref.jpg` & `polaroids-stickers-ref.png`):
  - Dark kiss-mark grunge maroon aesthetic.
  - Dark crimson/maroon-bordered polaroids with authentic tilt and drop shadows.
  - Realistic stickers: Red silk bow, cherries, blooming red hibiscus, red butterfly, golden stars, and fingerprint heart.
  - **Working Retro Music Player**:
    - Spinning vinyl record with center spindle and tonearm.
    - Play / Pause, Next, Prev, Shuffle, Repeat.
    - Live animated scrubber bar and timer countdown.
    - Preloaded romantic playlist.
  - **Polaroid light-box zoom** + **Instant Camera photo uploader** to easily swap photos directly from the browser!

### 4. "My Favourite Person In The Universe" Spotlight
- **Baroque Golden Frame**: Ornate royal frame with soft pulsing golden backlight for her photo.
- **Poetic Devotion**: A quote explaining why she is your favorite person.
- **Interactive Love Cards**: 4 reasons celebrating her radiant smile, soft soul, laughter, and safe haven.
- **Photo Uploader**: Camera button on her portrait to drop in her picture immediately.

### 5. "Our Bucket List Before 2027"
- **Live Countdown Timer**: Real-time ticker counting down days, hours, minutes, and seconds to January 1, 2027.
- **Pre-filled Bucket List**:
  - Kissing at the very first restaurant where we first met 💋
  - Going to our dream place together 🏰
  - Eating the food we both obsess over until our bellies hurt 🍜
  - Travelling to a spontaneous new city ✈️
  - Midnight rooftop stargazing picnic 🌌
  - Photobooth strip kiss memories 📸
- **Interactive Checklist**: Clicking items checks them off, updates the progress bar, and bursts golden confetti.
- **Local Persistence**: Saves progress to `localStorage` automatically.
- **Add New Dream**: An inline form to add custom goals anytime!

### 6. Interactive Proposal Section ("Will You Go Out On A Date With Me?")
- **The Runaway 'No' Button**: When hovered or touched on mobile, it smoothly jumps to a random spot on the screen with playful messages ("Error 404: 'No' not found!", "You know you want to say yes! 💕", "You cannot escape my love!").
- **The Golden 'YES' Button**: Grows larger and pulses with warmth.
- **Celebration**:
  - Triggers a full-screen colorful confetti and heart explosion.
  - Opens a celebration card with a personalized VIP Date Night Voucher (redeemable for favorite food, dessert, hugs, and kisses).

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS gradients, gold foil, and 3D transforms
- **Animations**: Canvas particle physics, keyframe animations, Canvas Confetti
- **Audio**: Web Audio API ambient acoustic synthesizer + Retro vinyl controller
- **Icons**: Lucide React
- **Fonts**: Cinzel Decorative, Great Vibes, Playfair Display, Caveat, Montserrat

## 🚀 Running the App
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser at:
   ```
   http://localhost:5173
   ```
3. To build for production deployment (e.g. Vercel, Netlify, GitHub Pages):
   ```bash
   npm run build
   ```
