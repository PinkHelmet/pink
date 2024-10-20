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
        instagram: "#3F729B",
        youtube: "#c4302b",
        linkedin: "#0077B5",
        google: "#34A853"
      },
      backgroundImage: {
        mobile_hero_bg:"url('/mobile-hero-bg.webp')",
        hero_bg: "url('/hero-bg.webp')",
        footer_bg: "url('/footer_bg.webp')",
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
