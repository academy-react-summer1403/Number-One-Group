import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SortingCol: null,
  Query: undefined,
  PageNumber: 1,
  RowsOfPage: 8,
};

const FilterEvent = createSlice({
  name: "filter-events",
  initialState,
  reducers: {
    handleQuery: (state, action) => {
      state.Query = action.payload;
    },
    handleSortingCol: (state, action) => {
      state.SortingCol = action.payload;
    },
    handlePageNumber: (state, action) => {
      state.PageNumber = action.payload;
    },
    handleRowsOfPage: (state, action) => {
      state.RowsOfPage = action.payload;
    },
  },
});

export const {
  handleQuery,
  handleSortingCol,
  handlePageNumber,
  handleRowsOfPage,
} = FilterEvent.actions;
export default FilterEvent.reducer;
