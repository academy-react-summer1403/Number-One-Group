import { removeItem } from "../../../hooks/local-storage";
import http from "../../interceptor";

const GetProfileInfo = async () => {
  try {
    const response = await http.get("/SharePanel/GetProfileInfo");
    return response;
  } catch (error) {
    removeItem("token")
    return false;
  }
};

export default GetProfileInfo;
