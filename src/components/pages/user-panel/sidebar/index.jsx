import { Link } from "react-router-dom"
import SidebarButtons from "./SidebarButtons"
import { useTranslation } from "react-i18next"
import { ImageFallBack } from "../../../common"
import fallback from "../../../../assets/images/user-circle-icon.png"
import { ExitBtnPanelIcon } from "../../../../core/icon"
import sidebarBtns from "../../../../core/constants/user-panel/SidebarBtns"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../../../../core/hooks/local-storage"

const SidebarUserPanel = () => {
    const { t, i18n } = useTranslation()
    const userInfo = useSelector(state => state.UserInfo.info)
    const { fName, lName, } = userInfo && userInfo
    const dispatch = useDispatch()

    const handleExit = () => {
        removeItem("token")
        dispatch(setInfo(false))
    }

    return (
        <div className="h-fit flex justify-center flex-wrap gap-y-5 my-auto">
            <ImageFallBack
                fallback={fallback}
                alt={'Profile'}
                src={userInfo.currentPictureAddress}
                className="w-[125px] h-[125px] rounded-full shadow-2xl"
            />
            <div className="flex flex-wrap w-full mb-5 h-10">
                <h1 className="w-full h-fit text-center text-xl text-white">{fName} {lName} {t("welcome")}</h1>
                <span className="w-full h-1 borderButton_sidebar_userPanel"></span>
            </div>
            <div className={`w-full ${i18n.language == "en" ? "pl-8" : "pr-8"} flex flex-wrap gap-y-4`}>
                {sidebarBtns.map(item => <SidebarButtons key={item.id} Icon={item.icon} href={item.href} name={i18n.language != "en" ? item.name[0] : item.name[1]} tourStyle={item.tourStyle} />)}
            </div>
            <Link onClick={handleExit} to="/" className="text-white flex items-center gap-x-3 mt-5">
                <ExitBtnPanelIcon />
                <span>{t("exitFromAccount")}</span>
            </Link>
        </div>
    )
}

export default SidebarUserPanel
