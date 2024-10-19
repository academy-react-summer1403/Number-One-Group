import { useTranslation } from "react-i18next";
import { DateIcon } from "../../../core/icon";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import SwiperSlider from "../../common/swiper/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import { useQueryWithDependencies } from "../../../core/hooks/react-query";
import ChangeMoment from "../../../core/utility/moment";

const titleVariant = {
  "courseFilterDtos": 'Courses',
  "news": "Blogs"
}
const maxWidthVariant = {
  "courseFilterDtos": "12800px",
  "news": "1024px"
}

const RelatedItems = ({ category, params, apiFunction, variant, RenderItem}) => {


  const { t, i18n } = useTranslation();
  const apiParams = { PageNumber: 1, RowsOfPage: 4, ...params }

  const { data, isSuccess, isLoading, refetch } = useQueryWithDependencies('GET_RELATED_ITEMS',
    apiFunction, category, apiParams
  )
  const Breakpoints = {
    1420: { spaceBetween: 20, slidesPerView: 3 },
    1024: { spaceBetween: 30, slidesPerView: 2 },
    970: { spaceBetween: 20, slidesPerView: 3 },
    615: { spaceBetween: 30, slidesPerView: 2 },
    200: { spaceBetween: 0, slidesPerView: 1 },
  }

  return (
    <>
      {/* Side related blogs for laptop mode */}
      {titleVariant?.[variant] === 'Blogs' &&
        <MediaQuery minWidth={'1024px'}>
          <div data-aos={`fade-${i18n.language === 'fa' ? 'left' : 'right'}`} data-aos-duration="700"  
          className="bg-LightGray min-h-[300px] h-fit lg:min-w-[315px] p-5 rounded-lg">
            <h1 className="boldStyle_text text-xl">{t('Blogs')} {t('Related')}</h1>
            {isSuccess && data.news?.length > 0 ? data.news?.map((item) => (
              <Link key={item.id} to={`/BlogDetails/${item.id}`}>
                <div className="flex gap-x-4 items-center mt-3 py-1 cursor-pointer hover:Box-shadow1 dark:hover:Box-shadow2 duration-250 rounded-md">
                  <img src={item.currentImageAddressTumb} alt="" className="h-16 w-16 rounded-md" />
                  <div>
                    <div className="flex gap-2">
                      <DateIcon fill="#5751E1" height={14} width={14} />
                      <p className="mediumStyle_text text-xs">{ChangeMoment(item.updateDate, "YYYY/MM/DD", "persian")}</p>
                    </div>
                    <p className="mediumStyle_text max-w-32 text-sm line-clamp-2">{item.title}</p>
                  </div>
                </div>
              </Link>
            )) : <h1 className="mediumStyle_text my-5">هیچ وبلاگ مرتبطی یافت نشد</h1>}
          </div>
        </MediaQuery>
      }
      {/* Related news box for tablet and mobile mode */}
      <MediaQuery maxWidth={maxWidthVariant?.[variant]}>
        <div className="relative my-6 ">
          <div className="pt-2 pb-8 flex items-center gap-3">
            <h1 className="importantWord py-1">{t(titleVariant?.[variant])}</h1>
            <p className="text-2xl font-semibold">{t("Related")}</p>
          </div>
          <div>
            <SwiperSlider
              perView={1}
              Breakpoints={Breakpoints}
              arrowColor="#fff"
              buttonSideLeft={`top-3 h-10 w-10 ${isSuccess && data?.[variant]?.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-0" : "right-12"} `}
              buttonSideRight={`top-3 h-10 w-10 ${isSuccess && data?.[variant]?.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-12" : "right-0"} `}
              buttonColor="bg-VioletBlue"
            >
              {isSuccess && data?.[variant]?.map((item, index) => (
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
      </MediaQuery>
    </>
  )
}

export default RelatedItems