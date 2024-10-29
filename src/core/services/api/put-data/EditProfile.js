import { toast } from "react-toastify";
import http from "../../interceptor";
import useFormData from "../../../hooks/form-data";

const EditProfile = async (value) => {
  try {
    const dataObj = useFormData(value);

    const response = await toast.promise(
      http.put("/SharePanel/UpdateProfileInfo", dataObj),
      { pending: " در حال ویرایش اطلاعات ، منتظر بمانید ." }
    );

    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.errors);
    }
  } catch (error) {
    console.log(error);
    // toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default EditProfile;
