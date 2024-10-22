import { toast } from "react-toastify";
import Http from "../../interceptor";
import useFormData from "../../../hooks/form-data";

const DeleteCourseLike = async (ParamsId, refetch) => {
  try {
    const obj = {
      CourseLikeId: ParamsId,
    };
    const dataObj = useFormData(obj);
    const result = await toast.promise(
      Http.delete(`/Course/DeleteCourseLike`, {
        data: dataObj,
        headers: { "Content-Type": "multipart/form-data" },
      }),
      {
        pending: "درحال ثبت شدن...",
        success: "نظر شما برداشته شد",
        error: "دوباره تلاش کنید",
      }
    );
    if (result.success) {
      refetch();
    }
  } catch (error) {
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
    console.log(error);
  }
};

export default DeleteCourseLike;
