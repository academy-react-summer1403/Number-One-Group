import {
  DashboardBtnIcon,
  InformationBtnIcon,
  MyCoursesBtnIcon,
  ReservedBtnIcon,
  MyViewsBtnIcon,
  FavoritesBtnIcon,
  SecurityBtnIcon,
} from "../../icon";

const sidebarBtns = [
  {
    id: 1,
    name: ["داشبورد", "Dashboard"],
    href: "/userPanel",
    icon: DashboardBtnIcon,
  },
  {
    id: 2,
    name: ["اطلاعات کاربری", "User Information"],
    href: "/userPanel/information",
    icon: InformationBtnIcon,
    tourStyle: "step-info",
  },
  {
    id: 3,
    name: ["دوره های من", "My Courses"],
    href: "/userPanel/myCourses",
    icon: MyCoursesBtnIcon,
    tourStyle: "step-myCourses",
  },
  {
    id: 4,
    name: ["دوره های رزرو شده", "Reserved Courses"],
    href: "/userPanel/reserved",
    icon: ReservedBtnIcon,
    tourStyle: "step-reserveCourses",
  },
  {
    id: 5,
    name: ["دیدگاه های من", "My Views"],
    href: "/userPanel/myViews",
    icon: MyViewsBtnIcon,
    tourStyle: "step-myViews",
  },
  {
    id: 6,
    name: ["علاقه مندی ها", "Favorites"],
    href: "/userPanel/favorites",
    icon: FavoritesBtnIcon,
    tourStyle: "step-myFavorite",
  },
  {
    id: 9,
    name: ["گروه های من", "My Groups"],
    href: "/userPanel/groups",
    icon: FavoritesBtnIcon,
  },
  {
    id: 7,
    name: ["تنظیمات امنیتی", "Security Settings"],
    href: "/userPanel/security",
    icon: SecurityBtnIcon,
    tourStyle: "step-security",
  },
  {
    id: 8,
    name: ["سوابق شغلی من", "Job Histories"],
    href: "/userPanel/jobs",
    icon: SecurityBtnIcon,
  },
];

export default sidebarBtns;
