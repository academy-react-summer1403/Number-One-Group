import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { DownSection, TopSection } from '../comment-card';
const UserComments = ({ commentData,refetch, courseId }) => {
  const { t } = useTranslation()
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
  console.log(commentData)

  // const { data: replay ,refetch : refetchCourse} = useQuery({
  //   queryKey: ["GET_REPLAY_COURSE_COMMENT"],
  //   queryFn: async () => { return await GetReplayCourseComment(courseId, id) }
  // })
  

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
            like={likeCount}
            disLike={disslikeCount}
            LikeStatus={currentUserEmotion}
            userLikeId={currentUserLikeId}
            courseId={courseId}
            commentId={id}
            refetch={refetch}
          />
        </div>
      </div>
    </>
  )
}

export default UserComments