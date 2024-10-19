import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keys: {
    phoneOrGmail: "",
    password: "",
    rememberMe: false,
  },
};

const LoginInfo = createSlice({
  name: "login-info",
  initialState,
  reducers: {
    setKeys: (state, action) => {
      state.keys = action.payload;
    },
  },
});

export const { setKeys } = LoginInfo.actions;
export default LoginInfo.reducer;
