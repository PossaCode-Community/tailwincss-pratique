/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#A53DFF",
      },
      container: {
        center: true,
        padding: "1rem",
      },

      fontFamily: {
        work: "Work Sans",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
