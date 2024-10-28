import { useTranslation } from "react-i18next";
import { CustomButton } from "../../common"
import Typewriter from 'typewriter-effect';
import mannequin_heroSection from "../../../assets/images/mannequin-heroSection.png"
import { useSelector } from "react-redux";
import { GetAllTeachers } from "../../../core/services/api/get-data";
import { useQueryWithoutDependencies } from "../../../core/hooks/react-query";
import { motion } from "framer-motion";
import { Avatar, AvatarGroup } from "@nextui-org/react";

const HeroSection = () => {
    const { t, i18n } = useTranslation()
    const persianWords = ["یادگیری", "تلاش", "استقامت"]
    const englishWords = ["Learning", "Effort", "Stamina"]
    const theme = useSelector(state => state.DarkMode)

    const { data, isSuccess } = useQueryWithoutDependencies("GET_TEACHERS", GetAllTeachers)

    return (
        <div className={`w-full h-[520px] flex justify-between items-center ${theme ? "gradientBackgroundDark" : "gradientBackground"} bg-cover lg:px-44 sm:px-16 px-8`}>
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
                <CustomButton href={"/courses"} text={t("heroSectionBtn")} style="mt-5" vType={"link"} vStyle={"purple"} arrowColor="#fff" />
            </div>
            <div className="w-[600px] h-full hidden md:flex justify-center items-end relative">
                <div className={`${i18n.language === "en" ? "left-[50px]" : "right-[50px]"} w-44 h-fit flex flex-wrap  gap-y-3 rounded-lg top-[80px] p-4 heroSection_box_shadow bg-MainBg text-DarkBlue absolute z-10`}>
                    <h1>بیش از 30 استاد برتر</h1>
                    <AvatarGroup isBordered max={3}>
                        {isSuccess && data.map((item) => (
                            <Avatar key={item.teacherId} src={item.pictureAddress} />
                        ))}
                    </AvatarGroup>
                </div>
                <img
                    className={`h-[450px] w-full ${i18n.language === "en" ? "reverse-img" : ""}`}
                    src={mannequin_heroSection}
                />
            </div>
        </div>
    )
}

export default HeroSection