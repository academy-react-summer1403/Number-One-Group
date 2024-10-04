import http from "../../interceptor";

const GetAllCourseByPagination = async (apiParams) => {
  try {
    const request = await http.get(`/Home/GetCoursesWithPagination`, {
      params: apiParams,
    });

    return request.courseFilterDtos;
  } catch (error) {
    return [];
  }
};
export default GetAllCourseByPagination;
