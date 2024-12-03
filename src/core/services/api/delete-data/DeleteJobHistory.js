import { toast } from "react-toastify";
import http from "../../interceptor";

const DeleteJobHistory = async (id, refetch) => {
  try {
    const response = await toast.promise(
      http.delete(`/SharePanel/DeleteJobHistory?HistoryId=${id}`),
      {
        error: "آیتم حذف نشد",
        pending: "در حال حذف...",
        success: "آیتم با موفقیت حذف شد",
      }
    );
    if (response.success) {
      refetch();
    }
  } catch (error) {
    return;
  }
};

export default DeleteJobHistory;
