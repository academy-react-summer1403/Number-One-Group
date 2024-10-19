import { CircularProgress } from '@nextui-org/react'
import UserCourseStatus from './UserCourseStatus'
import { BasketIcon, HatIcon } from '../../../../core/icon'
import { useQueryWithDependencies, useQueryWithoutDependencies } from '../../../../core/hooks/react-query'
import { GetMyCourses, GetMyCoursesReserve } from '../../../../core/services/api/get-data'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const StatisticsUser = () => {
    const userInfo = useSelector(state => state.UserInfo.info)
    const { t } = useTranslation()

    // Get reserved course list
    const { data: courseReserveList, isSuccess: reserveSuccess } = useQueryWithoutDependencies("MY_RESERVE_COURSE_LIST", GetMyCoursesReserve)
    
    // Get my course list
    const { data: myCourseList, isSuccess: myCourseSuccess } = useQueryWithDependencies("MY_COURSE_LIST", GetMyCourses, null, { PageNumber: 1, RowsOfPage: 1 })

    return (
        <div className='w-full h-fit flex gap-y-20 flex-wrap lg:flex-nowrap justify-evenly lg:justify-between'>
            <div className='w-full md:w-1/2 order-2 md:order-none flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap justify-center sm:justify-between lg:justify-start gap-8'>
                <UserCourseStatus Icon={HatIcon} amount={myCourseSuccess && myCourseList.totalCount} description={t("participateInCourse")} />
                <UserCourseStatus Icon={BasketIcon} amount={reserveSuccess && courseReserveList.length} description={t("reservationInCourse")} />
            </div>
            <div className='w-[300px] h-20 lg:mb-0 mb-32 flex flex-wrap lg:flex-nowrap gap-4 items-center justify-center lg:justify-end'>
                {
                    userInfo.profileCompletionPercentage < 80 ?
                        <p className='w-full text-center order-2 lg:order-none mediumStyle_text'>{t("progressTipFalse")}</p> :
                        <p className='w-full text-center order-2 lg:order-none mediumStyle_text'>{t("progressTipTrue")}</p>
                }
                <CircularProgress
                    classNames={{
                        svg: "w-40 h-40 lg:w-28 lg-h-28 drop-shadow-md",
                        indicator: "text-SunshineYellow",
                        track: "stroke-black/5 border-2 border-red-500",
                        value: "text-3xl text-black text-VioletBlue",
                    }}
                    value={userInfo.profileCompletionPercentage}
                    strokeWidth={2}
                    showValueLabel={true}
                />
            </div>
        </div>
    )
}

export default StatisticsUser
