import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Query: undefined,
  PageNumber: 1,
  RowsOfPage: 8,
  SortType: null,
};

const MyCourses = createSlice({
  name: "user-courses",
  initialState,
  reducers: {
    setSortingCol(state, action) {
      state.SortingCol = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
    },
    setPageNumber(state, action) {
      state.PageNumber = action.payload;
    },
  },
});

export const { setSortingCol, setQuery, setPageNumber } =
  MyCourses.actions;

export default MyCourses.reducer;
