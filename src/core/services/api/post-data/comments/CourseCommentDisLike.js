import { toast } from "react-toastify";
import Http from "../../../interceptor";

const CourseCommentDisLike = async (ParamsId, refetch) => {
  try {
    const result = await Http.post(
      `/Course/AddCourseCommentDissLike?CourseCommandId=${ParamsId}`
    );
    if (result.success) {
      toast.success("کامنت مورد نظر دیس لایک شد");
      refetch();
    } else {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default CourseCommentDisLike;
