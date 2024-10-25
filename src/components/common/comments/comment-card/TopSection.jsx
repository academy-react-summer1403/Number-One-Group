import { useTranslation } from "react-i18next"
import ChangeMoment from "../../../../core/utility/moment"

const TopSection = ({ name, date, title, describe, Style }) => {
  const {t} = useTranslation();
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-xl font-semibold'>{name ?? t('noName')}</h1>
        <p className='mediumStyle_text text-sm'>{date && ChangeMoment(date, "YYYY/MM/DD", "persian")}</p>
      </div>
      <h1 className={`text-lg font-semibold mt-6 ${Style}`}>{title}</h1>
      <h2 className='mediumStyle_text mt-2'>{describe}</h2>
    </div>
  )
}

export default TopSection