import { UnCheckedHeartIcon, CheckedHeartIcon } from "../../core/icon";
import { useMediaQuery } from "react-responsive";
import { Skeleton, Tooltip } from "@nextui-org/react";
import tooltipStyle from "../../core/constants/tooltip-style"
import { useTranslation } from "react-i18next";
import { AddBlogFavorite, AddCourseFavorite } from "../../core/services/api/post-data";
import { DeleteBlogFavorite, DeleteCourseFavorite } from "../../core/services/api/delete-data";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const FavoriteBtn = ({ isLoading, variantStyle, variantApi, userFavorite, refetch, Id, favoriteId }) => {
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
    const UserInfo = useSelector(state => state.UserInfo.info)
    const variantAction = {
        'courseDetails': [AddCourseFavorite, DeleteCourseFavorite],
        'blog': [AddBlogFavorite, DeleteBlogFavorite]
    }
    const handleFavorite = (action, deleteAction) => {
        if (UserInfo == false) {
            toast.error('لطفا لاگین کنید')
        } else {
            if (userFavorite === false) {
                action(Id, refetch)
            }
            else deleteAction(favoriteId, refetch)
        }
    }

    const variant = {
        card: (
            <Skeleton isLoaded={!isLoading} className={`rounded-lg ${location.search === '?V=2' && isTabletOrLapTop ? "" : "absolute left-6 top-6"}`}>
                <div onClick={() => handleFavorite(variantAction?.[variantApi][0], variantAction?.[variantApi][1])}
                    className={`w-[35px] h-[35px] flex justify-center items-center cursor-pointer favorite-btn bg-LightLavender rounded-xl`}>
                    {userFavorite ? <CheckedHeartIcon width="25px" height="25px" /> : <UnCheckedHeartIcon width="25px" height="25px" fill="#555555" />}
                </div>
            </Skeleton>
        ),
        other: (
            <div onClick={() => handleFavorite(variantAction?.[variantApi][0], variantAction?.[variantApi][1])}
                className="bg-LightLavender border-2 border-LightGrayish flex justify-center cursor-pointer items-center rounded-full w-[50px] h-[50px]">
                {userFavorite ? <CheckedHeartIcon width="27px" height="27px" /> : <UnCheckedHeartIcon width="23px" height="23px" />}
            </div>
        )
    }
    const { i18n } = useTranslation()

    return (
        <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Add To Favorite" : "افزودن به علاقهمندی ها"}>
            {variant?.[variantStyle]}
        </Tooltip>
    )
}

export default FavoriteBtn