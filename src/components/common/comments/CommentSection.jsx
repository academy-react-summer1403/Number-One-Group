import { useState } from "react"
import { useTranslation } from "react-i18next";
import AddComments from "./add-comments/AddComments";

const CommentSection = ({ Id, apiFunction, data, refetch}) => {
  const { t } = useTranslation();
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="my-3">
      <h1 className="mb-6">{t('user_comment')}</h1>
      <AddComments apiFunction={apiFunction} Id={Id} refetch={refetch} />
      <p className="text-xl my-5">{data?.length} {t('comment')}</p>
    </div>
  )
}

export default CommentSection