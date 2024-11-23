import http from "../../interceptor";
import { toast } from "react-toastify";

const AddUserMessageTeacher = async (id, message, refetch) => {
  try {
    const response = await toast.promise(
      http.put(
        `https://673cfd8a4db5a341d833a52f.mockapi.io/Teacher-Support/${id}`,
        message
      ),
      {
        pending: "در حال ارسال...",
        success: "پیام شما فرستاده شد",
        error: "پیام فرستاده نشد",
      }
    );
    if (response) {
      refetch();
    }
  } catch (error) {
    return [];
  }
};

export default AddUserMessageTeacher;
