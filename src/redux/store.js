import { configureStore } from "@reduxjs/toolkit";
import {
  DarkMode,
  FilterCourses,
  StepStatus,
  UserInfo,
  FilterBlog,
  MyCourses,
  MyFavorite,
  MyReserved,
  MyViews,
  LoginInfo,
  LoginPopup,
  FilterEvent,
  FilterProducts,
  CartData,
  FilterShops,
  MyJobs,
  MyGroups,
} from "./slices";

const store = configureStore({
  reducer: {
    DarkMode,
    StepStatus,
    UserInfo,
    FilterCourses,
    FilterBlog,
    MyCourses,
    MyFavorite,
    MyReserved,
    MyViews,
    LoginInfo,
    LoginPopup,
    FilterEvent,
    FilterProducts,
    CartData,
    FilterShops,
    MyJobs,
    MyGroups,
  },
});

export default store;
