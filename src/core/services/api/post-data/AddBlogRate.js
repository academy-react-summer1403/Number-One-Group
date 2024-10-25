import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddBlogRate = async (itemId, rateNumber) => {
  try {
    const result = await toast.promise(
      Http.post(`/News/NewsRate?NewsId=${itemId}&RateNumber=${rateNumber}`),
      {
        pending: "درحال ثبت شدن...",
        success: "نظر شما ثبت شد",
        error: "دوباره تلاش کنید",
      }
    );
  } catch (error) {
    console.log(error);
    toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
  }
};

export default AddBlogRate;
