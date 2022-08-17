module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FB4051",
          secondary: "#0D0D0D",
          neutral: "#ECF0F3",
          "base-100": "#ECF0F3",
          info: "#ff014d91",
          success: "#ffffff",
          warning: "#DF7E07",
          error: "#FA5C5C",
          violet:"#9999FF"
        },
      },
      "dark"
    ],
  },
  plugins: [require("daisyui")],
};

