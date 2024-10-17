import { useTranslation } from "react-i18next"
import ToLike from "../../ToLike"
import CreateModal from "../../CreateModal"
import { useDisclosure } from "@nextui-org/react"
import { CloseIcon } from "../../../../core/icon"
import { IoIosArrowDown } from "react-icons/io"
import AddReplay_Comment from "../add-comments/AddReplay_Comment"

const DownSection = ({
  ArrayLength,
  replayStatus,
  setReplayStatus,
  Style,
  like,
  disLike,
  LikeStatus,
  userLikeId,
  replayComment,
  courseId,
  commentId,
  refetchReplay,
  refetch,
}) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(refetch)

  return (
    <div className='flex justify-between items-center mt-3'>
      <div className={`sm:flex gap-3 ${Style}`}>
        {/* Modal for Replay comment */}
        <button onClick={onOpen} className='bg-LavenderMist py-1 px-3 text-VioletBlue rounded-lg text-sm'>{t('commentAnswer')}</button>
        <CreateModal
          isOpen={isOpen}
          onClose={onClose}
          header={t('sendComment')}
          size="xl"
          headerStyle="flex flex-col gap-1 text-white"
        >
          <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
            <CloseIcon />
          </div>
          <AddReplay_Comment
            courseId={courseId}
            commentId={commentId}
            replayComment={replayComment}
            refetch={refetchReplay}
            closeModal={onClose}
          />
        </CreateModal>
        {ArrayLength !== 0 &&
          <button onClick={() => { setReplayStatus(!replayStatus) }} className="bg-LavenderMist py-1 px-3 mt-3 sm:mt-0 text-gray-500 flex gap-2 items-center rounded-lg text-sm">
            <p>{t('viewAnswers')} <span className="text-VioletBlue">({ArrayLength && ArrayLength})</span></p>
            <IoIosArrowDown className={`${replayStatus ? "rotate-180" : ""} duration-300`} />
          </button>
        }
      </div>
      <div className='h-fit'>
        <ToLike
          userLikeId={userLikeId}
          likeNumber={like}
          disLikeNumber={disLike}
          LikeStatus={LikeStatus}
          Id={commentId}
          variant={'courseComment'}
          refetch={refetch}
        />
      </div>
    </div>
  )
}

export default DownSection