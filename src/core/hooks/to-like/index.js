import { toast } from "react-toastify";
import { setStatusModal } from "../../../redux/slices/LoginPopup";

const handleToLike = async (
  UserInfo,
  variant,
  id,
  api,
  status,
  Delete,
  btnStatus,
  type,
  userLikeId,
  refetch,
  dispatch
) => {

  if (!UserInfo) {
    toast.error("لطفاً برای دسترسی به امکانات سایت، ابتدا وارد حساب کاربری خود شوید.");
    dispatch(setStatusModal(true));
    return;
  }

  try {
    // Type 1
    if (variant === "courseComment") {
      if (status === "-" || status !== btnStatus) {
        await api(id, refetch);
      } else {
        await Delete(userLikeId, refetch);
      }
    }

    // Type 2
    else if (variant === "courseDetails") {
      if (status == 1) {
        await Delete(userLikeId, refetch);
      } else {
        await api(id, refetch);
      }
    }

    // Type 3
    else if (variant === "blogDetails") {
      if (status) {
        await Delete(userLikeId, refetch);
      } else {
        await api(type, id, refetch);
      }
    }

    // The rest of the types
    else {
      if (status) {
        await Delete(userLikeId, refetch);
      } else {
        await api(id, refetch);
      }
    }
  } catch (error) {
    console.error("Error in handleToLike:", error);
    toast.error("خطا در عملیات لایک/دیسلایک");
  }
};

export default handleToLike;
