/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#13111C", // kolor tła
        "custom-2bg": "#262238", // kolor drugiego tła
        "custom-purple" : "#851AE6", // przyciski   
        "custom-text": "#FFF", // kolor tekstu
      },
    },
  },
  plugins: [],
};
