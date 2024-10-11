import { useTranslation } from "react-i18next";
import { PaginatedItems, PaginateHolderItems } from "../../components/common/Paginate"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { GetAllCourseByPagination } from "../../core/services/api/get-data";
import { useSelector } from "react-redux";
import Course from "../../components/pages/course/Course";
import { setPageNumber, setRowsOfPage, setSortCal, setSortType } from "../../redux/slices/filter-box-slices/FilterCourses"
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";
import { ChangeView, SectionTop, SortBox, SortBoxHolder } from "../../components/common";

const Courses = () => {
    const { t, i18n } = useTranslation();
    const filterObj_Courses = useSelector(state => state.FilterCourses)
    const Dispatch = useDispatch();

    // MediaQueries
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' });

    // Paginate
    const currentCourse = isTabletOrMobile ? 6 : 12;
    useEffect(() => { Dispatch(setRowsOfPage(currentCourse)) }, [currentCourse])

    // View
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const [showGrid, setShowGrid] = useState(false);

    // Query Object
    const { data: coursesData, isSuccess, isError, isLoading, refetch } = useQuery({
        queryKey: ["GET_COURSES", filterObj_Courses],
        queryFn: async () => {
            return await GetAllCourseByPagination(filterObj_Courses);
        },
    });
    const { data: coursesLength, isSuccess: coursesLengthFinished } = useQuery({
        queryKey: ['GET_COURSES_LENGTH'],
        queryFn: GetAllCourseByPagination,
    })
    return (
        <>
            <TitleSection title={'CoursesTitle'} >
                <BreadCrumb type="Div" text={'CoursesTitle'} />
            </TitleSection>
            <div className="main-container flex gap-7">
                <div className="lg:w-[87%] sm:w-full  mx-auto">
                    <SectionTop
                        lengthAllData={coursesLengthFinished && coursesLength.totalCount}
                        lengthFilteredData={isSuccess && coursesData.totalCount}
                        setShowGrid={setShowGrid}
                    >
                        <SortBoxHolder>
                            <SortBox setState={setSortCal} options={sortOptionType} placeholder={["محبوبیت", "Popularity"]} />
                            <SortBox setState={setSortType} options={sortOptionCal} placeholder={["نزولی", "Descending"]} />
                        </SortBoxHolder>
                        <ChangeView setShowGrid={setShowGrid} />
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems setPage={setPageNumber} currentData={isSuccess && coursesData?.totalCount} currentDataInOnePage={currentCourse}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2`}>
                                <RenderItemsList
                                    RenderComponent={Course}
                                    isLoading={isLoading}
                                    isSuccess={isSuccess}
                                    isError={isError}
                                    originalData={isSuccess && coursesData?.courseFilterDtos}
                                    skeletonData={skeletonData}
                                    notFoundText={'course_NotFound'}
                                    refetchData={refetch}
                                />
                            </div>
                        </PaginatedItems>
                    </PaginateHolderItems>
                </div>
            </div>
        </>
    )
}

export default Courses