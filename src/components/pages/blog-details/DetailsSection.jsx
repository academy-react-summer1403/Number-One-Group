import { BsClock, BsEyeFill } from "react-icons/bs"
import { DateIcon} from "../../../core/icon"
import { BiComment } from "react-icons/bi"
import { useTranslation } from "react-i18next"

const DetailsSection = ({
    category,
    date,
    view,
    studyTime,
    commentsNumber
}) => {
    const { t } = useTranslation();

    const firstDetails = [
        { text: date, icon: <DateIcon fill="#5751E1" height={18} width={18} /> },
        { text: view, icon: <BsEyeFill color="#5751E1" className="w-4 h-4" /> },
    ]
    const lastDetails = [
        { text: 'studyTime', count: studyTime, icon: <BsClock color="#5751E1" /> },
        { text: 'comment', count: commentsNumber, icon: <BiComment color="#5751E1" /> },
    ]

    return (
        <div className="flex justify-between mt-8 mb-6">
            <div className="flex gap-4 items-center">
                <div className="px-4 py-1 bg-VioletBlue text-sm text-white rounded-2xl whitespace-nowrap cursor-default">{category}</div>
                {firstDetails.map((item, index) => (
                    <div key={index} className="flex gap-1.5 mediumStyle_text text-sm">
                        {item.icon}
                        <h1>{item.text}</h1>
                    </div>
                ))}
            </div>
            <div className="flex gap-4 items-center">
                {lastDetails.map((item, index) => (
                    <div key={index} className="flex gap-1.5">
                        {item.icon}
                        <div className="flex gap-1 mediumStyle_text text-sm">
                            <h1>{item.count}</h1>
                            <h2>{t(item.text)}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default DetailsSection