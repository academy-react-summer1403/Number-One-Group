import { Link } from "react-router-dom"
import SidebarButtons from "./SidebarButtons"
import { useTranslation } from "react-i18next"
import { ImageFallBack } from "../../../common"
import fallback from "../../../../assets/images/user-circle-icon.png"
import { ExitBtnPanelIcon } from "../../../../core/icon"
import sidebarBtns from "../../../../core/constants/user-panel/SidebarBtns"
import { useSelector } from "react-redux"

const SidebarUserPanel = () => {
    const { t, i18n } = useTranslation()
    const userInfo = useSelector(state => state.UserInfo.info)
    const { fName, lName, } = userInfo && userInfo

    console.log(userInfo.currentPictureAddress)

    return (
        <>
            <ImageFallBack
                fallback={fallback}
                alt={'Profile'}
                src={userInfo.currentPictureAddress}
                className="w-[125px] h-[125px] rounded-full shadow-2xl mt-2"
            />
            <h1 className="w-full h-fit text-center mt-2 text-xl text-white">{fName} {lName} {t("welcome")}</h1>
            <span className="w-full h-1 borderButton_sidebar_userPanel -mt-2"></span>
            <div className={`w-full h-[379px] mt-5 ${i18n.language == "en" ? "pl-8" : "pr-8"} flex flex-wrap`}>
                {sidebarBtns.map(item => <SidebarButtons key={item.id} Icon={item.icon} href={item.href} name={i18n.language != "en" ? item.name[0] : item.name[1]} />)}
            </div>
            <Link to="/" className="text-white flex items-center gap-x-3">
                <ExitBtnPanelIcon />
                <span>{t("exitFromAccount")}</span>
            </Link>
        </>
    )
}

export default SidebarUserPanel
