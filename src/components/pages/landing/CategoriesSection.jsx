import { SwiperSlide } from "swiper/react"
import { Label, SwiperSlider } from "../../common/index"
import { useTranslation } from "react-i18next"
import CategoryItem from "./CreateCategoryItem"
import { useEffect, useState } from "react"
import GetAllCourseByPagination from "../../../core/services/api/get-data/GetAllCourses"
import GetTechnologies from "../../../core/services/api/get-data/GetTechnologies"

const Categories = () => {
    const { t } = useTranslation()
    const [technologies, setTechnologies] = useState([])
    const [newTechnologies, setNewTechnologies] = useState([])

    const Breakpoints = {
        1280: { spaceBetween: 20, slidesPerView: 6 },
        1180: { spaceBetween: 60, slidesPerView: 4 },
        870: { spaceBetween: 20, slidesPerView: 4 },
        600: { spaceBetween: 20, slidesPerView: 3 },
        500: { spaceBetween: 50, slidesPerView: 2 },
        445: { spaceBetween: 20, slidesPerView: 2 },
        400: { spaceBetween: 10, slidesPerView: 2 },
        300: { spaceBetween: 0, slidesPerView: 1 },
    }

    const setAmount = async () => {
        const apiParams = { PageNumber: 1, RowsOfPage: 1, TechCount: 1 }

        for (let i = 0; i < technologies.length; i++) {
            let amountCategory = await GetAllCourseByPagination({ ...apiParams, ListTech: technologies[i].id })
            technologies[i].amount = amountCategory.totalCount
            setNewTechnologies([...technologies])
        }
    }

    const setCategoryItems = async () => setTechnologies(await GetTechnologies())

    useEffect(() => { setCategoryItems() }, [])

    useEffect(() => { setAmount() }, [technologies])

    return (
        <div className="w-full flex flex-wrap gap-y-4 justify-center py-28 lg:px-44 sm:px-16 px-8">
            <Label text={t("categoryLabel")} variant="bgGray" />
            <h1 className="boldStyle_text w-full text-center">{t("categoryTitle")}</h1>
            <p className="mediumStyle_text text-center">{t("categoryDescription")}</p>
            {newTechnologies.length > 6 ? (
                <div className="w-full relative bg-LightGray mt-5 flex justify-center items-center px-20 xl:px-28 py-8 rounded-full">
                    <SwiperSlider
                        perView={4}
                        Breakpoints={Breakpoints}
                        arrowColor="#000"
                        buttonSideLeft="top-[100px] xl:left-[40px] left-[20px] h-12 w-12"
                        buttonSideRight="top-[100px] xl:right-[40px] right-[20px] h-12 w-12"
                        buttonColor="bg-SunshineYellow"
                    >
                        {newTechnologies.map(item => (<SwiperSlide key={item.id}><CategoryItem amount={item.amount} title={item.techName} /></SwiperSlide>))}
                    </SwiperSlider>
                </div>
            ) : (
                <div className="w-full relative bg-LightGray mt-5 flex justify-evenly items-center px-20 xl:px-28 py-8 rounded-full">
                    {newTechnologies.map(item => <CategoryItem key={item.id} amount={item.amount} title={item.techName} />)}
                </div>
            )}
        </div>
    )
}

export default Categories
