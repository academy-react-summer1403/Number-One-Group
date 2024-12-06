import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const MenuHeaderItems = ({ title, href }) => {
  const { t } = useTranslation();
  const mobileOrTablet = useMediaQuery({ minWidth: 1024 })

  return (
    <div className="relative text-center cursor-pointer lg:text-sm hover:text-SunshineYellow lg:hover:text-VioletBlue duration-200 lg:text-DarkBlue text-white max-lg:my-6">
      <NavLink to={href} style={({ isActive }) => ({ color: isActive && `${mobileOrTablet ? "#5751E1" : "#FFC224"}`, pointerEvents: isActive && "none" })}>{t(title)}</NavLink>
      <NavLink to={href} style={({ isActive }) => ({ display: isActive ? "block" : "none", pointerEvents: isActive && "none" })} className="w-full h-1 lg:bgGradient_menu borderButton_sidebar_userPanel absolute -bottom-2 right-0"></NavLink>
    </div>
  )
}

export default MenuHeaderItems