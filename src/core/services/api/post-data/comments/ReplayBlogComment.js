import Http from "../../../interceptor";
import { toast } from "react-toastify";

// value, commentId, courseId,refetch,closeModal
const AddReplayBlogComment = async (
  value,
  commentId,
  newsId,
  refetch,
  closeModal,
  user,
) => {
  try {
    const obj = {
      newsId: newsId,
      userIpAddress: "",
      title: "پاسخ به کامنت",
      describe: value.description,
      userId: user?.userImage[0]?.userProfileId,
      parentId: commentId,
    };
    const response = await toast.promise(
      Http.post(
        "/News/CreateNewsReplyComment",
        obj
        // headers: { "Content-Type": "application/json" },
      ),
      {
        pending: "درحال ثبت شدن...",
        success: "ریپلای شما پس از تائید ادمین ثبت خواهد شد",
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
export default AddReplayBlogComment;
