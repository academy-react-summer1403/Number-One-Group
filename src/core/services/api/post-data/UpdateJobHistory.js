import { toast } from "react-toastify";
import http from "../../interceptor";

const UpdateJobHistory = async (values, refetch) => {
  try {
    const response = await toast.promise(
      http.post("/SharePanel/UpdateJobHistory", values),
      {
        error: "اطلاعات ویرایش نشد",
        pending: "در حال ویرایش...",
        success: "اطلاعات ویرایش شد",
      }
    );
    if (response.success) {
      refetch();
    }
  } catch (error) {
    return;
  }
};

export default UpdateJobHistory;
