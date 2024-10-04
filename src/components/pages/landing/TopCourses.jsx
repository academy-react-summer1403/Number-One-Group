import { useTranslation } from "react-i18next"
import { Label, SwiperSlider } from "../../common"
import Tab from "./tab"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import GetTechnologies from "../../../core/services/api/get-data/GetTechnologies"

const TopCourses = () => {
    const { t, i18n } = useTranslation()
    const [tabs, setTabs] = useState([])
    const theme = useSelector(state => state.DarkMode)
    const [tabValue, setTabValue] = useState(2)

    const Breakpoints = {
        1024: { spaceBetween: 20, slidesPerView: 4 },
        680: { spaceBetween: 20, slidesPerView: 2 },
        300: { spaceBetween: 20, slidesPerView: 1 },
    }

    const getTabs = async () => {
        setTabs(await GetTechnologies())
    }

    useEffect(() => { getTabs() }, [])
    return (
        <div className={`w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
            <Label text={t("topCoursesLabel")} variant="bgGray" />
            <h1 className="boldStyle_text w-full text-center">{t("topCoursesTitle")}</h1>
            <p className="mediumStyle_text w-full text-center">{t("topCoursesDescription")}</p>
            <div className="mobile:w-full sm:w-auto flex mobile:justify-evenly justify-center relative mobile:px-0 sm:px-20 mt-10">
                {tabs.map(obj => <Tab key={obj.id} setTabValue={setTabValue} value={obj.id} name="landing" title={obj.techName} />)}
                <span className="w-full h-1 bg-LightGrayish rounded-full bottom-0 absolute"></span>
            </div>
            <div className="max-[680px]:w-[300px] w-[110%] mt-5 relative">
                <SwiperSlider
                    perView={4}
                    Breakpoints={Breakpoints}
                    arrowColor="#fff"
                    buttonSideLeft="top-[190px] xl:-left-[60px] sm:left-[20px] hidden sm:flex h-12 z-30 w-12"
                    buttonSideRight="top-[190px] xl:-right-[60px] sm:right-[20px] hidden sm:flex h-12 z-30 w-12"
                    buttonColor="bg-VioletBlue"
                >
                    <div className="h-48 w-full bg-SunshineYellow"></div>
                </SwiperSlider>
            </div>
        </div>
    )
}

export default TopCourses
