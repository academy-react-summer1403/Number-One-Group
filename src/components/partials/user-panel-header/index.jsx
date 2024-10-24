import { Link } from "react-router-dom"
import { HomeBtnPanelIcon, BasketIcon } from "../../../core/icon"
import { Tooltip } from "@nextui-org/react"
import tooltipStyle from "../../../core/constants/tooltip-style"
import { useTranslation } from "react-i18next"
import { LogoGroup } from "../../common"

const UserPanelHeader = () => {
    const { i18n } = useTranslation()

    return (
        <div className='w-full flex gap-x-4 items-center justify-between'>
            <LogoGroup />
            <div className="flex gap-x-4">
                <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Cart" : "سبد خرید"}>
                    <Link to="/cart" className='cursor-pointer hover:scale-110 duration-200'>
                        <BasketIcon width="26" height="26" className="stroke-[#5751E1]" />
                    </Link>
                </Tooltip>
                <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Home" : "خانه"}>
                    <Link to="/" className='cursor-pointer hover:scale-110 duration-200'>
                        <HomeBtnPanelIcon width="30" height="30" fill="#5751E1" />
                    </Link>
                </Tooltip>
            </div>
        </div>
    )
}

export default UserPanelHeader
