import { useTranslation } from "react-i18next"
import CreateStatisticsItem from "./createStatisticsItem"
import { useQueryWithoutDependencies } from "../../../hooks/react-query"
import { GetLandingReports } from "../../../core/services/api/get-data"

const Statistics = () => {
    const { i18n } = useTranslation()
    const { data, isSuccess } = useQueryWithoutDependencies("GET_REPORTS", GetLandingReports)

    return (
        <div className="w-full lg:px-44 sm:px-16 px-8 pb-28">
            <div className="w-full py-16 lg:py-20 xl:px-24 flex gap-y-16 flex-wrap md:flex-nowrap statistics_holder bg-DarkIndigo">
                {isSuccess && (
                    <>
                        <CreateStatisticsItem name={i18n.language != "en" ? "وبلاگ ها" : "Blogs"} Statistics={data.newsCount} isBorder />
                        <CreateStatisticsItem name={i18n.language != "en" ? "بهترین اساتید" : "Best Professors"} Statistics={data.teacherCount} isBorder />
                        <CreateStatisticsItem name={i18n.language != "en" ? "دوره ها" : "Courses"} Statistics={data.courseCount} isBorder />
                        <CreateStatisticsItem name={i18n.language != "en" ? "دانشجو های فعال" : "Active Students"} Statistics={data.studentCount} isBorder={false} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Statistics
