/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // --white, #FFF
  // Geist

  theme: {
    extend: {
      fontFamily: {
        inter: ["var( --font-inter)"],
        poppins: ["var(--font-poppins)"],
        hind: ["var(--font-hind)"],
        lato: ["var(--font-lato)"],
      },
      colors: {
        // primary color
        default: "#000",
        default2: "#FFF",
        primary: "#166BBF",
        main_heading: "#151941",
        sub_heading: "#414356",
        footer: "#B1B1B1",
      },
      // backgroundImage: {
      //   "gradient-115": "linear-gradient(115deg, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
