import http from "../../interceptor";

const GetMyJobHistories = async () => {
  try {
    const response = await http.get("/SharePanel/GetMyJobHistories");
    return response?.jobLists;
  } catch (error) {
    return [];
  }
};

export default GetMyJobHistories;
