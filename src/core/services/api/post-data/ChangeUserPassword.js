import { toast } from "react-toastify";
import http from "../../interceptor";

const ChangeUserPassword = async (body) => {
    console.log(body)
  try {
    const response = await toast.promise(
      http.post("/SharePanel/ChangePassword", body),
      { pending: "در حال تغییر رمز..." }
    );
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده بعدا امتحان کنید");
  }
};

export default ChangeUserPassword;
