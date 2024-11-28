import { useTranslation } from "react-i18next"

const TabSection = ({ bio }) => {
    const { t } = useTranslation()

    return (
        <div className="w-full Box-shadow1 p-5 bg-MainBg rounded-lg border border-LightLavender aos-init aos-animate">
            <h1 className="w-full text-xl mb-4">{t("description")}</h1>
            {bio}
        </div>
    )
}

export default TabSection
