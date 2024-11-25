import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Query: undefined,
  Category: "",
  Shop: "",
  PageNumber: 1,
  RowsOfPage: 12,
  SortingCol: null,
};

const FilterProducts = createSlice({
  name: "products-params",
  initialState,
  reducers: {
    handleProductQuery: (state, action) => {
      state.Query = action.payload;
    },
    handleProductPage: (state, action) => {
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
    handleShop: (state, action) => {
      state.Shop = action.payload;
    },
  },
});

export const {
  handleProductQuery,
  handleProductPage,
  handleRowsOfPage,
  handleSortingCol,
  handleCategory,
  handleShop,
} = FilterProducts.actions;
export default FilterProducts.reducer;
