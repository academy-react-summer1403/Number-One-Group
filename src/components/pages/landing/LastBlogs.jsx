import { useTranslation } from "react-i18next"
import { Label, SwiperSlider } from "../../common"
import { useSelector } from "react-redux"
import { GetNewsFilterPage } from "../../../core/services/api/get-data"
import { useQueryWithoutDependencies } from "../../../core/hooks/react-query"
import { SwiperSlide } from "swiper/react"
import BlogCard from "../blog/BlogCard"
import { Autoplay } from 'swiper/modules';

const LastBlogs = () => {
  const { t } = useTranslation()
  const theme = useSelector(state => state.DarkMode)

  const { data, isSuccess ,refetch} = useQueryWithoutDependencies("GET_BLOG_LIST", GetNewsFilterPage)

  return (
    <div className={`w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
      <Label text={t("lastBlogsLabel")} variant="bgGray" />
      <h1 className="boldStyle_text w-full text-center">{t("lastBlogsTitle")}</h1>
      <p className="mediumStyle_text text-center">{t("lastBlogsDesc")}</p>
      <div className="max-[680px]:w-[300px] w-[110%] mt-5 relative">
        <SwiperSlider
          perView={4}
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
              <BlogCard item={item} refetch={refetch}/>
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    </div>
  )
}

export default LastBlogs
