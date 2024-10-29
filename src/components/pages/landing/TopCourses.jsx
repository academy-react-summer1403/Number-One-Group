import { useTranslation } from "react-i18next"
import { Label, SwiperSlider, CustomButton } from "../../common"
import Tab from "./tab"
import { useSelector } from "react-redux"
import { useState } from "react"
import { SwiperSlide } from "swiper/react"
import { GetAllCourseByPagination, GetTechnologies } from "../../../core/services/api/get-data"
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../../core/hooks/react-query"
import { Autoplay } from 'swiper/modules';
import { CourseCard } from "../course"
import { motion } from "framer-motion";

const TopCourses = () => {
    const { t, i18n } = useTranslation()
    const theme = useSelector(state => state.DarkMode)
    const [tabValue, setTabValue] = useState(2)

    const Breakpoints = {
        1024: { spaceBetween: 20, slidesPerView: 4 },
        680: { spaceBetween: 20, slidesPerView: 2 },
        300: { spaceBetween: 20, slidesPerView: 1 },
    }

    const { data: tabs, isSuccess: tabIsSuccess } = useQueryWithoutDependencies("GET_TECHNOLOGIES", GetTechnologies)

    const { data: Courses, isSuccess, isLoading, refetch } = useQueryWithDependencies("GET_COURSES", GetAllCourseByPagination, tabValue, { TechCount: 1, ListTech: tabValue })



    return (
        <div className={`relative w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
            <Label text={t("topCoursesLabel")} variant="bgGray" />
            <h1 className="boldStyle_text w-full text-center">{t("topCoursesTitle")}</h1>
            <p className="mediumStyle_text w-full text-center">{t("topCoursesDescription")}</p>
            <div className="mobile:w-full sm:w-auto flex mobile:justify-evenly justify-center relative mobile:px-0 sm:px-20 mt-10">
                {tabIsSuccess && tabs.map(obj => <Tab key={obj.id} setTabValue={setTabValue} value={obj.id} name="landing" title={obj.techName} />)}
                <span className="w-full h-1 bg-LightGrayish rounded-full bottom-0 absolute"></span>
            </div>
            <div className="max-[680px]:w-[300px] w-[110%] min-h-[435px] mt-5 relative">
                <SwiperSlider
                    perView={4}
                    Breakpoints={Breakpoints}
                    arrowColor="#fff"
                    buttonSideLeft="top-[190px] xl:-left-[60px] sm:left-[20px] hidden sm:flex h-12 z-30 w-12"
                    buttonSideRight="top-[190px] xl:-right-[60px] sm:right-[20px] hidden sm:flex h-12 z-30 w-12"
                    buttonColor="bg-VioletBlue"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {isSuccess && Courses.courseFilterDtos?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CourseCard item={item} isLoading={isLoading} refetch={refetch} />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
            <div className="w-full flex justify-center">
                <CustomButton href="/courses" text={t("viewAll")} style="mt-5" vType={"link"} vStyle={"purple"} arrowColor="#fff" />
            </div>
        </div>
    )
}

export default TopCourses
