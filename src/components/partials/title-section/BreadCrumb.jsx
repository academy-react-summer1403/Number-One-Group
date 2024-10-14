import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ArrowIcon } from "../../../core/icon";
import { useSelector } from "react-redux";

const BreadCrumb = ({ text, href, type = "Link" }) => {
  const { t } = useTranslation();
  const theme = useSelector(state => state.DarkMode)
  const Variant = {
    "Link": (
      <>
        <Link to={href} className="w-fit h-fit text-center hover:text-VioletBlue text-DarkBlue duration-150">{t(text)}</Link>
        <ArrowIcon className={'rotate-90 mx-2'} fill={theme ? '#ccc' : "#555555"} />
      </>
    ),
    "Div": (
      <div className="w-fit h-fit text-center cursor-default text-VioletBlue">{t(text)}</div>
    ),
  }

  return (
    <div className="flex items-center ">
      {Variant?.[type]}
    </div>
  )
}

export default BreadCrumb