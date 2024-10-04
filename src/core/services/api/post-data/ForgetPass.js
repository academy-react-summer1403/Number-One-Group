import { toast } from "react-toastify";
import http from "../../interceptor";
import { increaseAction } from "../../../../redux/slices/StepStatus";

const ForgetPass = async (body, dispatch) => {
  toast.info("در حال ارسال ایمیل");
  try {
    const response = await http.post("/Sign/ForgetPassword", body);
    
    if (response.success) {
      toast.success("ایمیل با موفقیت ارسال شد");
      setTimeout(() => {
        dispatch(increaseAction());
      }, 3000);
    } else {
      toast.error("ارسال ایمیل با مشکل مواجه شد");
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا تلاش کنید");
  }
};

export default ForgetPass;
