import { BiDollar } from "react-icons/bi"
// import { CertificationsIcon, DateIcon, LevelIcon, QuizzesIcon, StarIcon, StudentIcon, TeacherIcon, TopicsIcon, TotalIcon } from "../../../core/icon"
import { useTranslation } from "react-i18next"
import { CustomButton } from "../../common"
// import { Button } from "../../common"

const ItemsCompared = ({
  // images,
  // title,
  // score,
  // level,
  // date,
  // lessons,
  // quizzes,
  // duration,
  // certifications,
  // students,
  // instructor,
  // price,
}) => {
  const { t } = useTranslation()

  const Details = [
    { titleDetail: "Reviews", countDetail: score, iconDetail: StarIcon },
    { titleDetail: "level", countDetail: level, iconDetail: LevelIcon },
    { titleDetail: "eventDate", countDetail: date, iconDetail: DateIcon },
    { titleDetail: "lessons", countDetail: lessons, iconDetail: TopicsIcon },
    { titleDetail: "EventQuizzes", countDetail: quizzes, iconDetail: QuizzesIcon },
    { titleDetail: "graduation", countDetail: duration, iconDetail: TotalIcon },
    { titleDetail: "EventCertifications", countDetail: certifications, iconDetail: CertificationsIcon },
    { titleDetail: "student", countDetail: students, iconDetail: StudentIcon },
    { titleDetail: "instructor", countDetail: instructor, iconDetail: TeacherIcon },
    { titleDetail: "CoursePrice", countDetail: price, priceCount: "priceCount", iconDetail: BiDollar },
  ]

  return (
    <div className="lg:w-[420px] md:w-80 w-96 px-10 py-28 pb-10 mb-40 bg-[#5751E1]/20 bg-opacity-20 border-2 m-auto border-LightGrayish rounded-xl relative flex flex-wrap justify-center">
      {/* <img src={images} className="absolute -top-28 lg:w-[340px] md:w-60 h-52 left-10 med_box-shadow " />
      <h1 className="text-2xl text-center text-DarkBlue line-clamp-2">{title}</h1>
      <div className="w-full">
        {Details.map((item, index) => (
          <div key={index} className="text-VioletBlue my-4 flex justify-between items-center gap-2 w-full">
            <div className=" border-b-3 flex gap-2 border-VioletBlue ">
              <item.iconDetail stroke="#5751e1" height={20} width={20} />
              <span>
                {t(item.titleDetail)} : </span>
            </div>
            <div>{item.countDetail} <span>{t(item.priceCount)}</span></div>
          </div>
        ))}
      </div> */}
      <CustomButton arrowColor={'#000'} vType="button" vStyle={"yellow"} text={"signUpCourse"} style="mb-2 mt-6 border-2 border-black" />
    </div>
  )
}

export default ItemsCompared