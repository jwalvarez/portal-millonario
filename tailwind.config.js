module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
        inter: ["Inter-Regular", "sans-serif"],
        "inter-bold": ["Inter-Bold", "cursive"],
        "inter-black": ["Inter-Black", "cursive"],
      },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5412F2",
          secondary: "#F9D72F",
          accent: "#18182F",
          neutral: "#18182F",
          "base-100": "#BABABA",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
