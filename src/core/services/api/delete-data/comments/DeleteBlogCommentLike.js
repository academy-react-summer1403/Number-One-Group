import { toast } from "react-toastify";
import http from "../../../interceptor";

const DeleteBlogCommentLike = async (param, refetch) => {
  try {
    const response = await http.delete("/News/DeleteCommentLikeNews", {
      data: { deleteEntityId: param },
      headers: { "Content-Type": "application/json" },
    });

    if (response.success) {
      toast.success("نظر شما برداشته شد");
      refetch();
    } else {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default DeleteBlogCommentLike;
