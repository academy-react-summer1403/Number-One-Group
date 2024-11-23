import http from "../../interceptor";
import { toast } from "react-toastify";

const AddUserChatRoomTeacher = async (roomObj, refetch) => {
  try {
    const response = await toast.promise(
      http.post(
        `https://673cfd8a4db5a341d833a52f.mockapi.io/Teacher-Support`,
        roomObj
      ),
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

export default AddUserChatRoomTeacher;
