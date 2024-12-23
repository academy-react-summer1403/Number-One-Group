import { useState } from "react"
import { useTranslation } from "react-i18next";
import AddComments from "./add-comments/AddComments";
import UserComments from "./comment-box/UserComments";
import { blogCommentValid, courseCommentValid } from "../../../core/validations/Auth.Validations";

const CommentSection = ({ Id, replayComment, getReplay, apiFunction, data, refetch, variant }) => {
  const { t } = useTranslation();
  const [viewMore, setViewMore] = useState(false);
  const dataRender = viewMore ? data : data?.slice(0, 3);

  return (
    <div className="my-3">
      <h1 className="mb-6 text-[18px]">{t('user_comment')}</h1>
      <AddComments apiFunction={apiFunction} Id={Id} refetch={refetch} valid={variant === 'courseComment' ? courseCommentValid : blogCommentValid} />
      <p className="text-xl my-5">{data?.length} {t('comment')}</p>
      <div className="my-5 pb-10">
        {data?.length !== 0 ? (
          dataRender?.map((item, index) => (
            <UserComments
              key={index}
              commentData={item}
              date={variant === 'courseComment' ? item.insertDate : item.inserDate}
              disLikeCount={variant === 'courseComment' ? item.disslikeCount : item.dissLikeCount}
              likeStatus={variant === 'courseComment' ? item.currentUserEmotion : item.currentUserIsLike}
              variant={variant}
              getReplay={getReplay}
              replayComment={replayComment}
              refetch={refetch}
              itemId={Id} />
          ))
        ) : (
          <h1 className="mx-auto mt-20 w-fit text-neutral-400">* {t('notFoundComment')} *</h1>
        )}
      </div>
      <button
        onClick={() => setViewMore(!viewMore)}
        className={`bg-LavenderMist px-5 py-1.5 rounded-3xl mx-auto block text-VioletBlue ${data?.length > 3 ? "" : "hidden"}`}
      >
        {t(!viewMore ? 'viewMore' : 'viewLess')}
      </button>
    </div>
  )
}

export default CommentSection