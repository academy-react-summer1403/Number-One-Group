import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Query: undefined,
  SortingCol: null,
  Category: "",
  PageNumber: 1,
  RowsOfPage: 12,
};

const FilterShops = createSlice({
  name: "shops-params",
  initialState,
  reducers: {
    handleShopQuery: (state, action) => {
      state.Query = action.payload;
    },
    handleShopPage: (state, action) => {
      state.PageNumber = action.payload;
    },
    handleRowsOfPage: (state, action) => {
      state.RowsOfPage = action.payload;
    },
    handleSortingCol: (state, action) => {
      state.SortingCol = action.payload;
    },
    handleCategory: (state, action) => {
      state.Category = action.payload;
    },
  },
});

export const {
  handleShopQuery,
  handleShopPage,
  handleRowsOfPage,
  handleSortingCol,
  handleCategory,
} = FilterShops.actions;
export default FilterShops.reducer;
