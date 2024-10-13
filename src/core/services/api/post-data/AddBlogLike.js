import { toast } from "react-toastify";
import http from "../../interceptor";

const AddBlogLike = async (blogId, refetch) => {
  try {
    const response = await http.post(`/News/NewsLike/${blogId}`);

    if (response.success) {
      toast.success("وبلاگ مورد نظر لایک شد");
      refetch();
    } else {
      toast.error("دوباره تلاش کنید");
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default AddBlogLike;
