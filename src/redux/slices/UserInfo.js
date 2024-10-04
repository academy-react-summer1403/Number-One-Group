import { createSlice } from "@reduxjs/toolkit";

const initialState = { info: false };

const setInfo = (state, action) => {
  state.info = action.payload;
};

const userInfo = createSlice({
  name: "user",
  initialState,
  reducers: { setInfo },
});

export const { setInfo: setInfoAction } = userInfo.actions;
export default userInfo.reducer;
