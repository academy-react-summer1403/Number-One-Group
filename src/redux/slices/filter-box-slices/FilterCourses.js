import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Query: undefined,
  ListTech: null,
  TechCount: undefined,
  SortingCol: "Active",
  SortType: "DESC",
  TeacherId: null,
  courseLevelId: undefined,
  CourseTypeId: undefined,
  CostDown: 0,
  CostUp: 1000000000,
  PageNumber: 1,
  RowsOfPage: 1,
  comparisonIds :[]
};

const FilterCourses = createSlice({
  name: "Filter_Courses",
  initialState,
  reducers: {
    setQueryCourse(state, action) {
      state.Query = action.payload;
    },
    setListTech(state, action) {
      state.ListTech = action.payload;
    },
    setTechCount(state, action) {
      state.TechCount = action.payload;
    },
    setSortCal(state, action) {
      state.SortingCol = action.payload;
    },
    setSortType(state, action) {
      state.SortType = action.payload;
    },
    setInstructorId(state, action) {
      state.TeacherId = action.payload;
    },
    setLevelId(state, action) {
      state.courseLevelId = action.payload;
    },
    setTypeId(state, action) {
      state.CourseTypeId = action.payload;
    },
    setPriceDown(state, action) {
      state.CostDown = action.payload;
    },
    setPriceUp(state, action) {
      state.CostUp = action.payload;
    },
    setPageNumber(state, action) {
      state.PageNumber = action.payload;
    },
    setRowsOfPage(state, action) {
      state.RowsOfPage = action.payload;
    },
    setComparisonIds(state, action) {
      state.comparisonIds = action.payload;
    },
    
  },
});
export const {
  setQueryCourse,
  setListTech,
  setTechCount,
  setSortCal,
  setSortType,
  setInstructorId,
  setLevelId,
  setTypeId,
  setPriceDown,
  setPriceUp,
  setPageNumber,
  setRowsOfPage,
  setComparisonIds,
} = FilterCourses.actions;

export default FilterCourses.reducer;
