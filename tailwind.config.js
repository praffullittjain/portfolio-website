/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#5C7A5C",
          light: "#7A9A7A",
          dark: "#465D46",
        },
        terracotta: {
          DEFAULT: "#D97757",
          light: "#E8956F",
          dark: "#B85C3F",
        },
        offwhite: "#F8F8F5",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
