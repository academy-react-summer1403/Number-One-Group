import { toast } from "react-toastify";
import Http from "../../../interceptor";

const AddBlogCommentLike = async (ParamsId, likeType,refetch) => {
  alert()
  console.log(likeType,ParamsId)
  try {
    const result = await Http.post(
      `/News/CommentLike/${ParamsId}?LikeType=${likeType}`,
    );
    if (result.success) {
      toast.success("کامنت مورد نظر لایک شد");
      refetch();
    } else {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
  }
};

export default AddBlogCommentLike;
