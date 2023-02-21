/** @type {import('tailwindcss').Config} */
module.exports = {
  // below is the only line added to the base generated tailwind code
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2x1': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
