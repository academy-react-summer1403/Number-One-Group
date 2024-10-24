import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const LoginPopup = createSlice({
  name: "login-popup",
  initialState,
  reducers: {
    setStatusModal: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusModal } = LoginPopup.actions;
export default LoginPopup.reducer;
