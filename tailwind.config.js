/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradientBg:
          "linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(226,226,226,1) 50%, rgba(230,230,230,1) 100%)",
        buttonBg: "radial-gradient(circle, rgba(242,113,154,1) 50%, rgba(254,182,205,1) 100%)"
      },
    },
  },
  plugins: [],
};
