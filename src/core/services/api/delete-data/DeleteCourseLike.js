import { toast } from "react-toastify";
import Http from "../../interceptor";
import onFormData from "../FormData";

const DeleteCourseLike = async (ParamsId, refetch) => {
  try {
    const obj = {
      CourseLikeId: ParamsId,
    };
    const dataObj = onFormData(obj);
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
