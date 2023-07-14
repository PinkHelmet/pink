/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        30: "30%",
        90: "90%",
      },
      colors: {
        "pink-rose": "#f1adc6",
        "pink-rose-200": "e0a2a2",
        facebook: "#3B5998",
      },
      backgroundImage: {
        hero_bg: "url('/hero-bg.webp')",
        footer_bg: "url('/footer-bg.webp')",
        boats: "url('/boats.webp')",
        houses: "url('/houses.webp')",
      },
      maxHeight: {
        "50vh": "50vh",
      },
      brightness: {
        25: ".25",
      },
    },
  },
  plugins: [],
};
