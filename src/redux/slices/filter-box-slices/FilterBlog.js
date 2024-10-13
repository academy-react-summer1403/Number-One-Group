import { createSlice } from "@reduxjs/toolkit";
// import {
//   setQuery,
//   setSortingCol,
//   setPageNumber,
//   setRowsOfPage,
// } from "./FilterFunctions";

const initialState = {
  SortingCol: null,
  Query: undefined,
  NewsCategoryId: null,
  PageNumber: 1,
  RowsOfPage: 1,
};

const FilterBlog = createSlice({
  name: "filter-blog",
  initialState,
  reducers: {
    setNewsCategoryId(state, action) {
      state.NewsCategoryId = action.payload;
    },
    setPageNumber(state, action) {
      state.PageNumber = action.payload;
    },
    setRowsOfPage(state, action) {
      state.RowsOfPage = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
    },
    setSortingCol(state, action) {
      state.SortingCol = action.payload;
    },
  },
});

export const {
  setSortingCol,
  setQuery,
  setNewsCategoryId,
  setPageNumber,
  setRowsOfPage,
} = FilterBlog.actions;

export default FilterBlog.reducer;
