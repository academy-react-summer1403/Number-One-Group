import { toast } from "react-toastify";
import http from "../../interceptor";

const CreateJobHistory = async (values) => {
  try {
    const response = await toast.promise(
      http.post("/SharePanel/CreateJobHistory", values),
      {
        error: "شغل ساخته نشد",
        pending: "در حال ساختن...",
        success: "شغل با موفقیت ساخته شد",
      }
    );
  } catch (error) {
    return;
  }
};

export default CreateJobHistory;
