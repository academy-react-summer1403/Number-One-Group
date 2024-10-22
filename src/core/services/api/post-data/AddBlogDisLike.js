import { toast } from "react-toastify";
import http from "../../interceptor";

const AddBlogDisLike = async (blogId, refetch) => {
  try {
    const response = await toast.promise(
      http.post(`/News/NewsDissLike/${blogId}`),
      {
        pending: "درحال ثبت شدن...",
        success: "وبلاگ مورد نظر دیس لایک شد",
        error: "دوباره تلاش کنید",
      }
    );
    if (response.success) {
      refetch();
    } 
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
    console.log(error)
  }
};

export default AddBlogDisLike;
