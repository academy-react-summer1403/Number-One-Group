import { configureStore } from "@reduxjs/toolkit";
import { DarkMode, StepStatus, UserInfo } from "./slices";

const store = configureStore({
  reducer: {
    DarkMode,
    StepStatus,
    UserInfo,
  },
});

export default store;
