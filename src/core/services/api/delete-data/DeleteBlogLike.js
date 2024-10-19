import { toast } from "react-toastify";
import http from "../../interceptor";

const DeleteBlogLike = async (param, refetch) => {
  console.log(param)
  try {
    const obj ={
      deleteEntityId: param
    }
    const response = await http.delete("/News/DeleteLikeNews", {
      data: obj,
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

export default DeleteBlogLike;
