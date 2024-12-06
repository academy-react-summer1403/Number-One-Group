import { useTranslation } from "react-i18next";
import { DateIcon } from "../../../core/icon";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { useQueryWithDependencies } from "../../../core/hooks/react-query";
import ChangeMoment from "../../../core/utility/moment";
import RenderRelatedItems from "./RenderRelatedItems";
import ImageFallBack from "../ImageFallBack";
import fallback from "../../../assets/images/blogs.png"

const titleVariant = {
  "courseFilterDtos": 'Courses',
  "news": "Blogs"
}
const maxWidthVariant = {
  "courseFilterDtos": "12800px",
  "news": "1024px"
}

const RelatedItems = ({ category, params, apiFunction, variant, RenderItem }) => {


  const { t, i18n } = useTranslation();
  const apiParams = { PageNumber: 1, RowsOfPage: 4, ...params }

  const { data, isSuccess, isLoading, refetch } = useQueryWithDependencies('GET_RELATED_ITEMS',
    apiFunction, category, apiParams
  )
  // const Breakpoints = {
  //   1420: { spaceBetween: 20, slidesPerView: 3 },
  //   1024: { spaceBetween: 30, slidesPerView: 2 },
  //   970: { spaceBetween: 20, slidesPerView: 3 },
  //   615: { spaceBetween: 30, slidesPerView: 2 },
  //   200: { spaceBetween: 0, slidesPerView: 1 },
  // }

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
                  <ImageFallBack
                    src={item.currentImageAddressTumb}
                    className="h-16 w-16 rounded-md"
                    fallback={fallback}
                  />
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
        <RenderRelatedItems
          title={titleVariant?.[variant]}
          RenderItem={RenderItem}
          renderData={data?.[variant]}
          isSuccess={isSuccess}
          isLoading={isLoading}
          refetch={refetch}
        />
      </MediaQuery>
    </>
  )
}

export default RelatedItems