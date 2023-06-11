/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-nnnouvellegrotesk)", "sans-serif"],
      mono: ["var(--font-jetbrainsmono)", "monospace"],
    },
    colors: {
      primary: {
        50: "#eff4fe",
        100: "#e1edfe",
        200: "#c9dbfc",
        300: "#a8c3f9",
        400: "#86a2f3",
        500: "#6881ec",
        600: "#5867e1", // this is the default
        700: "#3e4ac4",
        800: "#343f9f",
        900: "#313b7e",
        950: "#1d2149",
      },
      neutral: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#2a2a2a", // this is the default
        950: "#1a1a1a",
      },
      danger: {
        700: " #b91c1c",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        md: "0.25rem",
      },
      boxShadow: {
        custom: "0 4px 24px rgba(42, 42, 42, 0.04)",
      },
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
