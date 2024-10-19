import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortingCurrent: 8,
  Query: undefined,
};

const MyReserved = createSlice({
  name: "user-reserved",
  initialState,
  reducers: {
    setSortingCurrent(state, action) {
      state.sortingCurrent = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
    },
  },
});

export const { setSortingCurrent, setQuery } = MyReserved.actions;
export default MyReserved.reducer;
