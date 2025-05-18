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
      fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
        extraBold: "800",
      },
      fontSize: {
        /* 16px family */
        "16px": ["16px", { lineHeight: "26px" }],
        "16px-sm": ["16px", { lineHeight: "20px" }],
        "16px-md": ["16px", { lineHeight: "24px" }],
        "16px-lg": ["16px", { lineHeight: "33px" }],

        /* 18px family */
        "18px": ["18px", { lineHeight: "24px" }],
        "18px-sm": ["18px", { lineHeight: "28px" }],
        "18px-md": ["18px", { lineHeight: "31px" }],
        "18px-lg": ["18px", { lineHeight: "39px" }],

        /* 32px family */
        "32px": ["32px", { lineHeight: "31px" }],
        "32px-md": ["32px", { lineHeight: "41px" }],

        /* standalone sizes */
        "20px": ["20px", { lineHeight: "14px" }],
        "26px": ["26px", { lineHeight: "30px" }],
        "60px": ["60px", { lineHeight: "31px" }],
      },
      letterSpacing: {
        3.22: "3.22px",
        3.84: "3.84px",
      },
    },
  },
  plugins: [],
};
