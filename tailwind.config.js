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
            DEFAULT: '#5dc1b9',
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
          blackdark: {
            DEFAULT: '#1A1A1A',
            dark: '#f8f5d5ff'
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
    fontSize: {
      'body': ['1rem', { lineHeight: '1.45', fontWeight: '500', color: '#1A1A1A' }],
    }
  },
  plugins: [],
};