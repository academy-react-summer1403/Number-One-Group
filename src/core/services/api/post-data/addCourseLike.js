import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddCourseLike = async (ParamsId, refetch) => {
  try {
    const result = await Http.post(
      `/Course/AddCourseLike?CourseId=${ParamsId}`
    );
    if (result.success) {
      toast.success("دوره مورد نظر لایک شد");
      refetch();
    } else {
      toast.error("دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddCourseLike;
