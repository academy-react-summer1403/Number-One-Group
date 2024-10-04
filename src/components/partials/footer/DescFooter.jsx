import { useTranslation } from "react-i18next"
import { LogoGroup } from "../../common";

const DescFooter = () => {
    const { t } = useTranslation();
    return (
        <div className="md:w-64 sm:w-96 h-fit max-md:m-auto">
            {/* <img src="../icons/logoDark.png" alt="Logo" className="md:h-9 h-11 max-md:m-auto" /> */}
            <LogoGroup color={'text-white'}/>
            <h1 className="text-neutral-400 max-sm:text-center mt-5">{t('footerDescription')}</h1>
        </div>
    )
}

export default DescFooter