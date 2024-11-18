import http from "../../interceptor";

const GetTeacherDetails = async (id) => {
  try {
    const response = await http.get(`/Home/GetTeacherDetails?TeacherId=${id}`);
    return response;
  } catch (error) {
    return false;
  }
};

export default GetTeacherDetails;
