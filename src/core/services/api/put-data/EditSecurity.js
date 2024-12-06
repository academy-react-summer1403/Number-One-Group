import { toast } from "react-toastify";
import http from "../../interceptor";

const EditSecurity = async (params) => {
  try {
    const response = await toast.promise(
      http.put("/SharePanel/EditSecurity", params),
      {
        pending: "در حال پردازش..."
      }
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

export default EditSecurity;
