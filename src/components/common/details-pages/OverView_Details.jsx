import { useTranslation } from "react-i18next"
import OptionParts from "../OptionParts"

export const BorderStyleVariant = {
    "course": "Box-shadow1 p-5 bg-MainBg rounded-lg border border-LightLavender",
}


const OverView_Details = ({
    overView,
    training,
    MajorElements,
    Class,
    variant,
    titleLearning,
    ElementClass,
    titleOverView
}) => {
    const { t } = useTranslation()
    return (
        <div>
            <div className={`max-sm:text-center ${BorderStyleVariant?.[variant]}`}>
                {/* OverView Text */}
                <div className={`${Class}`}>
                    <h1 className={`boldStyle_text mb-3`}>{t(titleOverView)}</h1>
                    <h2 className="mediumStyle_text">{t(overView)}</h2>
                </div>
                {/* Learn Text */}
                <h1 className="boldStyle_text my-3">{t(titleLearning)}</h1>
                <h2 className="mediumStyle_text mb-4">{t(training)}</h2>
                <div className="md:flex gap-4 max-md:mx-auto items-center w-fit">
                    <img src={''} alt="event Icon" className={`h-56 max-md:mx-auto ${ElementClass}`} />
                    <div>
                        <h1 className={`boldStyle_text lg:w-96 ${ElementClass}`}>{t('EventElements')}</h1>
                        {MajorElements?.map((item, index) => (
                            <OptionParts
                                key={index}
                                text={item}
                                holderStyle="justify-center lg:justify-start my-3"
                                disableIconIn="1024px"
                            />
                        ))}
                    </div>
                </div>
                <h3 className="mediumStyle_text my-3">{t(training)}</h3>
            </div>
        </div>
    )
}

export default OverView_Details