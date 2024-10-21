import { BsEyeFill } from "react-icons/bs"
import { ToLike } from "../../common"
import { Skeleton } from "@nextui-org/react"

const DownBox = ({
  like,
  disLike,
  view,
  loading,
  refetch,
  likeId,
  disLikeStatus,
  likeStatus,
  id
}) => {
  return (
    <div className=" pt-5 border-t-2 border-gray-400/30 flex justify-between">
      <Skeleton isLoaded={loading} className="rounded-md">
        <div className="flex items-center gap-1.5">
          <BsEyeFill color="gray" />
          <span className="text-gray-500">{view}</span>
        </div>
      </Skeleton>
      <Skeleton isLoaded={loading} className="rounded-md">
        <div className="flex items-center gap-1.5">
          <ToLike
            variant={'blog'}
            userLikeId={likeId}
            DissLikeStatus={disLikeStatus}
            LikeStatus={likeStatus}
            refetch={refetch}
            Id={id}
            likeNumber={like}
            disLikeNumber={disLike}
          />
        </div>
      </Skeleton>
    </div>
  )
}

export default DownBox