import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          ui: [
            "@nextui-org/react",
            "react-icons",
            "react-simple-star-rating",
            "react-parallax-tilt",
            "react-responsive",
            "react-toastify",
            "swiper",
            "react-multi-carousel",
          ],
          formValidation: ["formik", "yup"],
          router: ["react-router-dom", "react-redux", "@reduxjs/toolkit"],
          network: ["axios", "@tanstack/react-query"],
          media: [
            "html2canvas",
            "react-image-crop",
            "react-speech-recognition",
          ],
          dateLang: ["jalali-moment", "i18next", "react-i18next"],
          utils: [
            "@reactour/tour",
            "emoji-picker-react",
            "multi-range-slider-react",
            "regenerator-runtime",
            "typewriter-effect",
          ],
          userPanel: [
            "src/screens/user-panel/Dashboard.jsx",
            "src/screens/user-panel/CreateJob.jsx",
            "src/screens/user-panel/EditInformation.jsx",
            "src/screens/user-panel/Favorites.jsx",
            "src/screens/user-panel/Groups.jsx",
            "src/screens/user-panel/Information.jsx",
            "src/screens/user-panel/Jobs.jsx",
            "src/screens/user-panel/MyCourses.jsx",
            "src/screens/user-panel/MyViews.jsx",
            "src/screens/user-panel/Payment.jsx",
            "src/screens/user-panel/Reserved.jsx",
            "src/screens/user-panel/Security.jsx",
            "src/screens/user-panel/UpdateJob.jsx",
          ],
        },
      },
    },
  },
});
