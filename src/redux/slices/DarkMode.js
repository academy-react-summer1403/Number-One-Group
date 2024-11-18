import { getItem, setItem } from "../../core/hooks/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = getItem("theme") ? getItem("theme") : false;

function changeTheme(state, action) {
  if (!action.payload) {
    state = !state;
  } else {
    state = action.payload;
  }
  setItem("theme", state);
  return state;
}

const DarkMode = createSlice({
  name: "dark-mode",
  initialState,
  reducers: { changeTheme },
});

export const { changeTheme: changeThemeAction } = DarkMode.actions;
export default DarkMode.reducer;
