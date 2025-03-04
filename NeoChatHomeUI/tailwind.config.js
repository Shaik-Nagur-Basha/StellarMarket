/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tilt: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        focusRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.25)" },
          "100%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" },
        },
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 4s linear infinite",
        focusRing: "focusRing 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
