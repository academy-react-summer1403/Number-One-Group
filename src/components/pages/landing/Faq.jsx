import mannequin from "../../../assets/images/mannequin-faqPoster.png"
import { Label } from "../../common"
import MediaQuery from "react-responsive"
import { useTranslation } from "react-i18next"
import { faqOptions } from "../../../core/constants/landing/faq"
import { useSelector } from "react-redux"
import { Accordion, AccordionItem } from "@nextui-org/react"
import { motion } from "framer-motion"

const Faq = () => {
  const { t, i18n } = useTranslation()
  const theme = useSelector(state => state.DarkMode)
  const itemClasses = {
    title: "text-[#6D6C80] data-[open=true]:text-[#5751E1]",
    trigger: "border-b-2 border-LightGrayish",
  };

  return (
    <div className={`w-full flex-wrap lg:flex-nowrap flex justify-center gap-y-10 gap-x-10 xl:gap-x-28 py-28 lg:px-44 sm:px-16 px-8 ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
      <MediaQuery minWidth={"550px"}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1.1 }}
          className={`${i18n.language === "en" ? "reverse-img" : ""} min-w-[320px] w-[400px] h-[500px] overflow-hidden bg-white rounded-full faqMannequin_shadow flex justify-center items-end`}
        >
          <img className="h-[90%]" src={mannequin} alt="Mannequin" />
        </motion.div>
      </MediaQuery>
      <motion.div
        initial={{ y: "50vh", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{
          duration: 0.8,
          stiffness: 45,
          type: "spring"
        }}
        className="flex flex-wrap justify-center lg:flex-col gap-y-4 w-full lg:w-[450px] h-fit"
      >
        <Label text={t("faqLabel")} variant="bgGray" style="w-fit" />
        <h1 className="boldStyle_text w-full xl:w-2/3 lg:text-start text-center">{t("faqTitle")}</h1>
        <p className="mediumStyle_text text-center lg:text-start w-full">{t("faqDescription")}</p>
        <Accordion itemClasses={itemClasses} showDivider={false}>
          {faqOptions.map((item, index) => (
            <AccordionItem key={index} aria-label={"Accordion" + index} title={i18n.language == "en" ? item.label[1] : item.label[0]}>
              <p className="text-DarkBlue">{i18n.language == "en" ? item.content[1] : item.content[0]}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
}

export default Faq
