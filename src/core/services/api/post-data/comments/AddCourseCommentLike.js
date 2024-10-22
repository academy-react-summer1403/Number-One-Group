import { toast } from "react-toastify";
import Http from "../../../interceptor";

const AddCourseCommentLike = async (ParamsId, refetch) => {
  try {
    const result = await toast.promise(
      Http.post(`/Course/AddCourseCommentLike?CourseCommandId=${ParamsId}`),
      {
        pending: "درحال ثبت شدن...",
        success: "کامنت مورد نظر لایک شد",
        error: "دوباره تلاش کنید",
      }
    );
    if (result.success) {
      refetch();
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
    console.log(error);
  }
};

export default AddCourseCommentLike;
