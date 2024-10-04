import http from "../../interceptor";

const getAllTeachers = () => {
  try {
    const response = http.get("/Home/GetTeachers");
    return response;
  } catch (error) {
    return [];
  }
};
export default getAllTeachers
