module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          "@apply mx-auto": {},
          "@apply px-4": {},
        },
      });
    },
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
