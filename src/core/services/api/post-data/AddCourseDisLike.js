import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddCourseDisLike = async (ParamsId, refetch) => {
  try {
    const result = await Http.post(
      `/Course/AddCourseDissLike?CourseId=${ParamsId}`
    );
    if (result.success) {
      toast.success("دوره مورد نظر دیس لایک شد");
      refetch();
    } else {
      toast.error("دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddCourseDisLike;
