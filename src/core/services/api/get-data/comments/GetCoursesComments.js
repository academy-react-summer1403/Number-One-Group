import http from "../../../interceptor";

const GetCoursesComments = async (id) => {
  return await http.get(`/Course/GetCourseCommnets/${id}`,
  );
};

export default GetCoursesComments;
