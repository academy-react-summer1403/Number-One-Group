import { toast } from "react-toastify";
import http from "../../interceptor";

const AddCourseDisLike = async (ParamsId, refetch) => {
  try {
    const result = await http.post(
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
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default AddCourseDisLike;
