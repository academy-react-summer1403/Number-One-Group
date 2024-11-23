import http from "../../interceptor";
import { toast } from "react-toastify";

const AddUserMessageAdmin = async (id, message, refetch) => {
  try {
    const response = await toast.promise(
      http.put(
        `https://6653aa591c6af63f46754aa6.mockapi.io/supoort/${id}`,
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

export default AddUserMessageAdmin;
