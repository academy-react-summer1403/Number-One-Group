import { Skeleton } from "@nextui-org/react"
import { DateIcon } from "../../../core/icon"
import { Label } from "../../common"

const CenterBox = ({
  title,
  category,
  date,
  bio,
  isLoading,
}) => {
  const newDate = date && date.slice(0, 10)

  return (
    <div className="my-2 pb-2  cursor-pointer">
      <Skeleton isLoaded={!isLoading}>
        <h1 className="text-lg line-clamp-1 text-DarkBlue">{title}</h1>
      </Skeleton>
      <div className="flex justify-between my-2">
        <Skeleton isLoaded={!isLoading}>
          <Label variant={'bgBlue'} text={category} style='text-xs whitespace-nowrap cursor-default' />
        </Skeleton>
        <Skeleton isLoaded={!isLoading}>
          <div className='flex gap-2'>
            <DateIcon height={18} width={15} fill="#555555" />
            <h1 className="line-clamp-1 mediumStyle_text">{newDate}</h1>
          </div>
        </Skeleton>
      </div>
      <Skeleton isLoaded={!isLoading}>
        <p className="line-clamp-2 text-gray-500 text-sm mt-3 blog-bio h-10">{bio}</p>
      </Skeleton>
    </div>
  )
}

export default CenterBox