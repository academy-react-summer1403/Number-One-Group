import { useTranslation } from "react-i18next"
import SwiperSlider from "../swiper/SwiperSlider"
import { SwiperSlide } from "swiper/react"

const RenderRelatedItems = ({ title, renderData, RenderItem, isSuccess, isLoading, refetch }) => {
    const { t, i18n } = useTranslation()

    const Breakpoints = {
        1420: { spaceBetween: 20, slidesPerView: 3 },
        1024: { spaceBetween: 30, slidesPerView: 2 },
        970: { spaceBetween: 20, slidesPerView: 3 },
        615: { spaceBetween: 30, slidesPerView: 2 },
        200: { spaceBetween: 0, slidesPerView: 1 },
    }

    return (
        <div className="relative my-6 ">
            <div className="pt-2 pb-8 flex items-center gap-3">
                <h1 className="importantWord py-1">{t(title)}</h1>
                <p className="text-2xl font-semibold">{t("Related")}</p>
            </div>
            <div>
                <SwiperSlider
                    perView={1}
                    Breakpoints={Breakpoints}
                    arrowColor="#fff"
                    buttonSideLeft={`top-3 h-10 w-10 ${isSuccess && renderData?.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-0" : "right-12"} `}
                    buttonSideRight={`top-3 h-10 w-10 ${isSuccess && renderData?.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-12" : "right-0"} `}
                    buttonColor="bg-VioletBlue"
                >
                    {isSuccess && renderData?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <RenderItem
                                item={item}
                                loading={isLoading}
                                refetch={refetch}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
        </div>
    )
}

export default RenderRelatedItems