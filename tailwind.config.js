/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         sans: ["var(--font-inter)"],
      },
      colors: {
        white: "#FFFFFF",
        background:  "#FFFFFF",
        primary:     "#0B1F3A",
        secondary:   "#F4F8FC",
        card:        "#EAF2F8",
        accent:      "#0A4F6E",
        accentHover: "#0F6A8A",
        cta:         "#cf4227",
        ctaHover:    "#c43318",
        textMain:    "#1f252dff",
        textMuted:   "#22262bff",
        borderLight: "#D9E4EC",
        htpRed: "#cf4227",
      htpRedHover: "#c43318",
      },
      screens: {
        md: "1024px",
      },
    },

  },
  plugins: [],

};

