import http from "../../interceptor";
import { toast } from "react-toastify";

const AddUserChatRoomAdmin = async (roomObj, refetch) => {
  try {
    const response = await toast.promise(
      http.post(`https://6653aa591c6af63f46754aa6.mockapi.io/supoort`, roomObj),
      {
        success: "پیام شما فرستاده شد",
        error: "پیام فرستاده نشد",
        pending: "در حال ارسال...",
      }
    );
    refetch();
    return response;
  } catch (error) {
    return [];
  }
};

export default AddUserChatRoomAdmin;
