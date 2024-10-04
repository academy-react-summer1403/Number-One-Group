import http from "../../interceptor";

const GetTechnologies = async () => {
  try {
    const request = await http.get("/Home/GetTechnologies");
    return request;
  } catch (error) {
    return [];
  }
};
export default GetTechnologies
