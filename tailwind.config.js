/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        primary: "#EC8040",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        title: ["Rubik Wet Paint", "sans-serif"],
      },
    },
  },
  plugins: [],
};
