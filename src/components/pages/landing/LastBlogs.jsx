import { useTranslation } from "react-i18next"
import { Label, SwiperSlider, CustomButton } from "../../common"
import { useSelector } from "react-redux"
import { GetNewsFilterPage } from "../../../core/services/api/get-data"
import { useQueryWithoutDependencies } from "../../../core/hooks/react-query"
import { SwiperSlide } from "swiper/react"
import BlogCard from "../blog/BlogCard"
import { Autoplay } from 'swiper/modules';

const LastBlogs = () => {
  const { t } = useTranslation()
  const theme = useSelector(state => state.DarkMode)
  const Breakpoints = {
    1024: { spaceBetween: 20, slidesPerView: 4 },
    680: { spaceBetween: 20, slidesPerView: 2 },
    300: { spaceBetween: 20, slidesPerView: 1 },
  }

  const { data, isSuccess, refetch } = useQueryWithoutDependencies("GET_BLOG_LIST", GetNewsFilterPage)

  return (
    <div className={`w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
      <Label text={t("lastBlogsLabel")} variant="bgGray" />
      <h1 className="boldStyle_text w-full text-center">{t("lastBlogsTitle")}</h1>
      <p className="mediumStyle_text text-center">{t("lastBlogsDesc")}</p>
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
          {isSuccess && data.news?.map(item => (
            <SwiperSlide key={item.id}>
              <BlogCard inSlider item={item} refetch={refetch} />
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
      <div className="w-full flex justify-center">
        <CustomButton href="/Blog?V=1" text={t("viewAll")} style="mt-5" vType={"link"} vStyle={"purple"} arrowColor="#fff" />
      </div>
    </div>
  )
}

export default LastBlogs
