import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddCourseFavorite = async (ParamsId, refetch) => {
  try {
    const result = await toast.promise(
      Http.post(`/Course/AddCourseFavorite`, {
        courseId: ParamsId,
        Headers: { "Content-Type": "application/json" },
      }),
      {
        pending: "درحال ثبت شدن...",
        success: "دوره به لیست علاقه مندی ها اضافه شد",
        error: "دوباره تلاش کنید",
      }
    );
    if (result.success) {
      refetch();
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
    console.log(error);

  }
};

export default AddCourseFavorite;
