import { toast } from "react-toastify";
import Http from "../../../interceptor";

const DeleteCourseCommentLike = async (ParamsId, refetch) => {
  // try {
  //   // const obj = {
  //   //   CourseCommandId: ParamsId,
  //   // };
  //   // const dataObj = onFormData(obj);
  //   // console.log(dataObj.CourseCommandId)
  //   const result = await Http.delete(
  //     `/Course/DeleteCourseCommentLike${ParamsId}`
  //   );

  //   if (result.success) {
  //     toast.success("نظر شما برداشته شد");
  //     refetch();
  //     return result;
  //   } else {
  //     toast.error("لطفا دوباره تلاش کنید");
  //   }
  //   return;
  // } catch (error) {
  //   console.log(error);
  // }
};

export default DeleteCourseCommentLike;
