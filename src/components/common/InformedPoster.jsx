import { useTranslation } from "react-i18next";
import mannequin from "../../assets/images/mannequin-informedPoster.png";
import { CustomButton } from "./index"
import MediaQuery from "react-responsive";

const InformedPoster = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full py-6 flex justify-center overflow-hidden items-center informedPoster bg-cover bg-center bg-no-repeat lg:px-44 sm:px-16 px-8">
            <MediaQuery minWidth={"768px"}>
                <div className="min-w-80 w-80 relative -bottom-10 xl:-bottom-6 flex items-end ">
                    <img src={mannequin} alt="Image" />
                </div>
            </MediaQuery>
            <div className="w-[700px] h-fit flex flex-wrap gap-y-6 mt-8">
                <h1 className="w-full xl:w-2/3 boldStyle_text text-center xl:text-start text-white">{t("informedWord1")} <span className="text-3xl sm:text-4xl">{t("informedImportantWord1")}</span> {t("informedWord3")} <span className="text-3xl sm:text-4xl">{t("informedImportantWord2")}</span></h1>
                <div className="w-full h-14 flex flex-wrap justify-center xl:justify-start xl:flex-nowrap gap-y-6 gap-x-2">
                    <input className="w-full xl:w-2/3 rounded-full px-4 py-3 bg-[#4A44D1]" placeholder={t("informedPlaceholder")} type="email" />
                    <CustomButton text={t("informedBtn")} vType="button" vStyle="yellow" style="h-full" arrowColor="#000" />
                </div>
            </div>
        </div>
    )
}

export default InformedPoster
