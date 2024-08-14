/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  safelist: [{ pattern: /bg-./, variants: ["before","!"] }],
  theme: {
    extend: {
      colors: {
        app: {
          DEFAULT: "#093542",
          "header-dark": "#093542",
          "header-light": "#0143a3",
          "body-dark": "#082931",
          "body-mid": "#093542",
          "body-light": "rgb(253, 253, 253)",
          "accent-default": "#0062cc",
          "accent-red": "#de6764",
          "accent-green": "#78eb43",
          "accent-blue": "#7cc4ff",
          "accent-yellow": "#ffc107",
          "alert-red": "#de6764",
          "alert-green": "#78eb43",
          "alert-blue": "#7cc4ff",
          "alert-yellow": "#ffc107",
        },
      },
      height: {
        vh100: "100vh",
      },
      minWidth: {
        1: "1rem",
        6: "2rem",
        12: "3rem",
        15: "4rem",
        18: "5rem",
        24: "6rem",
        26: "8rem",
        30: "12rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      minHeight: {
        1: "1rem",
        6: "2rem",
        12: "3rem",
        15: "4rem",
        18: "5rem",
        24: "6rem",
        26: "8rem",
        30: "12rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      screens: {
        "3xl": "1700px",
        "4xl": "2000px",
        "5xl": "2400px",
        "6xl": "2800px",
        "7xl": "3000px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
