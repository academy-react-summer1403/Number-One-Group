import { LatestBlogs, CreateCourseCard, StatisticsUser, UserCourseSection } from '../../components/pages/user-panel'
import { useTranslation } from 'react-i18next';
import { GetCoursesTop, GetMyCourses } from '../../core/services/api/get-data';
import { useQueryWithDependencies } from '../../core/hooks/react-query';

const Dashboard = () => {
    const { t } = useTranslation()

    // Get my course list
    const { data: myCourseList, isSuccess: myCourseSuccess } = useQueryWithDependencies("MY_COURSE_LIST", GetMyCourses, null, { PageNumber: 1, RowsOfPage: 10 })
    console.log(myCourseList)

    // Get suggestion course list
    const { data: suggestionCourse, isSuccess: suggestionCourseSuccess } = useQueryWithDependencies("SUGGESTION_COURSE_LIST", GetCoursesTop, null, 2)

    return (
        <div className='w-full h-fit flex flex-wrap lg:px-10'>
            <StatisticsUser />
            <LatestBlogs />
            <div className='w-full border-t border-neutral-200 dark:border-gray-400/30 py-8 mt-8 flex flex-wrap lg:flex-nowrap gap-x-14 gap-y-10 lg:gap-y-0'>
                {
                    myCourseList?.listOfMyCourses.length > 0 &&
                    <UserCourseSection sectionName={t("currentCourses")}>
                        {myCourseList.listOfMyCourses.map((item, index) => (
                            <CreateCourseCard
                                key={index}
                                picture={item.tumbImageAddress}
                                price={item.cost}
                                teacher={item.fullName}
                                title={item.courseTitle}
                            />
                        ))}
                    </UserCourseSection>
                }
                <UserCourseSection href={"/course?V=1"} sectionName={t("suggestedCourses")}>
                    {suggestionCourseSuccess && suggestionCourse.map((item, index) => (
                        <CreateCourseCard
                            key={index}
                            picture={item.tumbImageAddress}
                            price={item.cost}
                            teacher={item.teacherName}
                            title={item.title}
                        />
                    ))}
                </UserCourseSection>
            </div>
        </div>
    )
}

export default Dashboard
