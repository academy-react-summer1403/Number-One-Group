import { motion } from "framer-motion";
import configVariants from "../../../config/page-transition";
import { BreadCrumb, TitleSection } from "../../partials/title-section";

const ShopWrapper = () => {
    return (
        <motion.div 
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={'ShopSection'} >
                <BreadCrumb type="Div" text="ShopSection" />
            </TitleSection>
        </motion.div>
    )
}

export default ShopWrapper