import { toast } from "react-toastify";
import Http from "../../../interceptor";

const AddBlogCommentLike = async (ParamsId, likeType, refetch) => {
  try {
    const result = await toast.promise(
      Http.post(`/News/CommentLike/${ParamsId}?LikeType=${likeType}`),
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
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
    console.log(error)
  }
};

export default AddBlogCommentLike;
