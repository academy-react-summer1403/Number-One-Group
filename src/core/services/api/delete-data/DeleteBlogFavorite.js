import { toast } from "react-toastify";
import Http from "../../interceptor";

const DeleteBlogFavorite = async (ParamsId, refetch) => {
  try {
    const result = await Http.delete(`/News/DeleteFavoriteNews`, {
      data: { deleteEntityId: ParamsId },
      headers: { "Content-Type": "application/json" },
    });
    if (result.success) {
      toast.success("وبلاگ مورد نظر از لیست علاقمندی ها حذف شد");
      refetch();
    } else {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default DeleteBlogFavorite;
