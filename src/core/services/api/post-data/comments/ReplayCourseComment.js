import Http from "../../../interceptor";
import { toast } from "react-toastify";
import useFormData from "../../../../hooks/form-data";

const AddReplyCourseComment = async (
  value,
  commentId,
  courseId,
  refetch,
  closeModal
) => {
  try {
    const obj = {
      CommentId: commentId,
      CourseId: courseId,
      Title: "پاسخ به کامنت",
      Describe: value.description,
    };
    const formData = useFormData(obj);
    const response = await toast.promise(
      Http.post("/Course/AddReplyCourseComment", formData),
      {
        pending: "درحال ثبت شدن...",
        success: " ریپلای شما ثبت شد",
        error: "لطفا متن کامنت را به درستی وارد کنید",
      }
    );

    if (response.success) {
      refetch();
      closeModal();
    }
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
};
export default AddReplyCourseComment;
