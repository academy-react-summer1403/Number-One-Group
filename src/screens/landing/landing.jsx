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
    <div className="bg-black">
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
    </div>
}

export default Landing;
