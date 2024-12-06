import { SwiperSlide } from "swiper/react";
import { CustomButton, Label, SwiperSlider } from "../../common"
import { Autoplay } from 'swiper/modules';
import ProductCardWrapper from "../product/ProductCardWrapper";
import { useQueryWithoutDependencies } from "../../../core/hooks/react-query";
import { GetAllProducts } from "../../../core/services/api/get-data";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ProductSection = () => {
    const { t } = useTranslation()
    const theme = useSelector(state => state.DarkMode)
    const Breakpoints = {
        1400: { spaceBetween: 20, slidesPerView: 4 },
        900: { spaceBetween: 20, slidesPerView: 3 },
        300: { spaceBetween: 20, slidesPerView: 1 },
    }

    const { data, isSuccess } = useQueryWithoutDependencies("GET_ALL_PRODUCTS", GetAllProducts)

    return (
        <div className={`w-full lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
            <Label text={t("lastProductLabel")} variant="bgGray" />
            <h1 className="boldStyle_text w-full text-center">{t("lastProductTitle")}</h1>
            <p className="mediumStyle_text text-center">{t("lastProductDesc")}</p>
            <div className="max-[680px]:w-[300px] w-[110%] mt-5 relative">
                <SwiperSlider
                    perView={4}
                    Breakpoints={Breakpoints}
                    arrowColor="#fff"
                    buttonSideLeft="hidden"
                    buttonSideRight="hidden"
                    buttonColor="bg-VioletBlue"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {isSuccess && data.slice(0, 10)?.map(item => (
                        <SwiperSlide key={item.id}>
                            <ProductCardWrapper inSlider item={item} />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
            <div className="w-full flex justify-center">
                <CustomButton href="/products" text={t("viewAll")} style="mt-5" vType={"link"} vStyle={"purple"} arrowColor="#fff" />
            </div>
        </div>
    )
}

export default ProductSection
