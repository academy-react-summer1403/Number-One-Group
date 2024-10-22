import { toast } from "react-toastify";
import http from "../../interceptor";

const DeleteBlogLike = async (param, refetch) => {
  console.log(param);
  try {
    const obj = {
      deleteEntityId: param,
    };
    const response = await toast.promise(
      http.delete("/News/DeleteLikeNews", {
        data: obj,
      }),
      {
        pending: "درحال ثبت شدن...",
        success: "نظر شما برداشته شد",
        error: "دوباره تلاش کنید",
      }
    );

    if (response.success) {
      refetch();
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
    console.log(error);
  }
};

export default DeleteBlogLike;
