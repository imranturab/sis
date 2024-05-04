module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fbfbfb", 900: "#102228", "600_7f": "#7979797f" },
        blue: { 900: "#154a9a" },
        white: { A700: "#ffffff" },
        light_green: { A700: "#2ec715" },
        blue_gray: { "900_bc": "#273237bc" },
        black: { 900: "#000000" },
        green: { 800: "#307844", "800_01": "#317845", "700_7f": "#1ea8457f" },
      },
      boxShadow: {},
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
