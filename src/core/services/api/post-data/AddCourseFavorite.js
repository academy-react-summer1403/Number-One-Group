import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddCourseFavorite = async (ParamsId) => {
  try {
    console.log(ParamsId)
    const result = await Http.post(`/Course/AddCourseFavorite`, {
      courseId: ParamsId,
      Headers: { "Content-Type": "application/json" }
    });
    if (result.success) {
      toast.success(" دوره به لیست علاقه مندی ها اضافه شد");
    } else {
      toast.error("دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddCourseFavorite;
