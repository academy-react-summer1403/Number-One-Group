import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddBlogFavorite = async (ParamsId, refetch) => {
  try {
    const result = await toast.promise(
      Http.post(`/News/AddFavoriteNews?NewsId=${ParamsId}`),
      {
        pending: "درحال ثبت شدن...",
        success: "وبلاگ به لیست علاقه مندی ها اضافه شد",
        error: "دوباره تلاش کنید",
      }
    );
    if (result.success) {
      refetch();
    }
  } catch (error) {
    console.log(error);
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
  }
};

export default AddBlogFavorite;
