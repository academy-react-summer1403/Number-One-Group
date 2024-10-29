import { useTranslation } from "react-i18next";
import { TitleSection, BreadCrumb } from "../../components/partials/title-section"
import { GetAllCourseByPagination } from "../../core/services/api/get-data";
import { useDispatch, useSelector } from "react-redux";
import { CourseCard, FilterSide_Courses } from "../../components/pages/course"
import { setPageNumber, setRowsOfPage, setSortCal, setSortType } from "../../redux/slices/filter-box-slices/FilterCourses"
import MediaQuery, { useMediaQuery } from "react-responsive";
import { ChangeView, CreateModal, SectionTop, SortBox, SortBoxHolder, RenderItemsList, PaginatedItems, PaginateHolderItems } from "../../components/common";
import { useEffect, useState } from "react";
import { sortingOptionsType_Course_Fa, sortingOptionsType_Course_En, sortOptionCal_Fa, sortOptionCal_En, sortCurrentItem } from "../../core/constants/sort";
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../core/hooks/react-query";
import { useSearchParams } from "react-router-dom";
import { courseFilterParams } from "../../core/constants/filter-params";
import { motion } from "framer-motion";
import configVariants from "../../config/page-transition";
import FilterButton from "../../components/common/bottom-nav/FilterButton";

const Courses = () => {
    const { t, i18n } = useTranslation();
    const filterObj_Courses = useSelector(state => state.FilterCourses)
    const [searchParams, setSearchParams] = useSearchParams();
    const Dispatch = useDispatch();

    // MediaQueries
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' });

    // Set the url filter parameters
    useEffect(() => {
        courseFilterParams.forEach(({ key, action }) => {
            const value = searchParams.get(key);
            if (value) {
                Dispatch(action(value))
            }
        })
    }, [])

    const sortBoxData = [
        { setState: setSortCal, sortItem: i18n.language != "en" ? sortingOptionsType_Course_Fa : sortingOptionsType_Course_En, placeholder: i18n.language != "en" ? "انتخاب کنید" : "Choose" },
        { setState: setSortType, width: '!w-24', sortItem: i18n.language != "en" ? sortOptionCal_Fa : sortOptionCal_En, placeholder: i18n.language != "en" ? "نزولی" : "Descending" },
        { setState: setRowsOfPage, sortItem: sortCurrentItem, width: '!w-24', placeholder: i18n.language != "en" ? "تعداد " : "Number" }
    ]

    // Paginate
    const currentCourse = isTabletOrMobile ? 6 : 12;
    useEffect(() => { Dispatch(setRowsOfPage(currentCourse)) }, [currentCourse])

    // View
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const [showGrid, setShowGrid] = useState(false);

    // data courses from api
    const { data: coursesData, isSuccess, isError, isLoading, refetch } = useQueryWithDependencies("GET_COURSES", GetAllCourseByPagination, filterObj_Courses, filterObj_Courses);
    const { data: coursesLength, isSuccess: coursesLengthFinished } = useQueryWithoutDependencies("GET_COURSES_LENGTH", GetAllCourseByPagination)

    return (
        <>
            <motion.div
                variants={configVariants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                className=""
            >
                <TitleSection title={'CoursesTitle'} >
                    <BreadCrumb type="Div" text={'CoursesTitle'} />
                </TitleSection>
                <div className="main-container flex gap-7">
                    <MediaQuery minWidth={"1050px"}><FilterSide_Courses /></MediaQuery>
                    <div className="lg:w-[87%] sm:w-full mx-auto">
                        <SectionTop
                            lengthAllData={coursesLengthFinished && coursesLength.totalCount}
                            lengthFilteredData={isSuccess && coursesData.totalCount}
                            setShowGrid={setShowGrid}
                        >
                            <SortBoxHolder>
                                {sortBoxData.map((box, index) => (
                                    <SortBox
                                        key={index}
                                        setState={box.setState}
                                        options={box.sortItem}
                                        placeholder={box.placeholder}
                                        styleWidth={box.width}
                                    />))}

                            </SortBoxHolder>
                            <ChangeView setShowGrid={setShowGrid} />
                        </SectionTop>
                        <PaginateHolderItems style="justify-center">
                            <PaginatedItems setPage={setPageNumber} currentData={isSuccess && coursesData.totalCount} currentDataInOnePage={filterObj_Courses.RowsOfPage}>
                                <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}>
                                    <RenderItemsList
                                        RenderComponent={CourseCard}
                                        isLoading={isLoading}
                                        isSuccess={isSuccess}
                                        isError={isError}
                                        originalData={isSuccess && coursesData?.courseFilterDtos}
                                        skeletonData={skeletonData}
                                        notFoundText={i18n.language != "en" ? 'دوره ای یافت نشد' : "Course not found"}
                                        refetchData={refetch}
                                    />
                                </div>
                            </PaginatedItems>
                        </PaginateHolderItems>
                    </div>
                </div>
            </motion.div>
            <MediaQuery maxWidth={"1049px"}>
                <FilterButton>
                    <FilterSide_Courses />
                </FilterButton>
            </MediaQuery>
        </>
    )
}

export default Courses