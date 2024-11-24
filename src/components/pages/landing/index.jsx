import { HowToStart, InformedPoster } from "../../common";
import HeroSection from "./HeroSection.jsx";
import Categories from "./CategoriesSection.jsx";
import AboutUs from "./AboutUs.jsx";
import TopCourses from "./TopCourses.jsx";
import SkilledTeachers from "./SkilledTeachers.jsx";
import Statistics from "./Statistics.jsx";
import Faq from "./Faq.jsx";
import LastBlogs from "./LastBlogs.jsx";
import { motion } from "framer-motion";
import configVariants from "../../../config/page-transition";

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
