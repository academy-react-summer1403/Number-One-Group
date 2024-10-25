import CountUp from "react-countup"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const UserCourseStatus = ({ name, amount, Icon, description, href }) => {
    const { t, i18n } = useTranslation()

    return (
        <Link to={href} className='w-3/5 lg:w-44 min-w-52 h-20 flex bg-LightLavender rounded-md heroSection_box_shadow py-2 px-4 relative'>
            <div className="w-full flex flex-wrap">
                <div className='w-full text-2xl text-VioletBlue'>
                    <span className="font-Mitra text-4xl"><CountUp end={amount} duration={5} /></span>
                    <span>{name}</span>
                </div>
                <span className='w-full mediumStyle_text'>{description}</span>
            </div>
            <div className={`min-w-14 h-14 rounded-full bg-VioletBlue border-5 border-MainBg lg:absolute -top-7 flex justify-center items-center ${i18n.language == "en" ? "right-0" : "left-4"}`}>
                <Icon width="28px" height="28px" />
            </div>
        </Link>
    )
}

export default UserCourseStatus
