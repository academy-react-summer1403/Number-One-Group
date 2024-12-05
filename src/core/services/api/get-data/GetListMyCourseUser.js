import http from "../../interceptor";

const GetListMyCourseUser = () => {
  try {
    const response = http.get("/CourseUser/GetListMyCourseUser");
    return response;
  } catch (error) {
    return [];
  }
};

export default GetListMyCourseUser;
