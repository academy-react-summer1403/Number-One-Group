import Http from "../../interceptor";

const GetMyFavoriteCourses = async () => {
  try {
    const result = await Http.get("/SharePanel/GetMyFavoriteCourses");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default GetMyFavoriteCourses;
