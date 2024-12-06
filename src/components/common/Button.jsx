import { useTranslation } from "react-i18next";
import { ArrowLeftIcon } from "../../core/icon";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const CustomButton = ({ text, arrowColor, vStyle, style, Icon, href, vType, isClick, disableArrow }) => {
    const { t, i18n } = useTranslation();
    const variantStyle = {
        "purple": "bg-VioletBlue dark:bg-[#1F1C73] text-white buttonPurple_shadow",
        "yellow": "bg-SunshineYellow text-black buttonYellow_shadow",
    }

    const variantType = {
        link: (
            <Button radius="full" className={`bg-VioletBlue text-white duration-200 group px-0 py-0 ${variantStyle?.[vStyle]} ${style}`}>
                <Link to={href} className="flex items-center justify-center gap-x-2 w-full h-full px-5">
                    {t(text)}
                    <div className={`group-hover:ms-2 duration-200 ${i18n.language === "en" ? "reverse-img" : ""} ${disableArrow}`}>
                        {Icon ? <Icon /> : <ArrowLeftIcon stroke={arrowColor} height="12px" />}
                    </div>
                </Link>
            </Button>
        ),
        button: (
            <Button onClick={isClick} type='submit' radius="full" className={`bg-VioletBlue text-white pb-1.5 pt-1.5 duration-200 group px-5 ${variantStyle?.[vStyle]} ${style}`}>
                {t(text)}
                <div className={`group-hover:ms-2 duration-200 ${i18n.language === "en" ? "reverse-img" : ""}`}>
                    {Icon ? <Icon /> : <ArrowLeftIcon stroke={arrowColor} height="12px" />}
                </div>
            </Button>
        )
    }
    
    return variantType?.[vType]
}

export default CustomButton