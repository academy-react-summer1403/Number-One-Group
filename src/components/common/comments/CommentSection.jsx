import { useState } from "react"
import { useTranslation } from "react-i18next";
import AddComments from "./add-comments/AddComments";
import UserComments from "./comment-box/UserComments";

const CommentSection = ({ Id, apiFunction, data, refetch }) => {
  const { t } = useTranslation();
  const [viewMore, setViewMore] = useState(false);
  const dataRender = viewMore ? data : data?.slice(0, 3);

  return (
    <div className="my-3">
      <h1 className="mb-6">{t('user_comment')}</h1>
      <AddComments apiFunction={apiFunction} Id={Id} refetch={refetch} />
      <p className="text-xl my-5">{data?.length} {t('comment')}</p>
      <div className={`my-5 pb-10`}>
        {data?.length !== 0 ? (
          dataRender?.map((item, index) => (
            <UserComments
              key={index}
              commentData={item}
              refetch={refetch}
              courseId={Id} />
          ))
        ) : (
          <h1 className="mx-auto w-fit font-semibold text-xl">* {t('notFoundComment')} *</h1>
        )}
      </div>
    </div>
  )
}

export default CommentSection