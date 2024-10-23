import { HowToStart, InformedPoster } from "../../components/common";
import {
    AboutUs,
    Categories,
    Faq,
    HeroSection,
    LastBlogs,
    SkilledTeachers,
    Statistics,
    TopCourses
} from "../../components/pages/landing";
import { motion } from "framer-motion";
import configVariants from "../../config/page-transition";

const Landing = () => {
    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <HeroSection />
            <AboutUs />
            <Categories />
            <TopCourses />
            <InformedPoster />
            <SkilledTeachers />
            <Statistics />
            <Faq />
            <HowToStart />
            <LastBlogs />
        </motion.div>
    )
}

export default Landing;
