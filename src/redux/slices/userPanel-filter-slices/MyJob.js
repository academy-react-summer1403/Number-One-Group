import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Query: undefined,
  Data: [],
  FilteredData: [],
  sortingCurrent: 8,
};

const MyJobs = createSlice({
  name: "user-job",
  initialState,
  reducers: {
    handleData: (state, action) => {
      state.Data = action.payload;
      state.FilteredData = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
    },
    setSortingCurrent(state, action) {
      state.sortingCurrent = action.payload;
    },
  },
});

export const { handleData, setQuery, setSortingCurrent } = MyJobs.actions;
export default MyJobs.reducer;
