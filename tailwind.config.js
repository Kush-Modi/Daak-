/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a18072', // Primary earthy
          600: '#8a6a5c',
          700: '#715448',
          800: '#5a4238', // Deep brown
          900: '#43302b',
        },
        cream: '#f5f5f0',
        'warm-gray': '#e7e5e4',
        mustard: '#e3b341', // Muted mustard for Daak
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Good for headers
      },
    },
  },
  plugins: [],
}
