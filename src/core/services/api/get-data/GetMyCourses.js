import http from "../../interceptor";

const GetMyCourses = async (apiParams) => {
  const response = await http.get("/SharePanel/GetMyCourses", {
    params: apiParams,
  });
  return response;
};

export default GetMyCourses;
