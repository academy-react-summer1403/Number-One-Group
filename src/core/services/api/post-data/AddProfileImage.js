import { toast } from "react-toastify";
import http from "../../interceptor";
import { setInfoAction } from "../../../../redux/slices/UserInfo";
import SelectProfileImage from "./SelectProfileImage";
import { GetProfileInfo } from "../get-data";

const AddProfileImage = async (file, dispatch) => {
  try {
    const response = await toast.promise(
      http.post("/SharePanel/AddProfileImage", file),
      { pending: "در حال افزودن عکس..." }
    );

    if (response.success) {
      const profile = await GetProfileInfo();
      dispatch(setInfoAction(profile));
      profile.currentPictureAddress === "Not-set" &&
        SelectProfileImage(profile.userImage[0].id, dispatch);
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default AddProfileImage;
