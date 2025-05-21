import { lazy } from "react";
const LandingPage = lazy(() => import("./landing"));
const ForgetPasswordLogin = lazy(() => import("./authorize/ForgetPassword"));
const Login = lazy(() => import("./authorize/Login"));
const Register = lazy(() => import("./authorize/Register"));
const TowStepLogin = lazy(() => import("./authorize/TowStep"));
const Courses = lazy(() => import("./courses"));
const Blog = lazy(() => import("./blog"));
const CourseDetails = lazy(() => import("./course-details"));
const BlogDetails = lazy(() => import("./blog-details"));
const Dashboard = lazy(() => import("./user-panel/Dashboard"));
const EditInformation = lazy(() => import("./user-panel/EditInformation"));
const Favorites = lazy(() => import("./user-panel/Favorites"));
const Information = lazy(() => import("./user-panel/Information"));
const MyCourses = lazy(() => import("./user-panel/MyCourses"));
const MyViews = lazy(() => import("./user-panel/MyViews"));
const Reserved = lazy(() => import("./user-panel/Reserved"));
const Security = lazy(() => import("./user-panel/Security"));
const Error404 = lazy(() => import("./error-page/Error404"));
const Payment = lazy(() => import("./user-panel/Payment"));
const TeacherDetails = lazy(() => import("./teacher-details"));
const TeacherPage = lazy(() => import("./teachers"));
const Comparison = lazy(() => import("./comparison"));
const Event = lazy(() => import("./event"));
const EventDetails = lazy(() => import("./event-details"));
const ContactUs = lazy(() => import("./contact-us"));
const Product = lazy(() => import("./product"));
const Shops = lazy(() => import("./shop"));
const ProductDetails = lazy(() => import("./product-details"));
const Cart = lazy(() => import("./cart"));
const ShopDetails = lazy(() => import("./shop-details"));
const Jobs = lazy(() => import("./user-panel/Jobs"));
const CreateJob = lazy(() => import("./user-panel/CreateJob"));
const UpdateJob = lazy(() => import("./user-panel/UpdateJob"));
const Groups = lazy(() => import("./user-panel/Groups"));
const About = lazy(() => import("./about-us"));
export {
  LandingPage,
  ForgetPasswordLogin,
  Login,
  Register,
  TowStepLogin,
  Blog,
  Courses,
  CourseDetails,
  BlogDetails,
  Dashboard,
  EditInformation,
  Favorites,
  Information,
  MyCourses,
  MyViews,
  Reserved,
  Security,
  Error404,
  Payment,
  TeacherDetails,
  TeacherPage,
  Comparison,
  Event,
  EventDetails,
  ContactUs,
  Product,
  Shops,
  ProductDetails,
  Cart,
  ShopDetails,
  Jobs,
  CreateJob,
  UpdateJob,
  Groups,
  About,
};
