import { useTranslation } from "react-i18next"
import BreadCrumb from "./BreadCrumb"
import { useSelector } from "react-redux";

const TitleSection = ({ title, children }) => {
  const { t, i18n } = useTranslation();
  const theme = useSelector(state => state.DarkMode)

  return (
    <div className={`flex py-7 justify-center flex-wrap gap-y-2 ${theme ? "bg-gradientBackgroundDark" : "bg-titleSectionGradient"} bg-cover`}>
      <h1 className="w-full h-fit text-center boldStyle_text">{t(title)}</h1>
      <BreadCrumb text={'HomeSection'} href={'/'} />
      {children}
    </div>
  )
}

export default TitleSection