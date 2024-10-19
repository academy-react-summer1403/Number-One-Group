import http from "../../interceptor";

const GetCoursesTop = async (count) => {
  try {
    const response = await http.get(`/Home/GetCoursesTop?Count=${count}`);
    return response;
  } catch {
    return [];
  }
};

export default GetCoursesTop;
