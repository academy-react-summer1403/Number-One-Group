import CountUp from "react-countup"
import { useTranslation } from "react-i18next"

const UserCourseStatus = ({ amount, Icon, description }) => {
    const { t, i18n } = useTranslation()

    return (
        <div className='w-3/5 lg:w-44 min-w-52 h-20 flex bg-LightLavender rounded-md heroSection_box_shadow py-2 px-4 relative'>
            <div className="w-2/3 flex flex-wrap">
                <div className='w-full text-2xl text-VioletBlue'>
                    <span className="!font-Mitra text-4xl"><CountUp end={amount} duration={5} /></span>
                    <span>{t("course")}</span>
                </div>
                <span className='w-full mediumStyle_text'>{description}</span>
            </div>
            <div className={`min-w-14 h-14 rounded-full bg-VioletBlue lg:absolute -top-7 flex justify-center items-center ${i18n.language == "en" ? "right-0" : "left-4"}`}>
                <Icon width="28px" height="28px" />
            </div>
        </div>
    )
}

export default UserCourseStatus
