import nextUiConfig from "./src/config/next-ui";

const { nextui } = require("@nextui-org/react");
const { theme } = require("./src/config/tailwind-css");

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
        mobileMenu: "mobileMenu 0.2s",
      },
      backgroundImage: {
        // heroSection: "url('./src/assets/images/hero_section_landing.jpg')"
      },
      fontFamily: {
        IranSans: ["Iran-Sans"],
        Pop_Med: ["Pop-Medium"],
        Sahel: ['"Pop-Medium"', '"Sahel"'],
        Mitra: ["Mitra"],
      },
    },
  },
  plugins: [nextui(nextUiConfig)],
};
