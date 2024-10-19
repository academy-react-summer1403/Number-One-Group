import { Link } from "react-router-dom"
import { LogoGroup } from "../../common"
import { CartIcon, UserIcon } from "../../../core/icon"
import { Tooltip } from "@nextui-org/react"
import tooltipStyle from "../../../core/constants/tooltip-style"
import { useTranslation } from "react-i18next"

const UserPanelHeader = () => {
    const { i18n } = useTranslation()

    return (
        <div className="w-full flex justify-between items-center">
            <LogoGroup color={'text-VioletBlue'} />
            <div className="h-full flex items-end gap-x-4">
                <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Cart" : "سبد خرید"}>
                    <Link to={"/cart"} className="w-[37px] h-[37px] flex justify-center items-center relative">
                        <CartIcon />
                        <div className="w-5 h-5 text-center text-white rounded-full bg-SunshineYellow text-sm absolute -bottom-1 -right-1">1</div>
                    </Link>
                </Tooltip>
                <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "User Account" : "حساب کاربری"}>
                    <Link className="w-[47px] h-[47px] rounded-full bg-VioletBlue flex justify-center items-center">
                        <UserIcon width="26px" height="26px" />
                    </Link>
                </Tooltip>
            </div>
        </div>
    )
}

export default UserPanelHeader
