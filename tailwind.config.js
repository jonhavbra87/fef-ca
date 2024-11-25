/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPurple: '#150016',
        deepPurple: '#29104A',
        plum: '#522C5D',
        rosewood: '#845162',
        blush: '#E3B6B1',
        cream: '#FFE3D8',
      },
    },
  },
  plugins: [],
};
