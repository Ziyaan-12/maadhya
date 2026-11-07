/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#150104',
          900: '#26040a',
          800: '#3d0711',
          700: '#580b1a',
          600: '#751024',
          500: '#941730',
          400: '#b8233f',
        },
        gold: {
          100: '#fff9e6',
          200: '#fef0bf',
          300: '#fde48d',
          400: '#fad355',
          500: '#f4bc20',
          600: '#d49b11',
          700: '#a77209',
          800: '#7d5209',
        },
        parchment: {
          50: '#fbf8ee',
          100: '#f5edd5',
          200: '#ede0b8',
          300: '#dfca93',
          400: '#cdb16e',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        cursive: ['"Alex Brush"', '"Great Vibes"', '"Dancing Script"', 'cursive'],
        handwriting: ['"Caveat"', '"Parisienne"', 'cursive'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(244, 188, 32, 0.35)',
        'gold-lg': '0 0 45px rgba(244, 188, 32, 0.5)',
        'maroon-glow': '0 0 35px rgba(117, 16, 36, 0.6)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.9', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.25)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
