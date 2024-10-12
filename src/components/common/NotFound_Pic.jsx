import { useTranslation } from "react-i18next";
import imgNot from "../../assets/images/notResult.png"
const NotFound_Pic = ({text}) => {
    const { t } = useTranslation();
    return (
        <div className="sticky top-20 mt-20 w-fit mx-auto">
            <div className="dark:bg-slate-500 p-4 rounded-xl">
                <img src={imgNot} />
            </div>
            <p className="text-3xl font-semibold mt-5">*{t(text)}*</p>
        </div>
    )
}

export default NotFound_Pic