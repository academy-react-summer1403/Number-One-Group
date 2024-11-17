import { Link } from "react-router-dom"
import { FacebookIcon } from "../../core/icon/index"
import { TwitterIcon } from "../../core/icon/index"
import { WhatsAppIcon } from "../../core/icon/index"
import { InstagramIcon } from "../../core/icon/index"
import CreateSocialMediaItems from "./CreateSocialMediaItems"
import ImageFallBack from "./ImageFallBack"
import fallback from "../../assets/images/user-circle-icon.png"
import { motion } from "framer-motion"
import { useState } from "react"

const TeacherCard = ({ name, courseCount, picture, href }) => {
    const socialMedia = [
        { icon: <InstagramIcon /> },
        { icon: <WhatsAppIcon /> },
        { icon: <TwitterIcon /> },
        { icon: <FacebookIcon /> },
    ]

    const [isHover, setIsHover] = useState(false)

    return (
        <motion.div
            onHoverStart={() => { setIsHover(true) }}
            onHoverEnd={() => { setIsHover(false) }}
            data-aos="zoom-in-down"
            className="w-[308px] h-[135px] flex gap-x-4 items-center border-dotted border-2 border-neutral-500 rounded-full"
        >
            <motion.div
                className="absolute top-[-8px] right-[-50px] z-20"
                initial={{
                    x: "0",
                    y: "0"
                }}
                animate={isHover ? {
                    x: "-230px",
                    y: "0"
                } : {
                    x: "0",
                    y: "0"
                }}
                transition={{
                    duration: "0.5"
                }}
            >
                <Link to={href} className="min-w-28 h-28 border-5 border-white shadow-xl md:min-w-[140px] md:h-[150px] flex justify-center items-center overflow-hidden rounded-full bg-gradient-to-tr from-[#F7F6F9] to-[#E9F5F5]">
                    <ImageFallBack
                        className={"w-full h-full"}
                        alt={"Profile"}
                        src={picture}
                        fallback={fallback}
                    />
                </Link>
            </motion.div>
            <motion.div
                initial={{
                    x: "-110px",
                    y: "0"
                }}
                animate={isHover ? {
                    x: "-20px",
                    y: "0"
                } : {
                    x: "-110px",
                    y: "0"
                }}
                transition={{
                    duration: "0.5"
                }}
                className="w-fit h-fit"
            >
                <Link to={href}>
                    <h1 className="text-lg text-DarkBlue line-clamp-1 w-[180px]">{name}</h1>
                    <span className="text-sm text-VioletBlue">برنامه نویس</span>
                    <div className="w-full flex gap-x-2">
                        {socialMedia.map((item, index) => <CreateSocialMediaItems key={index} Icon={item.icon} />)}
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default TeacherCard
