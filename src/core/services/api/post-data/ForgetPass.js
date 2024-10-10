import { toast } from "react-toastify";
import http from "../../interceptor";
import { increaseAction } from "../../../../redux/slices/StepStatus";

const ForgetPass = async (body, dispatch) => {
  try {
    const response = await toast.promise(
      http.post("/Sign/ForgetPassword", body),
      { pending: "...در حال ارسال ایمیل" }
    );

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
