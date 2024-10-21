import { Link } from "react-router-dom"
import { FacebookIcon } from "../../core/icon/index"
import { TwitterIcon } from "../../core/icon/index"
import { WhatsAppIcon } from "../../core/icon/index"
import { InstagramIcon } from "../../core/icon/index"
import CreateSocialMediaItems from "./CreateSocialMediaItems"
import ImageFallBack from "./ImageFallBack"
import fallback from "../../assets/images/user-circle-icon.png"

const TeacherCard = ({ name, courseCount, picture, href }) => {
    const socialMedia = [
        { icon: <InstagramIcon /> },
        { icon: <WhatsAppIcon /> },
        { icon: <TwitterIcon /> },
        { icon: <FacebookIcon /> },
    ]
    return (
        <div data-aos="zoom-in-down" className="w-[308px] flex gap-x-4 items-center">
            <Link to={href} className="w-28 shadow-xl md:min-w-[140px] h-28 md:h-[150px] flex justify-center items-center overflow-hidden rounded-full bg-gradient-to-tr from-[#F7F6F9] to-[#E9F5F5]">
                <ImageFallBack
                    className={"w-full h-full"}
                    alt={"Profile"}
                    src={picture}
                    fallback={fallback}
                />
            </Link>
            <Link to={href} className="h-fit -mt-8">
                <h1 className="text-lg text-DarkBlue line-clamp-1">{name}</h1>
                <span className="text-sm text-VioletBlue">برنامه نویس</span>
                <div className="w-full flex gap-x-2">
                    {socialMedia.map((item, index) => <CreateSocialMediaItems key={index} Icon={item.icon} />)}
                </div>
            </Link>
        </div>
    )
}

export default TeacherCard
