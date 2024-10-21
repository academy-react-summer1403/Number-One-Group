import { toast } from "react-toastify";
import http from "../../interceptor";
import { setItem } from "../../../hooks/local-storage";

const UserLogin = async (user, navigate) => {
  try {
    const response = await toast.promise(http.post("/Sign/Login", user), {
      pending: "درحال پردازش...",
    });

    if (response.success) {
      if (response?.token) {
        setItem("token", response.token);
        setTimeout(() => {
          window.location.pathname = "/";
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("twoStep");
        }, 3000);
      }
      toast.success(response.message);
    } else
      toast.error(
        response.error == null ? response.message : response.error[0]
      );
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا تلاش کنید");
  }
};

export default UserLogin;
