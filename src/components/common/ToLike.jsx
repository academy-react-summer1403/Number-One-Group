import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { AddBlogCommentLike, AddBlogDisLike, AddBlogLike, AddCourseCommentLike, AddCourseDisLike, AddCourseLike, CourseCommentDisLike } from "../../core/services/api/post-data";
import { DeleteBlogCommentLike, DeleteBlogLike, DeleteCourseCommentLike, DeleteCourseLike } from "../../core/services/api/delete-data";
import handleToLike from "../../core/hooks/to-like";

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
    const dispatch = useDispatch()
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
    return (
        <div className="flex gap-1.5">
            {/* Like Button */}
            <div onClick={() => handleToLike(UserInfo, variant, Id, ApiVariant?.[variant][0],
                LikeStatus, ApiVariant?.[variant][2], "LIKED", true, userLikeId, refetch, dispatch)}

                className={`px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer ${style}`}>
                {statusVariant?.[variant]?.like ? <BiLike size={iconSize} /> : <BiSolidLike size={iconSize} />}
                <span className={numberStatus}>{likeNumber}</span>
            </div>
            {/* disLike Button */}
            <div onClick={() => handleToLike(UserInfo, variant, Id, ApiVariant?.[variant][1],
                variant == 'courseComment' ? LikeStatus : DissLikeStatus, ApiVariant?.[variant][2], "DISSLIKED", false, userLikeId, refetch, dispatch)}

                className={`px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer ${style}`}>
                {statusVariant?.[variant]?.disLike ? <BiDislike size={iconSize} /> : <BiSolidDislike size={iconSize} />}
                <span className={numberStatus}>{disLikeNumber}</span>
            </div>
        </div>
    )
}
export default ToLike