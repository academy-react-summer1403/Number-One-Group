import http from "../../interceptor";

const GetMyCourseViews = async () => {
  try {
    const response = await http.get("/SharePanel/GetMyCoursesComments");
    return response;
  } catch (error) {
    return [];
  }
};

export default GetMyCourseViews;
