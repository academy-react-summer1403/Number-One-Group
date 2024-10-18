import http from "../../../interceptor";

const GetReplayCourseComment = async (courseId, commentId) => {
  try {
    // alert()
    const result = await http.get(
      `/Course/GetCourseReplyCommnets/${courseId}/${commentId}`);
    return result;
  } catch (error) {
    console.log(error)
  }
 
};

export default GetReplayCourseComment;
