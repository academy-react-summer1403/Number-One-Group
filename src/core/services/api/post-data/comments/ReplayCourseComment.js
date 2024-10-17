import Http from "../../../interceptor";
import { toast } from "react-toastify";
import useFormData from "../../../../hooks/form-data";

const AddReplyCourseComment = async (value, commentId, courseId,refetch,closeModal) => {
  try {
    const obj = {
      CommentId: commentId,
      CourseId: courseId,
      Title: "پاسخ به کامنت",
      Describe: value.description,
    };
    const formData = useFormData(obj);
    const response = await Http.post("/Course/AddReplyCourseComment", formData);

    if (response.success) {
      toast.success(" ریپلای شما ثبت شد");
      refetch();
      closeModal();
    } else {
      toast.error("لطفا متن کامنت را به درستی وارد کنید");
    }
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
};
export default AddReplyCourseComment;
