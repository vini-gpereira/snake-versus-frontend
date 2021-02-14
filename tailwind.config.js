module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#7e846b',
      secondary: '#0f0f0f',
    },
    fontFamily: {
      default: ["'Press Start 2P'", 'cursive'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
