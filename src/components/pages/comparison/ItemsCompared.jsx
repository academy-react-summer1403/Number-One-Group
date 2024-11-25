import { BiDislike, BiDollar, BiLike } from "react-icons/bi"
import { DateIcon, LevelIcon,StarIcon, StudentIcon, TeacherIcon, TopicsIcon, TotalIcon } from "../../../core/icon"
import { useTranslation } from "react-i18next"
import { CustomButton, ImageFallBack } from "../../common"
import NotFoundImg from "../../../assets/images/image-not-found.png"
import { SeparationPrice, UnitPrice } from "../../../core/utility/SeparationPrice"

// import { Button } from "../../common"

const ItemsCompared = ({
  id,
  images,
  title,
  score,
  technology,
  level,
  status,
  instructor,
  date,
  students,
  likeCount,
  disLikeCount,
  price,
}) => {
  const { t } = useTranslation()

  const Details = [
    { titleDetail: "Reviews", countDetail: score, iconDetail: StarIcon },
    { titleDetail: "category", countDetail: technology, iconDetail: TotalIcon },
    { titleDetail: "level", countDetail: level, iconDetail: LevelIcon },
    { titleDetail: "statusCourse", countDetail: status, iconDetail: TopicsIcon },
    { titleDetail: "instructor", countDetail: instructor, iconDetail: TeacherIcon },
    { titleDetail: "startTime", countDetail: date.split("T")[0], iconDetail: DateIcon },
    { titleDetail: "student", countDetail: students, iconDetail: StudentIcon },
    { titleDetail: "likeCount", countDetail: likeCount, iconDetail: BiLike },
    { titleDetail: "disLikeCount", countDetail: disLikeCount, iconDetail: BiDislike },
    { titleDetail: "CoursePrice", countDetail: UnitPrice(price), priceCount: "priceCount", iconDetail: BiDollar },
  ]

  return (
    <div className="lg:w-[420px] md:w-80 w-96 px-10 py-28 pb-10 mb-40 bg-[#5751E1]/20 bg-opacity-20 border-2 m-auto border-LightGrayish rounded-xl relative flex flex-wrap justify-center">
      <ImageFallBack
        src={images}
        alt={'coursePicture'}
        fallback={NotFoundImg}
       className="absolute -top-28 lg:w-[340px] md:w-60 h-52 sm:left-10 med_box-shadow rounded-xl"
      />
      <h1 className="text-2xl text-center text-DarkBlue line-clamp-2">{title}</h1>
      <div className="w-full">
        {Details.map((item, index) => (
          <div key={index} className="text-VioletBlue my-8 flex justify-between items-center gap-2 w-full">
            <div className=" border-b-3 flex gap-2 border-VioletBlue ">
              <item.iconDetail stroke="#5751e1" height={20} width={20} />
              <span>
                {t(item.titleDetail)} : </span>
            </div>
            <div>{item.countDetail} <span>{t(item.priceCount)}</span></div>
          </div>
        ))}
      </div> 
      <CustomButton arrowColor={'#000'} href={`/CourseDetails/${id}`} vType="link" vStyle={"yellow"} text={"detailsCourse"} style="mb-2 mt-6 border-2 border-black" />
    </div>
  )
}

export default ItemsCompared