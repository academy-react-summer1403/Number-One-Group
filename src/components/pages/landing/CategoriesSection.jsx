import { SwiperSlide } from "swiper/react"
import { CustomButton, Label, SwiperSlider } from "../../common/index"
import { useTranslation } from "react-i18next"
import CategoryItem from "./CreateCategoryItem"
import { useEffect, useState } from "react"
import { GetAllCourseByPagination, GetTechnologies } from "../../../core/services/api/get-data"

const Categories = () => {
    const { t, i18n } = useTranslation()
    const [technologies, setTechnologies] = useState([])
    const [newTechnologies, setNewTechnologies] = useState([])

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
        <div className="w-full flex gap-x-8 pb-28 lg:px-44 sm:px-16 px-8 justify-between items-center">
            <div className="min-w-[400px] w-full xl:w-[400px] h-fit flex justify-center xl:justify-start flex-wrap gap-y-4">
                <Label text={t("categoryLabel")} variant="bgGray" />
                <h1 className="w-full text-center xl:text-start boldStyle_text">{t("categoryTitle")}</h1>
                <p className="w-full text-center xl:text-start text-neutral-400">{t("categoryDescription")}</p>
                <CustomButton text={t("skilledTeachersBtn")} style="mt-5" vStyle={"purple"} vType={"link"} arrowColor="#fff" />
            </div>
            <div className="w-full flex flex-wrap gap-x-10 gap-y-10 justify-end">
                {newTechnologies.map(item => <CategoryItem key={item.id} amount={item.amount} title={item.techName} />)}
            </div>
        </div>
    )
}

export default Categories
