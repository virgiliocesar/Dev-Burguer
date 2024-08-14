/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      "home": "url('/src/assets/img/bg.png')",
    },
    },
  },
  plugins: [],
};
