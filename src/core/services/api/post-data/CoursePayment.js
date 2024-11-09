import { toast } from "react-toastify";
import http from "../../interceptor";
import useFormData from "../../../hooks/form-data";

const CoursePayment = async (values, navigate) => {
  try {
    const dataObj = useFormData(values);
    const response = await toast.promise(
      http.post("/CoursePayment/StudentAddPeyment", dataObj),
      { pending: "...در حال پردازش" }
    );
    if (response.success) {
      toast.success(response.message);
      navigate(
        `/userPanel/payment/invoice/${values.CourseId}/${values.PaymentInvoiceNumber}`
      );
    } else {
      toast.error(
        response.error == null ? response.message : response.error[0]
      );
    }
  } catch {
    toast.error("مشکلی پیش آمده بعدا امتحان کنید");
    return false;
  }
};

export default CoursePayment;
