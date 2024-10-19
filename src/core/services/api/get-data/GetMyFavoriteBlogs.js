import Http from "../../interceptor";

const GetMyFavoriteBlogs = async () => {
  try {
    const result = await Http.get("/SharePanel/GetMyFavoriteNews");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default GetMyFavoriteBlogs;
