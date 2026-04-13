/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:  "#FFFFFF",
        primary:     "#0B1F3A",
        secondary:   "#F4F8FC",
        card:        "#EAF2F8",
        accent:      "#0A4F6E",
        accentHover: "#0F6A8A",
        cta:         "#FF2A00",
        ctaHover:    "#E02400",
        textMain:    "#334155",
        textMuted:   "#64748B",
        borderLight: "#D9E4EC",
        htpRed: "#fc512f",
      htpRedHover: "#E02400",
      },
    },
  },
  plugins: [],
};

