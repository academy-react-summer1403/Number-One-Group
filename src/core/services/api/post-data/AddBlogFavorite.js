import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddBlogFavorite = async (ParamsId, refetch) => {
  try {
    console.log(ParamsId);
    const result = await Http.post(`/News/AddFavoriteNews?NewsId=${ParamsId}`);
    if (result.success) {
      toast.success(" وبلاگ به لیست علاقه مندی ها اضافه شد");
      refetch();
    } else {
      toast.error("دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddBlogFavorite;
