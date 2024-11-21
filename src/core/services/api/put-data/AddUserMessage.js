import axios from "axios";
import { toast } from "react-toastify";

const AddUserMessage = async (id, message, refetch) => {
  console.log(id,message)
  try {
    const response = await axios.put(
      `https://6653aa591c6af63f46754aa6.mockapi.io/supoort/${id}`,
      message
    );
    // return response;
    toast.success("پیام شما فرستاده شد");
    refetch();

  } catch (error) {
    console.log(error);
    toast.error("پیام فرستاده نشد");
    return [];

  }
};

export default AddUserMessage;
