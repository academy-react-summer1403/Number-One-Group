import { useTranslation } from "react-i18next";
import { Button } from "../../common"
import Typewriter from 'typewriter-effect';
import mannequin_heroSection from "../../../assets/images/mannequin-heroSection.png"
import { boxItems } from "../../../core/constants/landing/heroSection";
import { useSelector } from "react-redux";

const HeroSection = () => {
    const { t, i18n } = useTranslation()
    const persianWords = ["یادگیری", "تلاش", "استقامت"]
    const englishWords = ["Learning", "Effort", "Stamina"]
    const theme = useSelector(state => state.DarkMode)

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
            <div className="w-[450px] h-full hidden md:flex justify-center items-end relative">
                <div className={`${i18n.language === "en" ? "left-[-0px]" : "right-[-0px]"} w-44 h-24 flex flex-wrap rounded-lg top-[60px] p-4 heroSection_box_shadow bg-MainBg text-DarkBlue absolute`}>
                    {boxItems.map(item => (
                        <div key={item.id} className="w-full h-1/2 py-1 flex items-center gap-x-2">
                            <div className="w-7 h-7 rounded-full bg-yellow-300"></div>
                            <h1>{i18n.language == "en" ? item.name[0] : item.name[1]}</h1>
                        </div>
                    ))}
                </div>
                <img className={`h-[350px] w-full ${i18n.language === "en" ? "reverse-img" : ""}`} src={mannequin_heroSection} alt="" />
            </div>
        </div>
    )
}

export default HeroSection