const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
      'xl': '1440px'
    },
    colors: {
      primary: '#26c0ab',
      white: '#ffffff',
      cyan: {
        1: '#00494d',
        2: '#5e7a7d',
        3: '#7f9c9f',
        4: '#c5e4e7',
        5: '#f4fafa'
      }
    },
    fontFamily: {
      mono: ['Space Mono']
    }
  },
  plugins: [],
}
