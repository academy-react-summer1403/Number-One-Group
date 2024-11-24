import { useTranslation } from "react-i18next"
import { RenderItemsList, SwiperSlider } from "../../common"
import { useQueryWithDependencies } from "../../../core/hooks/react-query"
import { GetAllCourseByPagination } from "../../../core/services/api/get-data"
import { SwiperSlide } from "swiper/react"
import CourseCard from "../course/Course"

const TeacherCourse = ({ id }) => {
    const { t, i18n } = useTranslation()
    const { isSuccess, data, isLoading, refetch } = useQueryWithDependencies(
        "GET_TEACHER_COURSE",
        GetAllCourseByPagination,
        id,
        { TeacherId: id }
    )

    const Breakpoints = {
        1420: { spaceBetween: 50, slidesPerView: 3 },
        1024: { spaceBetween: 30, slidesPerView: 2 },
        970: { spaceBetween: 20, slidesPerView: 3 },
        615: { spaceBetween: 30, slidesPerView: 2 },
        200: { spaceBetween: 0, slidesPerView: 1 },
    }

    return (
        <div className='w-full flex flex-wrap gap-y-3 relative'>
            <h1 className='boldStyle_text w-full md:text-start text-center'>{t("instructorCourses")}</h1>
            <p className='w-full mediumStyle_text md:text-start text-center'>هنگامی که چاپگر شناخته شده یک گالری از نوع scrambl edmake گرفت</p>
            <div className="w-full">
                <SwiperSlider
                    perView={1}
                    Breakpoints={Breakpoints}
                    arrowColor="#fff"
                    buttonSideLeft={`top-3 h-10 w-10 ${isSuccess && data?.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-0" : "right-12"} `}
                    buttonSideRight={`top-3 h-10 w-10 ${isSuccess && data?.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-12" : "right-0"} `}
                    buttonColor="bg-VioletBlue"
                >
                    {isSuccess && data?.courseFilterDtos.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CourseCard item={item} refetch={refetch} loading={isLoading} />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
        </div>
    )
}

export default TeacherCourse
