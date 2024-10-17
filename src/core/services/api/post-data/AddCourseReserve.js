import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddCourseReserve = async (ParamsId) => {
  console.log(ParamsId)
  try {
    const result = await Http.post(`/CourseReserve/ReserveAdd`, {
      courseId: ParamsId,
      Headers: { "Content-Type": "application/json" },
    });
    if (result.success) {
      toast.success("دوره به سبد خرید اضافه شد");
    } else {
      toast.error("دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddCourseReserve;
