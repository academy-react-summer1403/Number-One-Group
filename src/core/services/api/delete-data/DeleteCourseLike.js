import { toast } from "react-toastify";
import Http from "../../interceptor";
import useFormData from "../../../hooks/form-data";

const DeleteCourseLike = async (ParamsId, refetch) => {
  try {
    const obj = {
      CourseLikeId: ParamsId,
    };
    const dataObj = useFormData(obj);
    const result = await Http.delete(`/Course/DeleteCourseLike`, {
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
  }
};

export default DeleteCourseLike;
