import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Query: undefined,
  Data: [],
  FilteredData: [],
  DetailCourse: [],
  sortingCurrent: 8,
};

const MyGroups = createSlice({
  name: "user-group",
  initialState,
  reducers: {
    handleData: (state, action) => {
      state.Data = action.payload;
      state.FilteredData = action.payload;
    },
    setQuery(state, action) {
      state.Query = action.payload;
      state.FilteredData = state.Data.filter(
        (item) =>
          item.groupName.toLowerCase().indexOf(action.payload.toLowerCase()) !=
          -1
      );
    },
    setSortingCurrent(state, action) {
      state.sortingCurrent = action.payload;
    },
    handleDetailCourse: (state, action) => {},
  },
});

export const { handleData, setQuery, setSortingCurrent, handleDetailCourse } = MyGroups.actions;
export default MyGroups.reducer;
