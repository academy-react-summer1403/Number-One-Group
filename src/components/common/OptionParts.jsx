import MediaQuery from "react-responsive";
import { OptionIcon } from "../../core/icon";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const OptionParts = ({ text, holderStyle, disableIconIn }) => {
    const { i18n } = useTranslation()
    return (
        <motion.li
            whileHover={{
                marginRight: 10
            }}
            className={`w-full flex gap-x-2 items-center ${holderStyle}`}
        >
            <MediaQuery minWidth={disableIconIn}>
                <div className={`${i18n.language === "en" ? "reverse-img" : ""} min-w-7 min-h-7 border border-[#282568] rounded-full bg-[#FFC224] flex justify-center items-center dark:shadow-lg OptionIcon_shadow`}>
                    <OptionIcon fill="#1c1A4A" />
                </div>
            </MediaQuery>
            <h4 className="w-full font-IranSans text-lg lg:text-start text-center mobile:text-base hover:text-[#5751E1] cursor-default">{text}</h4>
        </motion.li>
    )
}

export default OptionParts;
