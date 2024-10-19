import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortingCol: "course",
  Query: undefined,
  sortingCurrent: 8,
};

const MyFavorite = createSlice({
  name: "user-favorite",
  initialState,
  reducers: {
    setSortingCol(state, action) {
      state.sortingCol = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
    },
    setSortingCurrent(state, action) {
      state.sortingCurrent = action.payload;
    },
  },
});

export const { setSortingCol, setQuery, setSortingCurrent } =
  MyFavorite.actions;
export default MyFavorite.reducer;
