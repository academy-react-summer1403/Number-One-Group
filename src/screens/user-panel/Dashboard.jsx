import { CircularProgressUser, CreateCourseCard, StatisticsUser, UserCourseSection } from '../../components/pages/user-panel'
import { useTranslation } from 'react-i18next';
import { GetCoursesTop, GetMyCourses, GetNewsFilterPage } from '../../core/services/api/get-data';
import { useQueryWithDependencies } from '../../core/hooks/react-query';

const Dashboard = () => {
    const { t } = useTranslation()

    // Get my course list
    const { data: myCourseList, isSuccess: myCourseSuccess } = useQueryWithDependencies("MY_COURSE_LIST", GetMyCourses, "", { PageNumber: 1, RowsOfPage: 10 })

    // Get suggestion course list
    const { data: suggestionCourse, isSuccess: suggestionCourseSuccess } = useQueryWithDependencies("SUGGESTION_COURSE_LIST", GetCoursesTop, null, 2)

    // Get blog list
    const { data: blogList, isSuccess: blogSuccess } = useQueryWithDependencies("GET_LAST_BLOGS", GetNewsFilterPage, null, { PageNumber: 1, RowsOfPage: 10, SortingCol: "updateDate" })

    return (
        <div className='w-full h-fit flex flex-wrap lg:px-10 mt-8'>
            <StatisticsUser />
            <div className='flex flex-wrap justify-between items-center gap-y-6 mt-10'>
                <UserCourseSection sectionName={t("latestNewsAndBlogs")}>
                    {blogSuccess && blogList.news.length != 0 ? blogList.news.slice(0, 2).map((item, index) => (
                        <CreateCourseCard
                            key={index}
                            picture={item.currentImageAddressTumb}
                            course={false}
                            date={item.updateDate}
                            teacher={item.addUserFullName}
                            title={item.title}
                        />
                    )) : <h1 className='w-full text-center mt-16 text-neutral-400'>موردی یافت نشد</h1>}
                </UserCourseSection>
                <CircularProgressUser />
                <UserCourseSection sectionName={t("currentCourses")}>
                    {myCourseSuccess && myCourseList.listOfMyCourses.length != 0 ? myCourseList.listOfMyCourses?.map((item, index) => (
                        <CreateCourseCard
                            key={index}
                            picture={item.tumbImageAddress}
                            price={item.cost}
                            teacher={item.fullName}
                            title={item.courseTitle}
                        />
                    )) : <h1 className='w-full text-center mt-16 text-neutral-400'>موردی یافت نشد</h1>}
                </UserCourseSection>
                <UserCourseSection href={"/course?V=1"} sectionName={t("suggestedCourses")}>
                    {suggestionCourseSuccess && suggestionCourse.length != 0 ? suggestionCourse.map((item, index) => (
                        <CreateCourseCard
                            key={index}
                            picture={item.tumbImageAddress}
                            price={item.cost}
                            teacher={item.teacherName}
                            title={item.title}
                        />
                    )) : <h1 className='w-full text-center mt-16 text-neutral-400'>موردی یافت نشد</h1>}
                </UserCourseSection>
            </div>
        </div>
    )
}

export default Dashboard
