import { useTranslation } from "react-i18next"
import HandleIdentityEditorJs from "../create-editorjs-blocks/IdentityEditorJs"

export const BorderStyleVariant = {
    "courseDetails": "Box-shadow1 p-5 bg-MainBg rounded-lg border border-LightLavender",
}

const OverView_Details = ({
    miniDescribe,
    describe,
    Class,
    variant,
    title
}) => {
    const { t } = useTranslation()

    return (
        <div data-aos="fade-left" className={`max-sm:text-center Box-shadow1 p-5 bg-MainBg rounded-lg border border-LightLavender ${BorderStyleVariant?.[variant]}`}>
            {/* OverView Text */}
            <div className={`${Class}`}>
                <h1 className={`boldStyle_text mb-3`}>{t(title)}</h1>
                <p className="mediumStyle_text">{miniDescribe}</p>
            </div>
            <p className="mediumStyle_text">
                <HandleIdentityEditorJs desc={describe}/>
                </p>
        </div>
    )
}

export default OverView_Details