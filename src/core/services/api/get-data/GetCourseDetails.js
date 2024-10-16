import Http from "../../interceptor";

const GetCourseDetails = async (id) => {
  try {
    const result = await Http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export default GetCourseDetails;
