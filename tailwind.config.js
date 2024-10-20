/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '640px',
        'lg': '1280px',
      },
      colors:{
        beige: '#f7f3e9',
      },
      fontFamily: {
        julius: ['Julius Sans One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

