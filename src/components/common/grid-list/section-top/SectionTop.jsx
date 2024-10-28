import { useTranslation } from "react-i18next"
import { FaHashtag } from "react-icons/fa6";
import tooltipStyle from "../../../../core/constants/tooltip-style";
import { Tooltip } from "@nextui-org/react";

import handleCopyUrl from "../../../../core/utility/copy-url";

const SectionTop = ({ lengthAllData, lengthFilteredData, children }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="sm:flex mobile:block gap-4 justify-between items-center pb-2">
            <div className="mediumStyle_text text-sm  max-sm:mx-auto w-fit text-center flex gap-x-2">
                <span>{t('show')}</span>
                <span className="text-blue-600">{lengthFilteredData}</span>
                <span>{t('result')}</span>
                <span>{lengthAllData}</span>
            </div>
            <div className="flex items-center gap-4 mx-2 my-2">
                {children}
                <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Copy Address" : "کپی کردن آدرس"}>
                    <div onClick={handleCopyUrl} className="bg-VioletBlue cursor-pointer border border-VioletBlue p-2 rounded-lg">
                        <FaHashtag className="fill-white w-[20px] h-[16px]" />
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default SectionTop
