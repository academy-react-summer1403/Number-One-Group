import { toast } from "react-toastify";

const handleToLike = (
  UserInfo,
  variant,
  id,
  api,
  status,
  Delete,
  btnStatus,
  type,
  userLikeId,
  refetch
) => {
  if (!UserInfo) {
    toast.error("لطفا لاگین کنید");
  } else {
    // Type 1
    if (variant === "courseComment") {
      if (status === "-" || status !== btnStatus) {
        api(id, refetch);
      } else {
        Delete(userLikeId, refetch);
      }
    }

    // Type 2
    else if (variant === "courseDetails") {
      if (status == 1) {
        Delete(userLikeId, refetch);
      } else {
        api(id, refetch);
      }
    }

    // Type 3
    else if (variant === "blogDetails") {
      if (status) {
        Delete(userLikeId, refetch);
      } else {
        api(id, type, refetch);
      }
    }

    // The rest of the types
    else {
      if (status) {
        Delete(userLikeId, refetch);
      } else {
        api(id, refetch);
      }
    }
  }
};
export default handleToLike;
