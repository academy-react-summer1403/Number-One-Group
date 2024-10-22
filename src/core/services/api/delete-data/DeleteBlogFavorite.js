import { toast } from "react-toastify";
import Http from "../../interceptor";

const DeleteBlogFavorite = async (ParamsId, refetch) => {
  try {
    const obj = {
      deleteEntityId: ParamsId,
    };
    const result = await toast.promise(
      Http.delete(`/News/DeleteFavoriteNews`, {
        data: obj,
        headers: { "Content-Type": "application/json" },
      }),
      {
        pending: "درحال ثبت شدن...",
        success: "وبلاگ به لیست علاقه مندی ها اضافه شد",
        error: "دوباره تلاش کنید",
      }
    );
    if (!result.success) {
      refetch && refetch();
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
    console.log(error);
  }
};

export default DeleteBlogFavorite;
