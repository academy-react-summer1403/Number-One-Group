import { useTranslation } from "react-i18next"
import { DownSection, TopSection } from "../comment-card";
import ImageFallBack from "../../ImageFallBack";
import userImgWhite from '../../../../assets/images/user-circle-icon-white.png'
import userImg from '../../../../assets/images/user-circle-icon.png'
import { useSelector } from "react-redux";

const ReplayComments = ({ item, refetch, variant }) => {
    const { i18n } = useTranslation();
    const theme = useSelector(state => state.DarkMode)
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
                <ImageFallBack src={pictureAddress} alt={'comment-pic'} fallback={theme ? userImgWhite : userImg} className='sm:min-w-24 sm:w-24 w-16 sm:h-24 h-16 rounded-full' />
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