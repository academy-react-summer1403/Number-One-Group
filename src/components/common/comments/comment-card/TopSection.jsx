import ChangeMoment from "../../../../core/utility/moment/ChangeMoment"

const TopSection = ({ name, date, title, describe, Style }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-xl font-semibold'>{name}</h1>
        <p className='mediumStyle_text text-sm'>{date && ChangeMoment(date.slice(0, 10))}</p>
      </div>
      <h1 className={`text-lg font-semibold mt-3 ${Style}`}>{title}</h1>
      <h2 className='mediumStyle_text mt-2'>{describe}</h2>
    </div>
  )
}

export default TopSection