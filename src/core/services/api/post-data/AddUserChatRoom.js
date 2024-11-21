import axios from "axios";
import { toast } from "react-toastify";

const AddUserChatRoom = async (roomObj, refetch) => {
  try {
    const response = await axios.post(
      `https://6653aa591c6af63f46754aa6.mockapi.io/supoort`,
      roomObj
    );
    toast.success("پیام شما فرستاده شد");
    refetch();
    return response;
  } catch (error) {
    console.log(error);
    toast.error("پیام فرستاده نشد");
    return [];
  }
};

export default AddUserChatRoom;
