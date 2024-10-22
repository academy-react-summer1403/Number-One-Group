import { toast } from "react-toastify";
import http from "../../interceptor";

const AddBlogLike = async (blogId, refetch) => {
  try {
    const response = await toast.promise(
      http.post(`/News/NewsLike/${blogId}`),
      {
        pending: "درحال ثبت شدن...",
        success: "وبلاگ مورد نظر لایک شد",
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

export default AddBlogLike;
