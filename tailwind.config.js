/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./App.tsx', './src/**/*.tsx'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'blue-light': '#8FB2F5',
        gray: {
          900: '#13131A',
          800: '#16161F',
          700: '#1C1C27',
          600: '#1E1E29',
          500: '#3B3B54',
          400: '#7F7F98',
          300: '#ABABC4',
          200: '#BFBFD4',
          100: '#FAFAFA',
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
