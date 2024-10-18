import { useEffect, useState } from 'react'
import { DownSection, TopSection } from '../comment-card';
import ReplayComments from './ReplayComments';
import { GetReplayCourseComment } from '../../../../core/services/api/get-data';
const UserComments = ({ commentData, date, disLikeCount, likeStatus, variant, replayComment, refetch, itemId }) => {
  const [replayStatus, setReplayStatus] = useState(false);
  const [replayCourse, setReplayCourse] = useState([]);
  const [reload, setReload] = useState(false);

  const {
    pictureAddress,
    id,
    title,
    describe,
    likeCount,
    currentUserLikeId,
    currentUserIsDissLike,
    author,
  } = commentData

  // Getting Replay course Comment from api
  const refetchCallReplay = () => {
    setReload(!reload)
  }
  const CallReplayApi = async () => {
    const res = await GetReplayCourseComment(itemId, id);
    setReplayCourse(res);
  };
  useEffect(() => {
    CallReplayApi()
  }, [reload])

  const dataVariant = {
    'courseDetails': replayCourse,
  }

  return (
    <>
      <div data-aos="fade-up" ata-aos-duration="200" className="border-t-2 border-LightGrayish py-4 flex max-md:mx-1 gap-4">
        <img src={pictureAddress} className='sm:min-w-24 sm:w-24 w-16 sm:h-24 h-16 rounded-full bg-VioletBlue' />
        <div className='w-full'>
          <TopSection
            title={title}
            describe={describe}
            date={date}
            name={author}
          />
          <DownSection
            ArrayLength={replayCourse?.length}
            replayStatus={replayStatus}
            setReplayStatus={setReplayStatus}
            like={likeCount}
            disLike={disLikeCount}
            LikeStatus={likeStatus}
            disLikeStatus={currentUserIsDissLike}
            userLikeId={currentUserLikeId}
            // replayComment={replayComment}
            itemId={itemId}
            commentId={id}
            refetchReplay={refetchCallReplay}
            refetch={refetch}
            variant={variant}
          />
        </div>
      </div>
      <div>
        {/* {replayStatus ? (
          dataVariant?.[variant]?.map((item, index) => {
            return (
              <ReplayComments key={index} item={item} refetch={refetchCallReplay} />
            )
          })
        ) : null} */}
      </div>
    </>
  )
}

export default UserComments