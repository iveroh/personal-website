/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave1: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-30px)" },
        },
        wave2: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(30px)" },
        },
        wave3: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-15px)" },
        },
      },
      animation: {
        wave1: "wave1 8s ease-in-out infinite",
        wave2: "wave2 10s ease-in-out infinite",
        wave3: "wave3 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
