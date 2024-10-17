import { toast } from "react-toastify";
import Http from "../../../interceptor";

const AddCourseCommentLike = async (ParamsId, refetch) => {
  try {
    const result = await Http.post(
      `/Course/AddCourseCommentLike?CourseCommandId=${ParamsId}`
    );
    if (result.success) {
      toast.success("کامنت مورد نظر لایک شد");
      refetch();
    } else {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddCourseCommentLike;
