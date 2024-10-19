import { toast } from "react-toastify";
import http from "../../interceptor";

const DeleteReserveCourse = async (id) => {
  try {
    const response = await http.delete(`/CourseReserve`, {
      data: { id: id },
    });
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(
        response.errors == null ? response.message : response.errors[0]
      );
    }
  } catch {
    toast.error("مشکلی پیش آمده بعد امتحان کنید");
  }
};

export default DeleteReserveCourse;
