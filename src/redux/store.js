import { configureStore } from "@reduxjs/toolkit";
import { DarkMode, StepStatus, UserInfo, FilterBlog } from "./slices";

const store = configureStore({
  reducer: {
    DarkMode,
    StepStatus,
    UserInfo,
    FilterBlog,
  },
});

export default store;
