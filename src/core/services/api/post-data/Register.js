import { toast } from "react-toastify";
import http from "../../interceptor";

const UserRegister = async (api, body) => {
  try {
    const response = await http.post(api, body);

    if (response.success) {
      toast.success(response.message);
      setTimeout(() => {
        window.location.pathname = "/authorize/login";
      }, 3000);
    } else {
      toast.error(
        response.error == null ? response.message : response.error[0]
      );
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا تلاش کنید");
  }
};

export default UserRegister;
