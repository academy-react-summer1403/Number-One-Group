import { useTranslation } from "react-i18next"
import { DownSection, TopSection } from "../comment-card";

const ReplayComments = ({ item, refetch }) => {
    const { i18n } = useTranslation();
    const {
        author: name,
        describe,
        id,
        insertDate: date,
        likeCount,
        disslikeCount,
        currentUserEmotion,
        pictureAddress,
        currentUserLikeId,
    } = item;

    return (
        <div dir={i18n.language === 'fa' ? "ltr" : 'rtl'} className="border-t-2 border-gray-100 py-4">
            <div dir={i18n.language === 'fa' ? "rtl" : 'ltr'} className="flex gap-4 w-11/12">
                <img src={pictureAddress} className='sm:w-24 w-16 sm:h-24 h-16  rounded-full' />
                <div className='w-full'>
                    <TopSection
                        Style={'hidden'}
                        name={name}
                        date={date}
                        describe={describe} />
                    <DownSection
                        Style={'!hidden'}
                        userLikeId={currentUserLikeId}
                        like={likeCount}
                        disLike={disslikeCount}
                        LikeStatus={currentUserEmotion}
                        commentId={id}
                        refetch={refetch}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReplayComments