import nextUIConfig from "./src/core/utility/next-ui/NextUiConfig";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        mobileMenu: { "0%": { width: 0 }, "100%": { width: "308px" } },
      },
      animation: {
        mobileMenu: 'mobileMenu 0.2s',
      },
      backgroundImage: {
        heroSection: "url('./src/assets/images/hero_section_landing.jpg')",
        importantWord: "url('./src/assets/images/importantWord.png')",
        informedPoster: "url('./src/assets/images/informedPoster.jpg')",
        gradientBackground: "url('./src/assets/images/gradientBackground.jpg')",
        gradientBackgroundDark:
          "url('./src/assets/images/gradientBackgroundDark.jpg')",
        titleSectionGradient:
          "url('./src/assets/images/titleSectionGradient.jpg')",
      },
      fontFamily: {
        IranSans: ["Iran-Sans"],
        Pop_Med: ["Pop-Medium"],
        Sahel: ['"Pop-Medium"', '"Sahel"'],
      },
      screens: {},
    },
  },
  plugins: [nextui(nextUIConfig)],
};
