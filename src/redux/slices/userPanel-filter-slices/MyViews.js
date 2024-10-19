import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortingCurrent: 8,
  Query: undefined,
  sortingCol: "course",
};

const MyViews = createSlice({
  name: "user-views",
  initialState,
  reducers: {
    setSortingCurrent(state, action) {
      state.sortingCurrent = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
    },
    setSortingCol(state, action) {
      state.sortingCol = action.payload;
    },
  },
});

export const { setSortingCol, setQuery, setSortingCurrent } = MyViews.actions;
export default MyViews.reducer;
