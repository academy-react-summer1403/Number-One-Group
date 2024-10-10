import { toast } from "react-toastify";
import http from "../../interceptor";
import { increaseAction } from "../../../../redux/slices/StepStatus";

const VerifyMessage = async (api, body, dispatch) => {
  try {
    const response = await http.post(api, body);

    if (response.success && response.message != "درخواست نامعتبر") {
      toast.success(response.message);
      setTimeout(() => {
        dispatch(increaseAction());
      }, 3000);
    } else
      toast.error(
        response.error == null ? response.message : response.error[0]
      );
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا تلاش کنید");
  }
};

export default VerifyMessage;
