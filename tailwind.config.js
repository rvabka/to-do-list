/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradientBg: "linear-gradient(to right, #6b46c1, #4a1d73)",
      },
    },
  },
  plugins: [],
};
