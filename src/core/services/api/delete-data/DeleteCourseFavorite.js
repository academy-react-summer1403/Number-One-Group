import { toast } from "react-toastify";
import Http from "../../interceptor";
import useFormData from "../../../hooks/form-data";

const DeleteCourseFavorite = async (ParamsId, refetch) => {
  try {
    const obj = {
      CourseFavoriteId: ParamsId,
    };
    const dataObj = useFormData(obj);
    const result = await toast.promise(
      Http.delete(`/Course/DeleteCourseFavorite`, {
        data: dataObj,
        headers: { "Content-Type": "multipart/form-data" },
      }),
      {
        pending: "درحال ثبت شدن...",
        success: "دوره از لیست علاقه مندی ها حذف شد",
        error: "دوباره تلاش کنید",
      }
    );
    if (result.success) {
      refetch && refetch();
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
    console.log(error);
  }
};

export default DeleteCourseFavorite;
