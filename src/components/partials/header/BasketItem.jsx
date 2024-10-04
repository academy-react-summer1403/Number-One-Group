import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import tooltipStyle from "../../../core/constants/tooltip-style"
import { Tooltip } from "@nextui-org/react"

const BasketItems = ({ item }) => {
    const { i18n } = useTranslation()
    return (
        <Tooltip {...tooltipStyle} content={i18n.language == "en" ? item.tooltip[1] : item.tooltip[0]}>
            <div>
                <Link to={item.href} className="relative cursor-pointer group">
                    <item.icon width="39px" className="md:group-hover:stroke-VioletBlue group-hover:stroke-gray-300 max-md:stroke-LightGray" />
                    <div className={`${i18n.language == "en" ? "-right-4" : "-right-1"} bg-SunshineYellow/80 absolute rounded-full text-center min-w-[20px] text-sm top-2`}>
                        {item.number}
                    </div>
                </Link>
            </div>
        </Tooltip>
    )
}

export default BasketItems