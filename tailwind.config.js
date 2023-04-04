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
        "pink-rose": "#ffd7d7",
        "pink-rose-200": "e0a2a2",
      },
      backgroundImage: {
        hero_bg: "url('../public/hero-bg.jpg')",
      },
      maxHeight: {
        "50vh": "50vh",
      },
    },
  },
  plugins: [],
};
