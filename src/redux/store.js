import { configureStore } from "@reduxjs/toolkit";
import { DarkMode, FilterCourses, StepStatus, UserInfo } from "./slices";

const store = configureStore({
  reducer: {
    DarkMode,
    StepStatus,
    UserInfo,
    FilterCourses,
  },
});

export default store;
