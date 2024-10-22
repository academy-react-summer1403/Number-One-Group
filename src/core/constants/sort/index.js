import { CategoryIcon, TopicsIcon } from "../../icon";

export const sortingColOptions_Blog_Fa = [
  { id: 1, value: "currentLikeCount", label: "محبوب ترین" },
  { id: 2, value: "updateDate", label: "جدید ترین" },
  { id: 3, value: "currentView", label: "پربازدید ترین" },
];

export const sortingColOptions_Blog_En = [
  { id: 1, value: "currentLikeCount", label: "Most Popular" },
  { id: 2, value: "updateDate", label: "Latest" },
  { id: 3, value: "currentView", label: "Most Visited" },
];

export const sortingOptionsType_Course_Fa = [
  { id: 1, value: "Active", label: "دوره های فعال" },
  { id: 2, value: "cost", label: "قیمت" },
  { id: 3, value: "courseRate", label: "محبوبیت" },
];

export const sortingOptionsType_Course_En = [
  { id: 1, value: "Active", label: "ActiveCourses" },
  { id: 2, value: "cost", label: "Price" },
  { id: 3, value: "courseRate", label: "Popularity" },
];

export const sortOptionCal_Fa = [
  { id: 1, value: "DESC", label: "نزولی" },
  { id: 2, value: "ASC", label: "صعودی" },
];

export const sortOptionCal_En = [
  { id: 1, value: "DESC", label: "Descending" },
  { id: 2, value: "ASC", label: "Ascending" },
];

export const sortColOptions_MyCourses_En = [
  { id: 1, value: "lastUpdate", label: "Latest" },
  { id: 2, value: "isActive", label: "Active" },
];

export const sortColOptions_MyCourses_Fa = [
  { id: 1, value: "lastUpdate", label: "جدید ترین" },
  { id: 2, value: "isActive", label: "دوره های فعال" },
];

export const sortCurrentOffset = [
  { id: 1, value: 3, label: "3" },
  { id: 2, value: 6, label: "6" },
  { id: 3, value: 8, label: "8" },
];

export const sortOptionChooseList_Fa = [
  { id: 1, value: "course", label: "دوره های آموزشی" },
  { id: 2, value: "blog", label: "وبلاگ" },
];

export const sortOptionChooseList_En = [
  { id: 1, value: "course", label: "Course" },
  { id: 2, value: "blog", label: "Blog" },
];

export const selectItems_FA = [
  { id: 1, label: "دوره ها", value: "course", icon: CategoryIcon ,path:'/courses',placeHolder:'PlaceHolder_Courses'},
  { id: 2, label: "وبلاگ ها", value: "blog", icon: TopicsIcon ,path:'/Blog',placeHolder:'PlaceHolder_Blogs' },
];
export const selectItems_EN = [
  { id: 1, label: "Courses", value: "course", icon: CategoryIcon ,path:'/courses',placeHolder:'PlaceHolder_Courses'},
  { id: 2, label: "Blogs", value: "blog", icon: TopicsIcon ,path:'/Blog',placeHolder:'PlaceHolder_Blogs' },
];
