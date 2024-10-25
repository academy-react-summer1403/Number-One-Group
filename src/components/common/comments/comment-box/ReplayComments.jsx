import { useTranslation } from "react-i18next"
import { DownSection, TopSection } from "../comment-card";

const ReplayComments = ({ item, refetch, variant }) => {
    const { i18n } = useTranslation();
    const {
        author,
        autor,
        describe,
        id,
        insertDate: date,
        likeCount,
        disslikeCount,
        dissLikeCount,
        currentUserEmotion,
        currentUserIsLike,
        currentUserIsDissLike,
        pictureAddress,
        currentUserLikeId,
    } = item;

    return (
        <div data-aos="fade-up" ata-aos-duration="200" dir={i18n.language === 'fa' ? "ltr" : 'rtl'} className="border-t-2 border-gray-100 py-4">
            <div dir={i18n.language === 'fa' ? "rtl" : 'ltr'} className="flex gap-4 w-11/12">
                <img src={pictureAddress} className='sm:w-28 w-16 sm:h-24 h-16  rounded-full bg-VioletBlue' />
                <div className='w-full'>
                    <TopSection
                        Style={'hidden'}
                        name={author ?? autor}
                        date={date}
                        describe={describe} />
                    <DownSection
                        Style={'!hidden'}
                        userLikeId={currentUserLikeId}
                        like={likeCount}
                        disLike={disslikeCount ?? dissLikeCount}
                        LikeStatus={currentUserEmotion ?? currentUserIsLike}
                        disLikeStatus={currentUserIsDissLike}
                        commentId={id}
                        refetch={refetch}
                        variant={variant}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReplayComments