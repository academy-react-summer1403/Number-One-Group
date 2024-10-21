import { toast } from "react-toastify";
import http from "../../interceptor";

const AddCourseLike = async (ParamsId, refetch) => {
  try {
    const result = await toast.promise(
      http.post(`/Course/AddCourseLike?CourseId=${ParamsId}`),
      {
        pending: "درحال ثبت شدن...",
        success: "دوره مورد نظر لایک شد",
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

export default AddCourseLike;
