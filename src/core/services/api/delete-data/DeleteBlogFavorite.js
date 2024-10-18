import { toast } from "react-toastify";
import Http from "../../interceptor";

const DeleteBlogFavorite = async (ParamsId,refetch) => {
  try {
    const obj = {
      deleteEntityId: ParamsId,
    };
    const result = await Http.delete(`/News/DeleteFavoriteNews`, {
      data: obj,
      headers: { "Content-Type": "application/json" },
    });
    if (!result.success) {
      toast.success("وبلاگ مورد نظر از لیست علاقمندی ها حذف شد");
      refetch()
    } else if (result.error) {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default DeleteBlogFavorite;
