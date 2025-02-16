/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(100px)', filter: 'blur(33px)' },
          '100%': { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
        },
        runningTime: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        shine: 'shine 3s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'running-time': 'runningTime 7s linear forwards',
      },
    },
  },
  plugins: [],
}