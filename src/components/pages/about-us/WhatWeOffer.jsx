import { Label } from "../../common"
import EducationalServices from "./EducationalServices"
import { Services } from "../../../core/constants/about-us/EducationalServices"
import { useTranslation } from "react-i18next"

const WhatWeOffer = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className="w-full bg-[#F7F7F9] dark:bg-[#1E1E2F] flex flex-wrap justify-center gap-y-3 lg:px-44 sm:px-16 px-8 mt-20 py-20">
            <Label text={t("WhatWeOfferChip")} variant="bgGray" />
            <div className="w-full flex justify-center">
                <h1 className="text-center boldStyle_text w-[583px]">{t("WhatWeOfferTitle")}</h1>
            </div>
            <p className="mediumStyle_text text-center">{t("WhatWeOfferDesc")}</p>
            <div className="w-full h-56 max-xl:h-fit flex gap-8 mt-4 max-md:flex-wrap">
                {Services.map((item, index) => <EducationalServices
                    bgCard={item.bgColor}
                    description={i18n.language != "en" ? item.description[0] : item.description[1]}
                    shadowCard={item.shadowColor}
                    title={i18n.language != "en" ? item.title[0] : item.title[1]}
                    bgIcon={item.bgIcon}
                    Icon={item.icon}
                    key={index}
                />)}
            </div>
        </div>
    )
}

export default WhatWeOffer
