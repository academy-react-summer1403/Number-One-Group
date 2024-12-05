import { CustomButton, ImageFallBack, Label } from "../../common"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { eventItems } from "../../../core/constants/landing/EventSection"


const EventSection = () => {
    const { t } = useTranslation()

    return (
        <div className="w-full flex justify-center flex-wrap mb-28 mt-7 xl:px-44 sm:px-16 px-8 gap-y-4">
            <Label text={t("Events")} variant="bgGray" />
            <h1 className="boldStyle_text w-full text-center">{t("eventTitle")}</h1>
            <p className="mediumStyle_text w-full text-center">{t("eventDescription")}</p>
            <div className="w-full grid-rows-3 md:grid-rows-2 grid-cols-2 grid gap-4 mt-12 h-[800px] md:h-[500px]">
                {eventItems.map((item, index) => (
                    <Link to={"/events"} key={index} className={`group overflow-hidden hover:cursor-pointer rounded-xl relative ${item.class}`}>
                        <ImageFallBack
                            src={item.image}
                            className="w-full group-hover:blur-sm h-full duration-200"
                        />
                        <div className="w-full absolute bottom-0 left-0 bg-black/50 p-4 text-SunshineYellow">
                            <h1 className="text-xl">{item.title}</h1>
                            <p className="mediumStyle_text text-sm text-yellow-200">{item.describe}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="w-full flex justify-center">
                <CustomButton href="/events" text={t("viewAll")} style="mt-5" vType={"link"} vStyle={"purple"} arrowColor="#fff" />
            </div>
        </div>
    )
}

export default EventSection
