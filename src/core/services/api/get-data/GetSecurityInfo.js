import http from "../../interceptor";

const GetSecurityInfo = async () => {
  try {
    const response = await http.get("/SharePanel/GetSecurityInfo");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default GetSecurityInfo;
