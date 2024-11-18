import { toast } from "react-toastify";
import http from "../../interceptor";
import useFormData from "../../../hooks/form-data";

const StudentAddPeymentImage = async (values) => {
  try {
    const dataObj = useFormData(values);
    const response = await toast.promise(
      http.post("/CoursePayment/StudentAddPeymentImage", dataObj),
      { pending: "در حال پردازش..." }
    );
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default StudentAddPeymentImage;
