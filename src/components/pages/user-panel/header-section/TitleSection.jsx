import { useTranslation } from "react-i18next"

const TitleSection = ({ name, Icon }) => {
    const { i18n } = useTranslation()
    return (
        <div className={`flex items-end gap-x-3 bg-MainBg absolute -top-8 ${i18n.language != "en" ? "right-0" : "left-0"}`}>
            <div className='userPanel_icons static'>
                <Icon />
            </div>
            <h1 className={`boldStyle_text text-lg sm:text-2xl mb-1.5 ${i18n.language != "en" ? "pl-4" : "pr-4"}`}>{name}</h1>
        </div>
    )
}

export default TitleSection

