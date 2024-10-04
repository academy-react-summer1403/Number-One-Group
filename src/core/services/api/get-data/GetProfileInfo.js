import http from "../../interceptor";

const GetProfileInfo = async () => {
  try {
    const response = await http.get("/SharePanel/GetProfileInfo");
    return response;
  } catch (error) {
    return false;
  }
};

export default GetProfileInfo;
