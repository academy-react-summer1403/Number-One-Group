import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { AddBlogDisLike, AddBlogLike, AddCourseDisLike, AddCourseLike } from "../../core/services/api/post-data";
import { DeleteBlogLike, DeleteCourseLike } from "../../core/services/api/delete-data";
import { toast } from "react-toastify";

const ToLike = ({
    userLikeId,
    likeNumber,
    disLikeNumber,
    likeStatus,
    disLikeStatus,
    numberStatus,
    Id,
    variant,
    refetch,
}) => {
    const ApiVariant = {
        'course': [AddCourseLike, AddCourseDisLike, DeleteCourseLike],
        'blog': [AddBlogLike, AddBlogDisLike, DeleteBlogLike]
    }

    const UserInfo = useSelector(state => state.UserInfo.info)

    // like & disLike function
    const handleToLike = (itemId, userLikeId, api, status, Delete) => {
        if (!UserInfo) {
            toast.error('لطفا لاگین کنید!')
        } else {
            if (status) Delete(userLikeId, refetch)
            else api(itemId, refetch)
        }
    }

    return (
        <div className="flex gap-1.5">
            <div onClick={() => handleToLike(Id, userLikeId, ApiVariant?.[variant][0], likeStatus, ApiVariant?.[variant][2])} className="px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer">
                {likeStatus == false ? <BiLike /> : <BiSolidLike />}
                <span className={numberStatus}>{likeNumber}</span>
            </div>
            <div onClick={() => handleToLike(Id, userLikeId, ApiVariant?.[variant][1], disLikeStatus, ApiVariant?.[variant][2])} className="px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer">
                {disLikeStatus == false ? <BiDislike /> : <BiSolidDislike />}
                <span className={numberStatus}>{disLikeNumber}</span>
            </div>
        </div>
    )
}
export default ToLike