import { HatIcon } from "../../../../core/icon"
import { UnitPrice } from "../../../../core/utility/SeparationPrice"
import { ImageFallBack } from "../../../common"
import fallback from "../../../../assets/images/image-not-found.png"
import ChangeMoment from "../../../../core/utility/moment"
import { Link } from "react-router-dom"

const CreateCourseCard = ({ price, title, teacher, picture, date, course = true, href }) => {
    return (
        <Link
            to={href}
            className='w-full md:w-[400px] lg:w-full h-20 rounded-xl p-2 flex gap-x-2 bg-LightLavender hover:scale-105 duration-200 cursor-pointer'
        >
            <ImageFallBack
                src={picture}
                fallback={fallback}
                className='min-w-24 h-full rounded-xl'
            />
            <div className='w-full flex flex-wrap'>
                <span className='boldStyle_text font-IranSans text-base'>{title}</span>
                <div className='w-full flex justify-between items-end text-sm text-VioletBlue'>
                    <span className="flex gap-x-2">
                        <HatIcon className="w-4 h-4 stroke-VioletBlue" />
                        {teacher}
                    </span>
                    <span>
                        <span className="text-SunshineYellow inline-block text-base">
                            {course ? UnitPrice(price) : ChangeMoment(date, "YYYY/MM/DD", "persian")}
                        </span>
                        {course && <span className="mediumStyle_text text-sm"> تومان </span>}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default CreateCourseCard
