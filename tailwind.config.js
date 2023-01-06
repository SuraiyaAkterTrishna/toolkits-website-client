module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Yesteryear: ['Yesteryear', "cursive"],
      Norican: ['Norican', "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
