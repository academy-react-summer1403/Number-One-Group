import { toast } from "react-toastify";
import http from "../../interceptor";

const AddCourseDisLike = async (ParamsId, refetch) => {
  try {
    const result = await toast.promise(
      http.post(`/Course/AddCourseDissLike?CourseId=${ParamsId}`),
      {
        pending: "درحال ثبت شدن...",
        success: "دوره مورد نظر دیس لایک شد",
        error: "دوباره تلاش کنید",
      }
    );
    if (result.success) {
      refetch();
    }
  } catch (error) {
    console.log(error);
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default AddCourseDisLike;
