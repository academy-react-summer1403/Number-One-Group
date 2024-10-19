import { useTranslation } from 'react-i18next'
import { NotificationIcon } from '../../../../core/icon'
import { useQueryWithDependencies } from '../../../../core/hooks/react-query'
import CreateBlogCard from './CreateBlogCard'
import { GetNewsFilterPage } from "../../../../core/services/api/get-data"

const LatestBlogs = () => {
    const { t } = useTranslation()

    // Get last blog list
    const { data, isSuccess } = useQueryWithDependencies("GET_LAST_BLOGS", GetNewsFilterPage, null, { PageNumber: 1, RowsOfPage: 10, SortingCol: "updateDate" })

    return (
        <div className='w-full bg-[#C8C1ED]/40 dark:bg-[#C8C1ED]/10 shadow-lg rounded-xl mt-16 relative py-8 px-10 flex flex-wrap gap-y-2'>
            <div className='userPanel_icons -top-6 left-[50%] translate-x-[-50%] sm:left-12'>
                <NotificationIcon />
            </div>
            <h1 className='boldStyle_text w-full text-xl text-center sm:text-start'>{t("latestNewsAndBlogs")}</h1>
            <div className='w-full h-fit flex flex-wrap mediumStyle_text gap-y-3'>
                {isSuccess && data.news.slice(0, 3).map(obj => <CreateBlogCard key={obj.id} name={obj.title} date={obj.updateDate} id={obj.id} />)}
            </div>
        </div>
    )
}

export default LatestBlogs
