import { useTranslation } from "react-i18next";

const SortBoxHolder = ({ children }) => {
    const { t } = useTranslation();

    return (
        <div className="flex gap-3 items-center mx-auto">
            <h1 className="text-gray-600 text-sm text-nowrap">{t('sortBy')}</h1>
            {children}
        </div>
    )
}

export default SortBoxHolder
