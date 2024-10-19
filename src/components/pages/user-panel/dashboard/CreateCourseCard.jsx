import { HatIcon } from "../../../../core/icon"
import { UnitPrice } from "../../../../core/utility/SeparationPrice"

const CreateCourseCard = ({ price, title, teacher, picture }) => {
    return (
        <div className='w-[400px] lg:w-full h-20 rounded-xl p-2 flex gap-x-2 bg-LightLavender hover:scale-105 duration-200 cursor-pointer'>
            <div className='w-full flex flex-wrap'>
                <span className='boldStyle_text font-IranSans text-base'>{title}</span>
                <div className='w-full flex justify-between items-end text-sm text-VioletBlue'>
                    <span className="flex gap-x-2">
                        <HatIcon className="w-4 h-4 stroke-VioletBlue" />
                        {teacher}
                    </span>
                    <span className='hidden sm:block'>
                        <span className="text-SunshineYellow inline-block text-base">{UnitPrice(price)}</span>
                        <span className="mediumStyle_text text-sm"> تومان </span>
                    </span>
                </div>
            </div>
            <img src={picture} className='min-w-24 h-full rounded-xl' />
        </div>
    )
}

export default CreateCourseCard
