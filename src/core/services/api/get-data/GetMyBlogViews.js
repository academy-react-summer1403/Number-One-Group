import http from "../../interceptor";

const GetMyBlogViews = async () => {
  try {
    const response = await http.get("/SharePanel/GetMyNewsComments");
    return response;
  } catch (error) {
    return [];
  }
};

export default GetMyBlogViews;
