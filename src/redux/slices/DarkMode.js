import {
  getItem,
  setItem,
} from "../../core/services/local-storage/LocalStorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = getItem("theme") ? getItem("theme") : false;

function changeTheme(state) {
  console.log(state)
  state = !state;
  setItem("theme", state);
  return state
}

const DarkMode = createSlice({
  name: "dark-mode",
  initialState,
  reducers: { changeTheme },
});

export const { changeTheme: changeThemeAction } = DarkMode.actions;
export default DarkMode.reducer;
