import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

const LogoGroup = ({ color }) => {
    const { t } = useTranslation();
    return (
        <Link className="w-auto flex gap-1 items-center">
            <img src="../logo.svg" alt="Logo" className="h-10" />
            <div className="mb-1 max-[1450px]:hidden max-[1270px]:block">
                <h1 className={`text-xl text-nowrap font-semibold boldStyle_text ${color}`}>{t('nameGroup')}</h1>
                <h2 className={`text-[10px] text-nowrap -mt-1 ${color}`}>{t('teamSlogan')}</h2>
            </div>
        </Link>
    )
}

export default LogoGroup