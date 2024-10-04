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

const Landing = () => {
    return (
        <>
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
        </>
    )
}

export default Landing;
