module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   body: ["Inter", "sans-serif"],
    //   heading: ["Inter", "sans-serif"],
    // },
    fontFamily: {
      'custom': ['cookie', 'cookie', 'sans-serif'],
    },

    colors: {
      // brand: "#e66446",
      // brand: "#FEA82F",
      // brand: "#FFC107",
      brand: "#0063F7",
      accent: '#ffb100',
      borderColor: "#ededed",
      red: '#EF4444',
      dark: "#475569",
      mid: "#CBD5E1",
      light: "#F8FAFC",
      white: "#FFFFFF",
    },
  },
  plugins: [],
}
