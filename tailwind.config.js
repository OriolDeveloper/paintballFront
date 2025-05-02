// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Esto es importante para Angular
  ],
  theme: {
    extend: {
      colors: {
        secondaryCustom: "#000000",
        principalCustom: "#ffd86d",
        terciaryCustom: "#3881d1",
        whiteCustom: "#fffffe",
      },
    },
  },
  plugins: [],
};