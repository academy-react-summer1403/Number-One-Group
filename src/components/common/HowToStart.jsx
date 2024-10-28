import { Label, SwiperSlider } from "."
import CreateRequestCard from "../pages/landing/createRequestCard"
import Encouragement from "../pages/landing/encouragementList"
import { SwiperSlide } from 'swiper/react';
import MediaQuery from "react-responsive";
import { useTranslation } from "react-i18next"
import { requestCards, encouragementItems } from "../../core/constants/landing/howToStart";

const HowToStart = ({ requestSection = "show" }) => {
    const { t, i18n } = useTranslation()

    return (
        <div className="w-full flex flex-wrap gap-y-4 justify-center py-28 bg-DarkIndigo lg:px-44 sm:px-16 px-8">
            <Label text={t("howToStartLabel")} variant="section" style="bg-VioletBlue text-white" />
            <h1 className="boldStyle_text w-full text-center text-white">{t("howToStartTitle")}</h1>
            <p className="mediumStyle_text md:w-1/2 lg:w-1/3 text-center text-neutral-400">{t("howToStartDesc")}</p>
            <ul className="w-full flex flex-wrap xl:flex-nowrap relative mt-10">
                <MediaQuery minWidth={"1285px"}>
                    {encouragementItems.map((obj, index) => {
                        if (i18n.language === "en") {
                            return <Encouragement key={index} arrow={obj.arrow} icon={obj.icon} title={obj.title[1]} description={obj.description[1]} />
                        } else {
                            return <Encouragement key={index} arrow={obj.arrow} icon={obj.icon} title={obj.title[0]} description={obj.description[0]} />
                        }
                    })}
                </MediaQuery>
                <MediaQuery maxWidth={"1285px"}>
                    <SwiperSlider
                        perView={1}
                        arrowColor="#fff"
                        buttonSideLeft="top-[100px] xl:left-[40px] left-[20px] z-30 p-3"
                        buttonSideRight="top-[100px] xl:right-[40px] right-[20px] z-30 p-3"
                        buttonColor="bg-VioletBlue"
                    >
                        {encouragementItems.map((obj, index) => {
                            if (i18n.language === "en") {
                                return <SwiperSlide key={index} arrow={obj.arrow} className="justify-center flex"><Encouragement icon={obj.icon} title={obj.title[1]} description={obj.description[1]} /></SwiperSlide>
                            } else {
                                return <SwiperSlide key={index} arrow={obj.arrow} className="justify-center flex"><Encouragement icon={obj.icon} title={obj.title[0]} description={obj.description[0]} /></SwiperSlide>
                            }
                        })}
                    </SwiperSlider>
                </MediaQuery>
            </ul>
            {requestSection == "show" && <div className="w-full flex mobile:flex-wrap gap-5 mt-20">
                {requestCards.map((item, index) => {
                    if (i18n.language === "en") {
                        return <CreateRequestCard key={index} buttonValue={item.buttonValue[1]} paragraph={item.paragraph[1]} picture={item.picture} title={item.title[1]} />
                    } else {
                        return <CreateRequestCard key={index} buttonValue={item.buttonValue[0]} paragraph={item.paragraph[0]} picture={item.picture} title={item.title[0]} />
                    }
                })}
            </div>}
        </div>
    )
}

export default HowToStart
