import { toast } from "react-toastify";
import http from "../../interceptor";
import { increaseAction } from "../../../../redux/slices/StepStatus";

const ResetConfirmValue = async (config, dispatch, setUserId) => {
  try {
    const response = await http.get(`/Sign/Reset/${config}`);

    if (response.success) {
      toast.success(response.errors[0]);
      setUserId(response.id);
      setTimeout(() => {
        dispatch(increaseAction(2));
      }, 3000);
    }
    return response;
    
  } catch (error) {
    console.log(error);
    toast.error("مشکلی پیش آمده لطفا بعدا تلاش کنید");
  }
};

export default ResetConfirmValue;
