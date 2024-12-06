import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1
};

function increase(state, action) {
  if (!action.payload) {
    state.value += 1;
  } else {
    state.value = action.payload + 1;
  }
}

function decrease(state, action) {
  if (state.value === 1) return;
  state.value = action.payload + 1;
}

function clearStep(state) {
  state.value = 1;
}

const stepStatus = createSlice({
  name: "step",
  initialState,
  reducers: {
    increase,
    decrease,
    clearStep
  }
});

export const { increase: increaseAction, decrease: decreaseAction, clearStep: clearAction } =
  stepStatus.actions;
export default stepStatus.reducer;
