import { useTranslation } from "react-i18next"
import BreadCrumb from "./BreadCrumb"
import TitlePage from "./TitlePage"
import { useSelector } from "react-redux";

const TitleSection = ({ title,children }) => {
  const { i18n } = useTranslation();
  const theme = useSelector(state => state.DarkMode)

  return (
    <div className={`flex py-7 justify-center flex-wrap gap-y-2 ${theme ? "bg-gradientBackgroundDark" : "bg-titleSectionGradient"} bg-cover`}>
      <TitlePage title={title} />

      <BreadCrumb text={'HomeSection'} href={'/'} />
      {children}
      
    </div>
  )
}

export default TitleSection