import { toast } from "react-toastify";
import http from "../../interceptor";
import useFormData from "../FormData";

const DeleteCourseLike = async (ParamsId, refetch) => {
  try {
    const obj = { CourseLikeId: ParamsId };
    const dataObj = useFormData(obj);

    const result = await http.delete(`/Course/DeleteCourseLike`, {
      data: dataObj,
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (result.success) {
      toast.success("نظر شما برداشته شد");
      refetch();
    } else {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
    toast.error("مشکلی پیش آمده لطفا بعدا امتحان کنید");
  }
};

export default DeleteCourseLike;
