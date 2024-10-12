import { useTranslation } from "react-i18next"


const SectionTop = ({
    lengthAllData,
    lengthFilteredData,
    children
}) => {
    const { t } = useTranslation();
    console.log(lengthAllData)
    return (
        <div className="sm:flex mobile:block gap-4 justify-between items-center pb-2">
            <div className="mediumStyle_text text-sm  max-sm:mx-auto w-fit text-center flex gap-x-2">
                <span>{t('show')}</span>
                <span className="text-blue-600">{lengthFilteredData}</span>
                <span>{t('result')}</span>
                <span>{lengthAllData}</span>
            </div>
            <div className="flex items-center gap-4 mx-2 my-2">{children}</div>
        </div>
    )
}

export default SectionTop