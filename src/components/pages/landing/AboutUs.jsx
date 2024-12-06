import aboutUs_poster from "../../../assets/images/aboutus_landing.png"
import liveClass_icon from "../../../assets/images/liveClass.png"
import { CustomButton, Label, OptionParts } from "../../common"
import { PlayIcon } from "../../../core/icon"
import { useTranslation } from "react-i18next"
import { aboutUsOptions } from "../../../core/constants/landing/aboutUs"
import { useSelector } from "react-redux"
import { Avatar, AvatarGroup } from "@nextui-org/react";

const AboutUs = () => {
  const { t, i18n } = useTranslation()
  const theme = useSelector(state => state.DarkMode)

  return (
    <div className={`w-full ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} lg:bg-none flex justify-center gap-x-12 pt-28 pb-16 lg:px-44 sm:px-16 px-8`}>
      <div data-aos="fade-left" data-aos-duration="1500" className="w-[400px] hidden h-fit relative lg:flex flex-wrap justify-center">
        <img data-aos="fade-down"  data-aos-delay="1" data-aos-duration="1500" className="w-20 absolute left-28 top-10 transition-all duration-200" src={liveClass_icon} alt="Live Class" />
        <button className="playButton top-[40%]">
          <PlayIcon width="55px" />
        </button>
        <img className="w-[400px] h-[400px]" src={aboutUs_poster} alt="Poster" />
        <div className={`${i18n.language == "en" ? "-left-48" : "-right-48"} w-44 p-2 h-24 flex flex-wrap justify-center rounded-lg bg-MainBg relative bottom-28 border-2 border-LightGray drop-shadow-xl`}>
          <h1 className="text-center text-DarkBlue text-sm">{t("boardText")}</h1>
          <AvatarGroup isBordered max={3}>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </AvatarGroup>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1500" className=" w-full lg:w-3/5 xl:w-2/5 h-fit flex lg:justify-start justify-center flex-wrap gap-y-3">
        <Label text={t("aboutLabel")} variant="bgGray" />
        <div className="w-full flex flex-wrap justify-center lg:justify-start h-fit gap-x-3 items-center">
          <h1 className="boldStyle_text w-auto">{t("aboutTitle1")}</h1>
          <h1 className="importantWord py-2">{t("aboutImportantWord")}</h1>
        </div>
        <h1 className="boldStyle_text">{t("aboutTitle2")}</h1>
        <p className="w-full mediumStyle_text text-center lg:text-start">{t("aboutDescription")}</p>
        <ul className="w-full flex flex-wrap gap-y-3">
          {aboutUsOptions.map(item => (<OptionParts key={item.id} text={i18n.language === "en" ? item.text[1] : item.text[0]} holderStyle="justify-center lg:justify-start" disableIconIn="1024px" />))}
        </ul>
        <CustomButton text={t("aboutBtn")} style="mt-5" vType={"link"} href={"/about"} vStyle={"purple"} arrowColor="#fff" />
      </div>
    </div>
  )
}

export default AboutUs
