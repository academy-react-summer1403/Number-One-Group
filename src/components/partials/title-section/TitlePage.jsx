import { useTranslation } from "react-i18next"

const TitlePage = ({ title }) => {
  const { t } = useTranslation();
  return (
    <h1 className="w-full h-fit text-center boldStyle_text">{t(title)}</h1>
  )
}

export default TitlePage