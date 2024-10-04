import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const MenuHeader = ({ title, href }) => {
  const { t, i18n } = useTranslation();
  const mobileOrTablet = useMediaQuery({ minWidth: 1024 })

  return (
    <div className="relative text-center cursor-pointer lg:text-sm md:hover:text-VioletBlue hover:text-SunshineYellow duration-200 text-DarkBlue max-lg:my-6">
      <NavLink to={href} style={({ isActive }) => ({ color: isActive && `${mobileOrTablet ? "#5751E1" : "#FFC224"}` })}>{t(title)}</NavLink>
      <NavLink to={href} style={({ isActive }) => ({ display: isActive ? "block" : "none" })} className="w-full h-1 lg:bgGradient_menu borderButton_sidebar_userPanel absolute -bottom-2 right-0"></NavLink>
    </div>
  )
}

export default MenuHeader