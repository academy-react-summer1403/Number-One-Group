import { useTranslation } from "react-i18next"
import ToLike from "../ToLike"
import FavoriteBtn from "../FavoriteBtn"

const FeedbackSection = ({ params }) => {
    const { t } = useTranslation()
    return (
        <div className="border-y-2 my-7 py-3 flex items-center max-sm:justify-around gap-5">
            <div className="flex items-center gap-8 w-fit h-fit">
                <p className="text-DarkBlue">{t(params.favoriteText)} </p>
                <ToLike
                    userLikeId={params.userLikeId}
                    likeNumber={params.likeNumber}
                    disLikeNumber={params.disLikeNumber}
                    LikeStatus={params.LikeStatus}
                    DissLikeStatus={params.DissLikeStatus}
                    numberStatus={'hidden'}
                    Id={params.Id}
                    variant={params.variant}
                    refetch={params.refetch}
                    style={'!rounded-full !p-3 border-2'}
                />
            </div>
            <div>
                <FavoriteBtn
                    variantStyle="other"
                    userFavorite={params.userFavorite}
                    action={params.action}
                    deleteAction={params.deleteAction}
                    Id={params.Id}
                    favoriteId={params.favoriteId}
                />
            </div>
        </div>
    )
}

export default FeedbackSection