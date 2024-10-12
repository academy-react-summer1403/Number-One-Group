import Http from "../../interceptor";

const GetCourseType = async () => {
  try {
    const result = await Http.get("/CourseType/GetCourseTypes");
    return result;
  } catch (error) {
    console.log(error);
  }
};
export default GetCourseType;
