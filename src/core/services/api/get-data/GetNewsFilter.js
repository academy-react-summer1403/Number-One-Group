import http from "../../interceptor";

const GetNewsFilterPage = async (apiParams) => {
  try {
    const response = await http.get("/News", { params: apiParams });
    return response;
  } catch (error) {
    return [];
  }
};

export default GetNewsFilterPage;
