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

const Landing = () => {
    return (
        <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: "0" }}
            exit={{ x: "-100vw" }}
            transition={{
                ease: "linear",
                duration: 0.8,
                stiffness: 100,
                type: "spring"
            }}
        >
            <HeroSection />
            <Categories />
            <AboutUs />
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
