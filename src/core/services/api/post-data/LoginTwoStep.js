import { toast } from "react-toastify";
import http from "../../interceptor";
import { setItem } from "../../../hooks/local-storage";

const LoginTwoStep = async (code, user, dispatch) => {
  try {
    const response = await http.post(
      `/Sign/LoginTwoStep?VrifyCode=${code}`,
      user
    );

    if (response.success) {
      setItem("token", response.token);
      setTimeout(() => {
        window.location.pathname = "/userPanel";
        dispatch(false);
      }, 3000);
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export default LoginTwoStep;
