import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { DownSection, TopSection } from '../comment-card';
import ReplayComments from './ReplayComments';
import { GetReplayCourseComment } from '../../../../core/services/api/get-data';
const UserComments = ({ commentData, variant, replayComment, refetch, courseId }) => {
  const [replayStatus, setReplayStatus] = useState(false);
  const [replayCourse, setReplayCourse] = useState([]);
  const [reload, setReload] = useState(false);

  const {
    pictureAddress,
    id,
    title,
    describe,
    likeCount,
    disslikeCount,
    currentUserEmotion,
    currentUserLikeId,
    insertDate,
    author,
  } = commentData

  // Getting Replay course Comment from api
  const refetchCallReplay = () => {
    setReload(!reload)
  }
  const CallReplayApi = async () => {
    const res = await GetReplayCourseComment(courseId, id);
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
      <div className="border-t-2 border-LightGrayish py-4 flex max-md:mx-1 gap-4">
        <img src={pictureAddress} alt="" className='sm:min-w-24 sm:w-24 w-16 sm:h-24 h-16 rounded-full bg-red-600' />
        <div className='w-full'>
          <TopSection
            title={title}
            describe={describe}
            date={insertDate}
            name={author}
          />
          <DownSection
            ArrayLength={replayCourse?.length}
            replayStatus={replayStatus}
            setReplayStatus={setReplayStatus}
            like={likeCount}
            disLike={disslikeCount}
            LikeStatus={currentUserEmotion}
            userLikeId={currentUserLikeId}
            replayComment={replayComment}
            courseId={courseId}
            commentId={id}
            refetch={refetch}
          />
        </div>
      </div>
      <div>
        {replayStatus ? (
          dataVariant?.[variant]?.map((item, index) => {
            return (
              <ReplayComments key={index} item={item} refetch={refetchCallReplay} />
            )
          })
        ) : null}
      </div>
    </>
  )
}

export default UserComments