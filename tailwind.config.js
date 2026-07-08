/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          accent: '#D4AF37'
        },
        emerald: {
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          100: '#171717',
          200: '#262626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'aurora': 'linear-gradient(120deg, rgba(2,44,34,1) 0%, rgba(6,78,59,1) 40%, rgba(10,10,10,1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
