import { toast } from "react-toastify";
import Http from "../../../interceptor";
import useFormData from "../../../../hooks/form-data";

const AddCourseComment = async (CourseId, data, refetch) => {
  try {
    const obj = {
      CourseId: CourseId,
      Title: data.title,
      Describe: data.description,
    };
    const formData = useFormData(obj);
    const result = await toast.promise(
      Http.post(`/Course/AddCommentCourse`, formData),
      {
        pending: "درحال ثبت شدن...",
        success: "نظر شما پس از تایید ادمین ثبت خواهد شد",
        error: "طول متن کامنت کمتر از حد مجاز",
      }
    );
    if (result.success) {
      refetch();
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
    console.log(error);
  }
};

export default AddCourseComment;
