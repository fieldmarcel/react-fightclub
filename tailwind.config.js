/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke': '1px #ffff', // black stroke
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '1px #000', // 2px stroke width
        },
        '.text-stroke-yellow': {
          '-webkit-text-stroke-color': '#fbbf24',
          // '-webkit-text-stroke-color': '#7e1212',

        },
        '.text-transparent': {
          color: 'transparent', // Makes the text itself transparent
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};