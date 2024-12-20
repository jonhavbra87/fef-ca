/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cta: '#D72638',
        cta2: '#28a745',
        background: '#F4E2D1',
        primary: '#1A202C',
        secondary: '#FFC857',
        base: '#F7F7F7',
        darkGreen: '#065F46',
        neutral: '#4A4A4A',
        neutralSecondary: '#E2E8F0',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-20px)', opacity: '0' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
