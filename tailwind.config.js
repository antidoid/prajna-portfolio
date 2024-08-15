/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          450: "#FF4683",
        },
        blue: {
          450: "#105BE4",
        },
        yellow: {
          450: "#FFCC02",
        },
      },
      fontFamily: {
        Bounce: ["Birthstone Bounce", "cursive"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
