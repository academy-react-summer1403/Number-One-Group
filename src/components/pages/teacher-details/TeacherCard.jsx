import SocialMedia from "../../../core/constants/teacher/SocialMediaDetails"
import { CategoryIcon, TopicsIcon } from "../../../core/icon"
import { CreateSocialMediaItems, ImageFallBack } from "../../common"
import fallback from "../../../assets/images/user-circle-icon-white.png"

const TeacherCard = ({ image, fullName, courseCount, newsCount }) => {
    return (
        <div className='w-full rounded-xl flex flex-wrap md:flex-nowrap justify-center md:justify-start px-10 py-12 bg-DarkIndigo gap-x-8'>
            <ImageFallBack
                src={image}
                fallback={fallback}
                className='w-40 h-40 sm:min-w-56 sm:h-56 rounded-full'
            />
            <div className='w-full h-fit text-neutral-200 flex mt-8 md:mt-0 flex-wrap gap-y-4'>
                <h1 className='w-full text-2xl text-center md:text-start'>{fullName}</h1>
                <span className='w-full text-sm -mt-2 text-center md:text-start'>یکی از اساتید پژوهشگاه</span>
                <ul className='w-full flex flex-wrap justify-center md:justify-start gap-x-4'>
                    <li className='flex gap-x-2 items-center'>
                        <CategoryIcon stroke={"#fff"} />
                        <div>
                            <span>تعداد دوره :</span>
                            <span>{courseCount ? courseCount : 0}</span>
                        </div>
                    </li>
                    <li className='flex gap-x-2 items-center'>
                        <TopicsIcon width="18px" height="18px" stroke={"#fff"} />
                        <div>
                            <span>تعداد خبر :</span>
                            <span>{newsCount ? newsCount : 0}</span>
                        </div>
                    </li>
                </ul>
                <p className='text-sm text-center md:text-start'>البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</p>
                <div className='w-full flex gap-x-2 justify-center md:justify-start'>
                    {SocialMedia.map((item, index) => (
                        <CreateSocialMediaItems
                            key={index}
                            Icon={<item.icon fill="#5751E1" />}
                            style="bg-white w-12 h-12"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeacherCard
