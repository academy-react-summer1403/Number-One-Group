import { toast } from "react-toastify";
import http from "../../interceptor";

const AddBlogDisLike = async (blogId, refetch) => {
  try {
    const response = await http.post(`/News/NewsDissLike/${blogId}`);

    if (response.success) {
      toast.success("دوره مورد نظر دیس لایک شد");
      refetch();
    } else {
      toast.error("دوباره تلاش کنید");
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default AddBlogDisLike;
