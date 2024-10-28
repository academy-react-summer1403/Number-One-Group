import { SwiperSlide } from "swiper/react"
import { CustomButton, Label, SwiperSlider } from "../../common/index"
import { useTranslation } from "react-i18next"
import CategoryItem from "./CreateCategoryItem"
import { useEffect, useState } from "react"
import { GetAllCourseByPagination, GetTechnologies } from "../../../core/services/api/get-data"
import { BannerImg } from "../../../core/icon"
import MediaQuery from "react-responsive"

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

    const viewMoreBtn = <CustomButton href={"/courses"} text={t("skilledTechnologies")} style="lg:mt-5 max-lg:my-12 max-lg:mx-auto max-lg:block" vStyle={"purple"} vType={"link"} arrowColor="#fff" />
    return (
        <div className="w-full lg:flex gap-x-2 lg:pb-28 xl:px-44 sm:px-16 px-8 justify-between items-center">
            <div data-aos="fade-left" className="min-w-[400px] w-full xl:w-[400px] h-fit flex justify-center xl:justify-start flex-wrap gap-y-4 z-40">
                <Label text={t("categoryLabel")} variant="bgGray" />
                <h1 className="w-full text-center xl:text-start boldStyle_text">{t("categoryTitle")}</h1>
                <p className="w-full text-center xl:text-start text-neutral-400">{t("categoryDescription")}</p>
                <MediaQuery minWidth={'1024px'}>{viewMoreBtn}</MediaQuery>
            </div>
            <div className="w-full sm:flex flex-wrap md:gap-x-10 gap-y-10 lg:justify-end max-lg:mt-24 justify-around relative">
                <BannerImg className={'absolute -top-24 -left-12 opacity-90 max-lg:hidden'} />
                {newTechnologies.map(item => (
                    <div data-aos="fade-right" className="sm:odd:-mt-[60px] sm:even:mt-[10px] z-50">
                        <CategoryItem key={item.id} amount={item.amount} title={item.techName} />
                    </div>
                ))}
            </div>
            <MediaQuery maxWidth={'1024px'}>{viewMoreBtn}</MediaQuery>
        </div>
    )
}

export default Categories
