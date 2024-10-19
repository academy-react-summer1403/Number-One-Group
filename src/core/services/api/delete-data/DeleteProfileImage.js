import { toast } from "react-toastify";
import http from "../../interceptor";
import { setInfoAction } from "../../../../redux/slices/UserInfo";
import useFormData from "../../../hooks/form-data";
import { GetProfileInfo } from "../get-data";

const DeleteProfileImage = async (value, dispatch) => {
  try {
    const obj = { DeleteEntityId: value };
    const dataObj = useFormData(obj);

    const response = await toast.promise(
      http.delete("/SharePanel/DeleteProfileImage", { data: dataObj }),
      { pending: "در حال حذف کردن عکس " }
    );

    if (response.success) {
      const profile = await GetProfileInfo();
      dispatch(setInfoAction(profile));
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
    console.log(error);
  }
};

export default DeleteProfileImage;
