/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: (() => {
        const widths = {};
        for (let i = 1; i <= 100; i++) {
          widths[`${i}p`] = `${i}%`;
        }
        return widths;
      })(),
      height: (() => {
        const heights = {};
        for (let i = 1; i <= 100; i++) {
          heights[`${i}p`] = `${i}%`;
        }
        return heights;
      })(),
      colors: {
        primary: '#8ce99a', // Custom color
        secondary: '',
        customGreen: '',
      },
    },
  },
  plugins: [],
}

