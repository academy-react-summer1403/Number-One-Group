import UserCourseStatus from './UserCourseStatus'
import { BasketIcon, HatIcon } from '../../../../core/icon'
import { useQueryWithDependencies, useQueryWithoutDependencies } from '../../../../core/hooks/react-query'
import { GetMyBlogViews, GetMyCourses, GetMyCoursesReserve, GetMyCourseViews, GetMyFavoriteBlogs, GetMyFavoriteCourses } from '../../../../core/services/api/get-data'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const StatisticsUser = () => {
    const { t } = useTranslation()
    const [favoriteCount, setFavoriteCount] = useState(0)
    const [CommentCount, setCommentCount] = useState(0)

    // Get reserved course list
    const { data: courseReserveList, isSuccess: reserveSuccess } = useQueryWithoutDependencies("MY_RESERVE_COURSE_LIST", GetMyCoursesReserve)

    // Get my course list
    const { data: myCourseList, isSuccess: myCourseSuccess } = useQueryWithDependencies("MY_COURSE_LIST", GetMyCourses, null, { PageNumber: 1, RowsOfPage: 1 })

    // Get favorite course & blog
    const {
        data: myFavoriteCourseList,
        isSuccess: myFavoriteCourseSuccess
    } = useQueryWithDependencies("GET_FAVORITE_COURSE", GetMyFavoriteCourses)

    const {
        data: myFavoriteBlogList,
        isSuccess: myFavoriteBlogSuccess
    } = useQueryWithDependencies("GET_FAVORITE_BLOG", GetMyFavoriteBlogs)

    useEffect(() => {
        if (myFavoriteCourseSuccess && myFavoriteBlogSuccess) {
            setFavoriteCount(myFavoriteCourseList.totalCount + myFavoriteBlogList.totalCount)
        }
    }, [myFavoriteCourseSuccess, myFavoriteBlogSuccess])

    // Get comments course & blog
    const {
        data: myCourseCommentsList,
        isSuccess: myCourseCommentsSuccess,
    } = useQueryWithoutDependencies("COMMENTS_COURSE_LIST", GetMyCourseViews)
    const {
        data: myBlogCommentsList,
        isSuccess: myBlogCommentsSuccess,
    } = useQueryWithoutDependencies("COMMENTS_BLOG_LIST", GetMyBlogViews)

    useEffect(() => {
        if (myCourseCommentsSuccess && myBlogCommentsSuccess) {
            setCommentCount(myCourseCommentsList.totalCount + myBlogCommentsList.totalCount)
        }
    }, [myCourseCommentsSuccess, myBlogCommentsSuccess])

    return (
        <div className='w-full h-fit flex gap-10 lg:gap-0 flex-wrap lg:flex-nowrap justify-evenly lg:justify-between '>
            <UserCourseStatus name={t("course")} href={"/userPanel/myCourses"} Icon={HatIcon} amount={myCourseSuccess && myCourseList.totalCount} description={t("participateInCourse")} />
            <UserCourseStatus name={t("course")} href={"/userPanel/reserved"} Icon={BasketIcon} amount={reserveSuccess && courseReserveList.length} description={t("reservationInCourse")} />
            <UserCourseStatus name={t("course")} href={"/userPanel/favorites"} Icon={HatIcon} amount={favoriteCount} description={t("favoriteStatistics")} />
            <UserCourseStatus name={t("comment")} href={"/userPanel/myViews"} Icon={BasketIcon} amount={CommentCount} description={t("commentStatistics")} />
        </div>
    )
}

export default StatisticsUser
