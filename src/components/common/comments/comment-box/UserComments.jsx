import { useEffect, useState } from 'react'
import { DownSection, TopSection } from '../comment-card';
import ReplayComments from './ReplayComments';
import userImgWhite from '../../../../assets/images/user-circle-icon-white.png'
import userImg from '../../../../assets/images/user-circle-icon.png'
import { GetReplayCourseComment } from '../../../../core/services/api/get-data';
import ImageFallBack from '../../ImageFallBack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
const UserComments = ({ commentData, date, disLikeCount,
  likeStatus, variant, getReplay, replayComment, refetch, itemId }) => {
  const [replayStatus, setReplayStatus] = useState(false);
  const [replayComments, setReplayComments] = useState([]);
  const [reload, setReload] = useState(false);
  const theme = useSelector(state => state.DarkMode)

  const {
    pictureAddress,
    id,
    title,
    describe,
    likeCount,
    currentUserLikeId,
    currentUserIsDissLike,
    author,
    autor,
  } = commentData

  // Getting Replay course Comment from api
  const refetchCallReplay = () => {
    setReload(!reload)
  }
  const CallReplayApi = async () => {
    const res = await getReplay(id, itemId);
    setReplayComments(res);
  };
  useEffect(() => {
    CallReplayApi()
  }, [reload])

  return (
    <>

      <div data-aos="fade-up" ata-aos-duration="200" className="border-t-2 border-LightGrayish py-4 flex max-md:mx-1 gap-4">
        <ImageFallBack src={pictureAddress} alt={'comment-pic'} fallback={theme ? userImgWhite : userImg} className='sm:min-w-24 sm:w-24 w-16 sm:h-24 h-16 rounded-full' />
        <div className='w-full'>
          <TopSection
            title={title}
            describe={describe}
            date={date}
            name={author ?? autor}
          />
          <DownSection
            ArrayLength={replayComments?.length}
            replayStatus={replayStatus}
            setReplayStatus={setReplayStatus}
            like={likeCount}
            disLike={disLikeCount}
            LikeStatus={likeStatus}
            disLikeStatus={currentUserIsDissLike}
            userLikeId={currentUserLikeId}
            replayComment={replayComment}
            itemId={itemId}
            commentId={id}
            refetchReplay={refetchCallReplay}
            refetch={refetch}
            variant={variant}
          />
        </div>
      </div>
      <div>
        {replayStatus ? (
          replayComments?.map((item, index) => {
            return (
              <ReplayComments key={index} item={item} refetch={refetchCallReplay} variant={variant} />
            )
          })
        ) : null}
      </div>
    </>
  )
}

export default UserComments