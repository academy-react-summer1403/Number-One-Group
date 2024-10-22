import { toast } from "react-toastify";
import http from "../../../interceptor";

const DeleteBlogCommentLike = async (param, refetch) => {
  try {
    const response = await toast.promise( http.delete("/News/DeleteCommentLikeNews", {
      data: { deleteEntityId: param },
      headers: { "Content-Type": "application/json" },
    }), {
      pending: "درحال ثبت شدن...",
      success: "نظر شما برداشته شد",
      error: "دوباره تلاش کنید",
    })

    if (response.success) {
      refetch();
    } 
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
    console.log(error)
  }
};

export default DeleteBlogCommentLike;
