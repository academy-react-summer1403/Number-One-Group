import { toast } from "react-toastify";
import http from "../../interceptor";
import { setItem } from "../../local-storage/LocalStorage";

export const UserLogin = async (user) => {
  try {
    const response = await http.post("/Sign/Login", user);

    if (response.success) {
      setItem("token", response.token);
      toast.success(response.message);
      setTimeout(() => {
        window.location.pathname = "/";
      }, 3000);
    } else
      toast.error(
        response.error == null ? response.message : response.error[0]
      );
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا تلاش کنید");
  }
};
