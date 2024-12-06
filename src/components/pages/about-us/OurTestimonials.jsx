import { Label, SwiperSlider } from "../../common"
import { Comments } from "../../../core/constants/about-us/comments"
import CommentCard from "./CommentCard"
import { SwiperSlide } from "swiper/react"
import { useTranslation } from "react-i18next"


const OurTestimonials = () => {
    const { t, i18n } = useTranslation()
    const Breakpoints = {
        800: { spaceBetween: 20, slidesPerView: 3 },
        550: { spaceBetween: 20, slidesPerView: 2 },
        0: { spaceBetween: 20, slidesPerView: 1 },
    }

    return (
        <div className="w-full flex flex-wrap justify-center gap-y-3 lg:px-44 sm:px-16 px-8 my-20">
            <Label text={t("OurTestimonialsChip")} variant="bgGray" />
            <div className="w-full flex justify-center">
                <h1 className="text-center boldStyle_text w-[570px]">{t("OurTestimonialsTitle")}</h1>
            </div>
            <p className="mediumStyle_text w-[570px] text-center">{t("OurTestimonialsDesc")}.</p>
            <div className="w-full h-64 flex gap-x-6 mt-5 relative">
                <SwiperSlider
                    perView={3}
                    arrowColor="#fff"
                    buttonSideLeft="top-[100px] left-0 sm:-left-12 p-3 z-50"
                    buttonSideRight="top-[100px] right-0 sm:-right-12 p-3 z-50"
                    buttonColor="bg-VioletBlue"
                    Breakpoints={Breakpoints}
                >
                    {Comments.map((item, index) => (
                        <SwiperSlide dir={i18n.language == "en" ? "ltr" : "rtl"}>
                            <CommentCard name={item.name} star={item.star} description={item.description} key={index} />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
        </div>
    )
}

export default OurTestimonials
