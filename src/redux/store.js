import { configureStore } from "@reduxjs/toolkit";
import { DarkMode, FilterCourses, StepStatus, UserInfo, FilterBlog } from "./slices";

const store = configureStore({
  reducer: {
    DarkMode,
    StepStatus,
    UserInfo,
    FilterCourses,
    FilterBlog,
  },
});

export default store;
