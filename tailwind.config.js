// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Esto es importante para Angular
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        military: {
          red: {
            DEFAULT: '#FF0030',
            dark: '#990000'
          },
          orange: {
            DEFAULT: '#FF6600',
            dark: '#993300'
          },
          blue: {
            DEFAULT: '#00C8FF',
            dark: '#003366'
          },
          green: {
            DEFAULT: '#33FF00',
            dark: '#006600'
          },
          yellow: {
            DEFAULT: '#FFD400',
            dark: '#997F00'
          },
          black: {
            DEFAULT: '#000000',
            dark: '#000000'
          },
          neutral: {
            DEFAULT: '#f8f5d5ff',
            dark: '#1A1A1A'
          }
        }
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      paintball: ['"Nosifer"', 'sans-serif'],
    },
  },
  plugins: [],
};