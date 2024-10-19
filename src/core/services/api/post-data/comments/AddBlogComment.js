import { toast } from "react-toastify";
import Http from "../../../interceptor";

const AddBlogComment = async (newsId, data, refetch, user) => {
  try {
    const obj = {
      newsId: newsId,
      userIpAddress: user?.latitude,
      title: data.description,
      describe: data.description,
      userId: user?.userImage[0]?.userProfileId,
    };
    const result = await Http.post(`/News/CreateNewsComment`, {
      obj,
      headers: { "Content-Type": "application/json" },
    });
    if (result.success) {
      toast.success("نظر شما پس از تأیید توسط ادمین ثبت خواهد شد");
      refetch();
    } else if (result.error) {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddBlogComment;
