/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: (() => {
        const widths = {
          15: '2.50rem',
          20: '4.75rem',
        };
        for (let i = 1; i <= 100; i++) {
          widths[`${i}p`] = `${i}%`;
        }
        return widths;
      })(),
      height: (() => {
        const heights = {
          15: '2.50rem',
          20: '4.75rem', // Example for 15 units (60px)
        };
        for (let i = 1; i <= 100; i++) {
            heights[`${i}p`] = `${i}%`;
        }
        return heights;
      })(),
      colors: {
        primary: '#8ce99a', // Custom color
        secondary: '#f2f2f2',
        customGreen: '',
      },
    },
  },
  plugins: [],
}

