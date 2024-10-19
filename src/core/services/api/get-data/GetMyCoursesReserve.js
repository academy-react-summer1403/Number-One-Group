import http from "../../interceptor";

const GetMyCoursesReserve = async () => {
  try {
    const response = await http.get("/SharePanel/GetMyCoursesReserve");
    return response;
  } catch (error) {
    return [];
  }
};

export default GetMyCoursesReserve;
