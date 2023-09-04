/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f9b600",
        sec: "#1b1c2d",
        third: "#dcdeff",
        empat: "#2e304b",
        lima: "#c9cadd",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
