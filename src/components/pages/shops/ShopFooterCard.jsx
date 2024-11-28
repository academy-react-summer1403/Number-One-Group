import { Skeleton } from "@nextui-org/react"
import { LuClock } from "react-icons/lu"

const ShopFooterCard = ({ startTime, endTime ,loading}) => {
    return (
        <Skeleton isLoaded={!loading} className="rounded-xl">
            <div className="flex items-center gap-2 text-gray-400">
                <LuClock className="text-gray-400" />
                <p>  از ساعت <span className="text-VioletBlue">{startTime}</span> الی <span className="text-VioletBlue">{endTime}</span></p>
            </div>
        </Skeleton>
    )
}

export default ShopFooterCard