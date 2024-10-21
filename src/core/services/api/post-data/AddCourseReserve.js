import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddCourseReserve = async (ParamsId) => {
  try {
    await toast.promise(
      Http.post(`/CourseReserve/ReserveAdd`, {
        courseId: ParamsId,
        Headers: { "Content-Type": "application/json" },
      }),
      {
        pending: "در حال رزرو شدن...",
        success: "دوره به سبد خرید اضافه شد",
        error: "لطفا دوباره تلاش کنید",
      }
    );
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
  }
};

export default AddCourseReserve;
