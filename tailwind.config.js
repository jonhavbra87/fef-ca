/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navigation: '#423736',
        cta: '#987185',
        background: '#F4E2D1',
        primary: '#423736',
        secondary: '#987185',
        card: '#E9D5B7',
        hover: '#D6AA9F',
      },
    },
  },
  plugins: [],
};
