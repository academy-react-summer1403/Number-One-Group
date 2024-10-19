import { useTranslation } from "react-i18next"
import CreateInformationItem from "./CreateInformationItem"
import mapImage from "../../../../assets//images/Map.png"

const CreateInformationSection = ({ styleSection, section, map = false }) => {
    const { i18n } = useTranslation()

    return (
        <ul className={`w-full md:w-1/2 mobile:px-4 px-12 py-5 flex flex-wrap gap-y-5 lg:gap-y-10 relative ${styleSection}`}>
            {section && section.map((obj, index) => <CreateInformationItem key={index} fieldTitle={obj.title} descriptionTitle={obj.description} />)}
            {map && <img src={mapImage} className={`hidden lg:block w-28 h-28 rounded-full absolute bottom-2 ${i18n.language != "en" ? "left-12" : "right-12"}`} />}
        </ul>
    )
}

export default CreateInformationSection
