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
        gold: {
          DEFAULT: "#D4AF37",
          primary: "#D4AF37",
          light: "#F3E5AB",
          accent: "#F3E5AB",
          dark: "#B38F24",
          glow: "rgba(212, 175, 55, 0.25)",
        },
        cream: {
          DEFAULT: "#FDFBF7",
          50: "#FFFDFB",
          100: "#FDFBF7",
          200: "#F8F3E6",
        },
        textDark: "#1A1A1A",
      },
      boxShadow: {
        gold: "0 10px 30px -5px rgba(212, 175, 55, 0.2)",
        "gold-lg": "0 20px 40px -10px rgba(212, 175, 55, 0.35)",
        "gold-hover": "0 15px 35px -5px rgba(212, 175, 55, 0.25)",
      },
    },
  },
  plugins: [],
};
