import { toast } from "react-toastify";
import Http from "../../../interceptor";

const AddBlogComment = async (newsId, data, refetch, user) => {
  try {
    const obj = {
      newsId: newsId,
      userIpAddress: "",
      title: data.title,
      describe: data.description,
      userId: user?.userImage[0]?.userProfileId,
    };
    const result = await toast.promise(
      Http.post(
        `/News/CreateNewsComment`,
        obj
        // headers: { "Content-Type": "application/json" },
      ),
      {
        pending: "درحال ثبت شدن...",
        success: "نظر شما پس از تأیید توسط ادمین ثبت خواهد شد",
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

export default AddBlogComment;
