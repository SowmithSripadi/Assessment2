// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ─── FIU brand ────────────────────────────────
        fiuBlue: "#081E3F",
        fiuGold: "#B6862C",
        fiuMagenta: "#CC0066",
        fiuCyan: "#00B7D5",
        fiuYellow: "#FFCC00",
      },
      fontFamily: {
        furore: ["furore", "sans-serif"],
        barlow: ["barlow", "sans-serif"],
      },
      letterSpacing: {
        extra: "0.2em",
      },
    },
  },
  plugins: [],
};
