import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { AddBlogCommentLike, AddBlogDisLike, AddBlogLike, AddCourseCommentLike, AddCourseDisLike, AddCourseLike, CourseCommentDisLike } from "../../core/services/api/post-data";
import { DeleteBlogCommentLike, DeleteBlogLike, DeleteCourseCommentLike, DeleteCourseLike } from "../../core/services/api/delete-data";
import { toast } from "react-toastify";

const ToLike = ({
    userLikeId,
    likeNumber,
    disLikeNumber,
    LikeStatus,
    DissLikeStatus,
    numberStatus,
    Id,
    variant,
    variantStyle,
    refetch,
    style,
}) => {
    const UserInfo = useSelector(state => state.UserInfo.info)
    // Variants
    const ApiVariant = {
        'course': [AddCourseLike, AddCourseDisLike, DeleteCourseLike],
        'courseDetails': [AddCourseLike, AddCourseDisLike, DeleteCourseLike],
        'courseComment': [AddCourseCommentLike, CourseCommentDisLike, DeleteCourseCommentLike],
        'blogDetails': [AddBlogCommentLike, AddBlogCommentLike, DeleteBlogCommentLike],
        'blog': [AddBlogLike, AddBlogDisLike, DeleteBlogLike],
    }
    const statusVariant = {
        'course': { like: LikeStatus == false, disLike: DissLikeStatus == false },
        'blog': { like: LikeStatus == false, disLike: DissLikeStatus == false },
        'blogDetails': { like: LikeStatus == false, disLike: DissLikeStatus == false },
        'courseDetails': { like: LikeStatus == 0, disLike: DissLikeStatus == 0 },
        'courseComment': { like: LikeStatus !== "LIKED", disLike: LikeStatus !== "DISSLIKED" }
    }

    const iconSize = (variantStyle == 'details' ? 25 : 17);

    // like & disLike function
    const handleToLike = (id, api, status, Delete, btnStatus, type) => {
        if (!UserInfo) {
            toast.error('لطفا لاگین کنید')
        }
        else {
            if (variant === 'courseComment') {
                if (status === '-' || status !== btnStatus) {
                    api(id, refetch);
                }
                else {
                    Delete(userLikeId, refetch);
                }
            }
            else if (variant === 'courseDetails') {
                if (status == 1) {
                    Delete(userLikeId, refetch)
                }
                else {
                    api(id, refetch);
                }
            }
            else if (variant === 'blogDetails') {
                if (status) {
                    Delete(userLikeId, refetch)
                }
                else {
                    api(id, type, refetch);
                }
            }
            else {
                if (status) {
                    Delete(userLikeId, refetch)
                }
                else {
                    api(id, refetch);
                }
            }
        }
    }
    return (
        <div className="flex gap-1.5">
            <div onClick={() => handleToLike(Id, ApiVariant?.[variant][0],
                LikeStatus, ApiVariant?.[variant][2], "LIKED", true)} className={`px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer ${style}`}>
                {statusVariant?.[variant]?.like ? <BiLike size={iconSize} /> : <BiSolidLike size={iconSize} />}
                <span className={numberStatus}>{likeNumber}</span>
            </div>
            <div onClick={() => handleToLike(Id, ApiVariant?.[variant][1],
                variant == 'courseComment' ? LikeStatus : DissLikeStatus, ApiVariant?.[variant][2], "DISSLIKED", false)} className={`px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer ${style}`}>
                {statusVariant?.[variant]?.disLike ? <BiDislike size={iconSize} /> : <BiSolidDislike size={iconSize} />}
                <span className={numberStatus}>{disLikeNumber}</span>
            </div>
        </div>
    )
}
export default ToLike