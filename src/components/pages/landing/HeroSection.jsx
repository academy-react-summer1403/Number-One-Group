import { useTranslation } from "react-i18next";
import { Button, ImageFallBack } from "../../common"
import Typewriter from 'typewriter-effect';
import mannequin_heroSection from "../../../assets/images/mannequin-heroSection.png"
import { useSelector } from "react-redux";
import Profile from "../../../assets/images/mannequin-faqPoster.png"
import { GetAllTeachers } from "../../../core/services/api/get-data";
import { useQueryWithoutDependencies } from "../../../core/hooks/react-query";

const HeroSection = () => {
    const { t, i18n } = useTranslation()
    const persianWords = ["یادگیری", "تلاش", "استقامت"]
    const englishWords = ["Learning", "Effort", "Stamina"]
    const theme = useSelector(state => state.DarkMode)

    const { data, isSuccess } = useQueryWithoutDependencies("GET_TEACHERS", GetAllTeachers)

    return (
        <div className={`w-full h-[420px] flex justify-between items-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover lg:px-44 sm:px-16 px-8`}>
            <div className="w-full md:w-[400px] h-fit flex flex-wrap justify-center md:justify-start gap-y-4">
                <div className="w-full flex justify-center md:justify-start flex-wrap h-fit gap-y-4 md:gap-x-3 items-end">
                    <h1 className='boldStyle_text w-full text-nowrap text-center md:w-auto'>{t("heroSectionTitle1")}</h1>
                    <h1 className="importantWord py-1.5">
                        <Typewriter
                            options={{
                                strings: (i18n.language === "en" ? englishWords : persianWords),
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <h1 className='boldStyle_text md:text-start text-center'>{t("heroSectionTitle2")}</h1>
                <p className='mediumStyle_text md:text-start text-center'>{t("heroSectionDescription")}</p>
                <Button text={t("heroSectionBtn")} style="mt-5" variant={"purple"} arrowColor="#fff" />
            </div>
            <div data-aos={`fade-left`} data-aos-duration="1500" className="w-[450px] h-full hidden md:flex justify-center items-end relative">
                <div className={`${i18n.language === "en" ? "left-[-0px]" : "right-[-0px]"} w-44 h-24 flex flex-wrap rounded-lg top-[60px] p-4 heroSection_box_shadow bg-MainBg text-DarkBlue absolute`}>
                    {isSuccess && data.slice(0, 2).map(item => (
                        <div key={item.teacherId} className="w-full h-1/2 py-1 flex items-center gap-x-2">
                            <ImageFallBack
                                className="w-7 h-7 rounded-full"
                                alt={"Profile"}
                                src={item.pictureAddress}
                                fallback={Profile}
                            />
                            <h1>{item.fullName}</h1>
                        </div>
                    ))}
                </div>
                <img className={`h-[350px] w-full ${i18n.language === "en" ? "reverse-img" : ""}`} src={mannequin_heroSection} alt="" />
            </div>
        </div>
    )
}

export default HeroSection