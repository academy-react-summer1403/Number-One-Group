import { configureStore } from "@reduxjs/toolkit";
import { CartData, DarkMode } from "./slices";

const store = configureStore({
  reducer: {
    DarkMode,
    CartData,
  },
});

export default store;
