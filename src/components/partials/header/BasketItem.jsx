import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const BasketItems = ({ Icon, number, href }) => {
    const { i18n } = useTranslation()
    return (
        <Link to={href} className="relative cursor-pointer group">
            <Icon width="39px" className="md:group-hover:stroke-VioletBlue group-hover:stroke-gray-300 max-md:stroke-LightGray" />
            <div className={`${i18n.language == "en" ? "-right-4" : "-right-1"} bg-SunshineYellow/80 absolute rounded-full text-center min-w-[20px] text-sm top-2`}>
                {number}
            </div>
        </Link>
    )
}

export default BasketItems