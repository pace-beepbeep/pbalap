/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A3F35', // Coklat Tua
        secondary: '#D1C4E9', // Lavender Lembut
        backgroundLight: '#F7F7F9',
        backgroundDark: '#EAEBF0',
        cardBg: '#FFFFFF',
        textColor: '#333333',
        textLight: '#888',
        
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        cardShadow: '0 4px 15px rgba(0, 0, 0, 0.07)',
      },
      // TAMBAHKAN BAGIAN INI
      keyframes: {
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}