import { toast } from "react-toastify";
import http from "../../interceptor";

const ResetPassword = async (body) => {
  try {
    const response = await http.post("/Sign/Reset", body);
    
    if (response.success) {
      toast.success(response.message);
      setTimeout(() => {
        window.location.pathname = "/authorize/login";
      }, 3000);
    } else
      toast.error(
        response.error == null ? response.message : response.error[0]
      );
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا تلاش کنید");
  }
};

export default ResetPassword;
