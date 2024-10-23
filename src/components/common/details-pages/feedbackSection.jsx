import { useTranslation } from "react-i18next"
import ToLike from "../ToLike"
import FavoriteBtn from "../FavoriteBtn"
import SetRate from "../SetRate"

const FeedbackSection = ({ params }) => {
    const { t } = useTranslation()

    return (
        <div data-aos="fade-right" ata-aos-duration="700" className="border-y-2 my-7 py-3 md:flex items-center justify-between max-md:justify-around gap-5">
            <div className="flex lg:gap-4 gap-3 max-md:mx-auto w-fit">
                <div className="flex items-center gap-6 w-fit h-fit">
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
                        variantStyle={'details'}
                        refetch={params.refetch}
                        style={'!rounded-full !p-3 border-2'}
                    />
                </div>
                <FavoriteBtn
                    variantStyle="other"
                    variantApi={params.variant}
                    userFavorite={params.userFavorite}
                    refetch={params.refetch}
                    Id={params.Id}
                    favoriteId={params.favoriteId}
                />
            </div>
            <div className="flex items-center lg:gap-4 gap-2 max-md:mx-auto w-fit max-md:mt-4">
                <p className="text-DarkBlue">{t("setRate")} :</p>
                <SetRate action={params.actionRate} Id={params.Id} status={params.rateStatus} rateNumber={params.rateNumber} />
            </div>
        </div>
    )
}


export default FeedbackSection