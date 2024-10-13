import http from "../../interceptor";

const GetNewsFilterPage = async (apiParams) => {
  const response = await http.get("/News", { params: apiParams });
  return response;
};

export default GetNewsFilterPage;
