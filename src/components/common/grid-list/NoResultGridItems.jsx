import { useTranslation } from "react-i18next";
import imgNot from "../../../assets/images/not-result.svg"

const NoResultGridItems = ({ text }) => {
    const { t } = useTranslation();
    
    return (
        <div className="sticky top-20 mt-20 w-fit mx-auto flex flex-wrap justify-center gap-y-2">
            <img src={imgNot} className="min-w-[350px] w-6/12" />
            <p className="text-2xl font-semibold mt-5 w-full text-center text-DarkBlue">* {t(text)} *</p>
        </div>
    )
}

export default NoResultGridItems;