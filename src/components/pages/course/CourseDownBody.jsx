import React from 'react'
import { DateIcon } from '../../../core/icon'
import { useTranslation } from 'react-i18next'
import { UnitPrice } from '../../../core/utility/SeparationPrice'
import { Skeleton } from '@nextui-org/react'
import ChangeMoment from '../../../core/utility/moment'

const CourseDownBody = ({
  price,
  date,
  isLoaded
}) => {
  const { t } = useTranslation()
  const newDate = ChangeMoment(date, "YYYY/MM/DD", "persian")

  return (
    <div className='border-t-2 border-gray-400/30 pt-5 mt-5 flex justify-between cursor-default'>
      <Skeleton isLoaded={!isLoaded} className="rounded-lg w-28">
        <div className='flex gap-1'>
          <DateIcon height={20} width={17} />
          <h1 className="line-clamp-1 text-gray-500">{newDate}</h1>
        </div>
      </Skeleton>
      <Skeleton isLoaded={!isLoaded} className="rounded-lg">
        <div className='text-blue-600 text-xl'>{UnitPrice(price)}<span className='text-gray-500 text-base mx-1'>{t('priceCount')}</span></div>
      </Skeleton>
    </div>
  )
}

export default CourseDownBody