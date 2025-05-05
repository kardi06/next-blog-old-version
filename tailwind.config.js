/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        inter: ["var(--font-inter)"],
      },
      animation:{
        roll: "roll 24s linear infinite",
      },
      keyframes:{
        roll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-300%)" },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}



// colors: {
//   dark: "#1b1b1b",
//   light: "#fff",
//   accent: "#7B00D3", 
//   accentDark: "#ffdb4d",
//   gray: "#747474",
// }