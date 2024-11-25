import { useTranslation } from "react-i18next";
import ContactMain from "./ContactMain"
import { CustomMap } from "../../common";
import { BreadCrumb, TitleSection } from "../../partials/title-section";
import ContactSidebar from "./ContactSidebar";
import configVariants from "../../../config/page-transition";
import { motion } from "framer-motion";

const ContactUsWrapper = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={t("contactUsTitle")} >
                <BreadCrumb type="Div" text={'contactUsTitle'} />
            </TitleSection>
            <div className="lg:px-44 sm:px-16 px-8 w-full flex flex-wrap gap-y-16 my-20">
                <div className="w-full h-fit xl:h-auto flex flex-wrap xl:flex-nowrap justify-between gap-y-4 xl:gap-x-6">
                    <ContactSidebar />
                    <ContactMain />
                </div>
                {/* Map */}
                <div className="w-full h-[400px] overflow-hidden flex justify-center rounded-xl">
                    <CustomMap width="100%" height="100%" />
                </div>
            </div>
        </motion.div>
    )
}

export default ContactUsWrapper
