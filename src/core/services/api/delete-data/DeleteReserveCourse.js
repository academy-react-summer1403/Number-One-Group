import { toast } from "react-toastify";
import http from "../../interceptor";

const DeleteReserveCourse = async (id) => {
  try {
    const response = await toast.promise(
      http.delete(`/CourseReserve`, {
        data: { id: id },
      }),
      {
        pending: "درحال ثبت شدن...",
        success: "دوره با موفقیت حذف شد",
      }
    );

    if (response.error) {
      toast.error(
        response.errors == null ? response.message : response.errors[0]
      );
    }
  } catch {
    toast.error("مشکلی پیش آمده بعد امتحان کنید");
  }
};

export default DeleteReserveCourse;
