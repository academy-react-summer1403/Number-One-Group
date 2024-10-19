import { useTranslation } from "react-i18next"
import { NavLink, useLocation } from "react-router-dom"

const SidebarButtons = ({ href, name, Icon }) => {
    const { i18n } = useTranslation()
    const location = useLocation()
    const activeStyle = {
        background: "#fff",
        boxShadow: i18n.language == "en" ? "-3px 7px 0px 0px #050071" : "3px 7px 0px 0px #050071",
        borderLeftWidth: "4px",
        borderRightWidth: "4px",
        borderLeftColor: i18n.language == "en" ? "transparent" : "#ffc224",
        borderRightColor: i18n.language == "en" ? "#ffc224" : "transparent",
        color: "#161439"
    }
    
    return (
        <NavLink to={href} end={true} className={`w-full h-fit flex text-white items-center gap-x-5 py-2.5 ${i18n.language == "en" ? "rounded-l-full pl-6" : "rounded-r-full pr-6"}`} style={({ isActive }) => (isActive ? activeStyle : null)}>
            <div className="w-6 h-5 flex justify-center items-center">
                {location.pathname.toLowerCase() == href.toLowerCase() ? <Icon /> : null}
            </div>
            <span>{name}</span>
        </NavLink>
    )
}

export default SidebarButtons
