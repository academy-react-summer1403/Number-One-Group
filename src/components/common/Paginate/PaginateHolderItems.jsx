import { useTranslation } from "react-i18next"

const PaginateHolderItems = ({ style, children }) => {
  const { i18n } = useTranslation()
  return (
    <div dir={i18n.language === "fa" ? 'rtl' : 'ltr'} className={`w-full flex flex-wrap ${style}`}>
      {children}
    </div>
  )
}

export default PaginateHolderItems
