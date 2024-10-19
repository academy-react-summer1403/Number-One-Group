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
    console.log(formData);

    const result = await Http.post(`/Course/AddCommentCourse`, formData);
    if (result.success) {
      toast.success("نظر شما پس از تأیید توسط ادمین ثبت خواهد شد");
      // Accept();
      refetch();
    } else if(result.error) {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
    console.log(error);
  }
};

export default AddCourseComment;
