import { useTranslation } from "react-i18next"
import { Label, OptionParts, CustomButton } from "../../common"
import { aboutUsOptions } from "../../../core/constants/landing/aboutUs"
import aboutPicture from "../../../assets/images/aboutUsSection.png"
import { PlayIcon } from "../../../core/icon"
import Explosion from "../../../assets/images/Explosion.png"

const MoreInfoAboutUs = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className="w-full flex gap-x-10 lg:px-44 sm:px-16 px-8  py-20 max-lg:bg-gradientBackground bg-cover bg-center bg-no-repeat">
            <div className="w-1/2 h-[460px] max-lg:hidden rounded-[400px] relative group">
                <img className="w-full h-full" src={aboutPicture} alt="Picture" />
                <button className={`playButton ${i18n.language == "en" ? "scale-[-1]" : "top-[45%]"}`}>
                    <PlayIcon width="55px" />
                </button>
                <img className={`${i18n.language == "en" ? "left-0 group-hover:-left-4" : "right-0 reverse-img group-hover:-right-4"} absolute w-20 h-20 top-0 group-hover:-top-4 duration-200`} src={Explosion} alt="" />
            </div>
            <div className="w-1/2 max-lg:w-full h-fit flex gap-y-3 flex-wrap max-lg:justify-center">
                <Label text={t("MoreInfoAboutUsChip")} variant="bgGray" />
                <div className="w-11/12 max-xl:w-full leading-[50px] max-lg:text-center">
                    <span className="boldStyle_text">{t("MoreInfoAboutUsTitleS1")}</span>
                    <span className="importantWord px-8 py-1"> {t("MoreInfoAboutUsTitleS2")} </span>
                    <span className="boldStyle_text">{t("MoreInfoAboutUsTitleS3")}</span>
                </div>
                <p className="mediumStyle_text mb-2 line-clamp-3 max-lg:text-center">{t("MoreInfoAboutUsDesc")}</p>
                {aboutUsOptions.map(item => <OptionParts key={item.id} text={i18n.language == "en" ? item.text[1] : item.text[0]} disableIconIn="1024px" />)}
                <CustomButton text="MoreInfoAboutUsBtn" vType="link" vStyle="purple" arrowColor="#fff" style="mt-6" />
            </div>
        </div>
    )
}

export default MoreInfoAboutUs
