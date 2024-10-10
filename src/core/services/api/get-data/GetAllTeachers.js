import http from "../../interceptor";

const GetAllTeachers = () => {
  try {
    const response = http.get("/Home/GetTeachers");
    return response;
  } catch (error) {
    return [];
  }
};
export default GetAllTeachers;
