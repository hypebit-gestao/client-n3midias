/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "white-secondary": "#EBF1F3",
        "black-primary": "#19191F",
        "black-secondary": "#545454",
        "black-light": "#7F8386",
        "green-light": "#B5C989",
        "green-dark": "#3A4407",
        "yellow-primary": "#C4E62F",
      },
      screens: {
        "3xl": "1800px",
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
