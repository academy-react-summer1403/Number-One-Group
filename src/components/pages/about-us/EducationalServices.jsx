import { useTranslation } from "react-i18next"
import { SparklesIcon } from "../../../core/icon"

const EducationalServices = ({ Icon, title, description, bgCard, shadowCard, bgIcon }) => {
    const { i18n } = useTranslation()
    return (
        <div
            style={{
                backgroundColor: bgCard,
                borderColor: shadowCard,
                boxShadow: `8px 8px 0 ${shadowCard}`,
            }}
            className="w-1/3 max-md:w-full relative flex flex-wrap gap-y-4 xl:px-10 px-5 py-8 rounded-3xl border-2"
        >
            <div className={`absolute ${i18n.language != "en" ? "reverse-img left-6 top-6" : "right-6 top-6"}`}>
                <SparklesIcon />
            </div>
            <div className="w-full flex items-center gap-4 max-xl:flex-wrap max-xl:justify-center">
                <div style={{ backgroundColor: bgIcon }} className="w-[70px] h-[70px] rounded-full grid place-items-center">
                    <Icon fill="#fff" width="30px" height="30px" />
                </div>
                <h1 className="boldStyle_text text-xl line-clamp-2 max-xl:w-full max-xl:text-center text-[#161439]">{title}</h1>
            </div>
            <p className="mediumStyle_text line-clamp-3 max-xl:text-center text-[#161439]">{description}</p>
        </div>
    )
}

export default EducationalServices
