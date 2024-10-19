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
  parentId,

) => {
  try {
    const obj = {
      newsId: newsId,
      userIpAddress: user?.email,
      Title: "",
      describe: value.description,
      userId: user?.userImage[0]?.userProfileId,
      parentId: parentId,
    };
    console.log(obj)
    const response = await Http.post("/News/CreateNewsReplyComment", {
      data: obj,
      headers: { "Content-Type": "application/json" },
    });

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
export default AddReplayBlogComment;
