import { toast } from "react-toastify";
import http from "../../interceptor";
import { setInfoAction } from "../../../../redux/slices/UserInfo";
import { GetProfileInfo } from "../get-data";
import useFormData from "../../../hooks/form-data";

const SelectProfileImage = async (value, dispatch) => {
  try {
    const obj = { ImageId: value };
    const dataObj = useFormData(obj);

    const response = await toast.promise(
      http.post("/SharePanel/SelectProfileImage", dataObj),
      { pending: "در حال انتخاب عکس " }
    );

    if (response.success) {
      const profile = await GetProfileInfo();
      dispatch(setInfoAction(profile));
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    return error;
  }
};

export default SelectProfileImage;
