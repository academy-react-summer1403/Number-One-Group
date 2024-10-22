import {
  setNewsCategoryId,
  setQueryBlog,
} from "../../../redux/slices/filter-box-slices/FilterBlog";
import {
  setInstructorId,
  setLevelId,
  setListTech,
  setPageNumber,
  setPriceDown,
  setPriceUp,
  setQueryCourse,
  setTechCount,
  setTypeId,
} from "../../../redux/slices/filter-box-slices/FilterCourses";

export const courseFilterParams = [
  { key: "Query", action: setQueryCourse },
  { key: "TechCount", action: setTechCount },
  { key: "ListTech", action: setListTech },
  { key: "type", action: setTypeId },
  { key: "level", action: setLevelId },
  { key: "instructor", action: setInstructorId },
  { key: "CostDown", action: setPriceDown },
  { key: "CostUp", action: setPriceUp },
  { key: "pageNumber", action: setPageNumber },
];

export const blogFilterParams = [
  { key: "Query", action: setQueryBlog },
  { key: "category", action: setNewsCategoryId },
  { key: "pageNumber", action: setPageNumber },
];
