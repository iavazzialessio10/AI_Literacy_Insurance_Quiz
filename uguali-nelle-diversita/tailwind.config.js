/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette derivata dal logo: rosso del contorno + toni caldi delle 4 mani.
        brand: {
          red: '#E03127', // rosso del logo (decorativo, bordi, accenti)
          redDeep: '#B5251C', // rosso interattivo: bianco AA su questo sfondo
          redDeeper: '#97160F', // hover/pressed
          cream: '#FFF8F1', // sfondo caldo
          ink: '#2A211C', // testo principale (contrasto alto)
          inkSoft: '#5B4F47', // testo secondario
          peach: '#F3D2B3', // mano chiara
          tan: '#E9B44C', // mano dorata
          brown: '#7A4A24', // mano marrone
          night: '#1C1C1C', // mano scura
        },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Mulish', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(42, 33, 28, 0.18)',
        card: '0 4px 20px -8px rgba(42, 33, 28, 0.16)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
