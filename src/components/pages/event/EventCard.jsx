import { Link } from "react-router-dom"
import { LocationIcon } from "../../../core/icon"
import ConvertDateToPersianText from "../../../core/utility/moment/CovertDateToPersianText"
import { ImageFallBack } from "../../common"
import { useTranslation } from "react-i18next"
import fallback from "../../../assets/images/events.png"
import Tilt from 'react-parallax-tilt';

const EventCard = ({ item }) => {
    const { i18n } = useTranslation()

    return (
        <Tilt transitionSpeed={2500}>
            <Link to={`/eventDetails/${item.id}`}>
                <div className="border w-72 border-LightGrayish p-4 rounded-md relative hover:shadow-xl duration-200">
                    <ImageFallBack
                        src={item.currentImageAddressTumb}
                        fallback={fallback}
                        className="h-40"
                    />
                    <h1 className="mt-6 mb-2 w-full text-DarkBlue line-clamp-2">{item.title}</h1>
                    <div className="flex gap-1">
                        <LocationIcon height={20} width={20} />
                        <span className="mediumStyle_text">{item.address}</span>
                    </div>
                    <div
                        className={
                            `bg-SunshineYellow buttonYellow_shadow duration-200 w-28 pt-1 pb-0.5 text-center rounded-3xl absolute top-40 text-[#161439] 
                        ${i18n.language === 'fa' ? 'right-4' : 'left-4'}`
                        }>
                        {ConvertDateToPersianText(item.startEventTime)}
                    </div>
                </div>
            </Link>
        </Tilt>
    )
}

export default EventCard
