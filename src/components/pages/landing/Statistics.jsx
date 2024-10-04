import { useTranslation } from "react-i18next"
import CreateStatisticsItem from "./createStatisticsItem"
import { LandingReportsItem } from "../../../core/constants/landing/Statistics"
import { useEffect, useState } from "react"
import GetLandingReports from "../../../core/services/api/get-data/GetLandingReports"

const Statistics = () => {
    const { i18n } = useTranslation()
    const [reports, setReports] = useState([])

    const getReports = async () => {
        let reports = await GetLandingReports()
        setReports(LandingReportsItem(reports))
    }

    useEffect(() => {
        getReports()
    }, [])

    return (
        <div className="w-full lg:px-44 sm:px-16 px-8 pb-28">
            <div className="w-full py-16 lg:py-20 xl:px-24 flex gap-y-16 flex-wrap md:flex-nowrap statistics_holder bg-DarkIndigo">
                {reports.map(item => (<CreateStatisticsItem key={item.id} Statistics={item.statistics} name={i18n.language === "en" ? item.name[1] : item.name[0]} isBorder={item.isBorder} />))}
            </div>
        </div>
    )
}

export default Statistics
