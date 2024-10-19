import { useTranslation } from "react-i18next";
import { TitleSection, BreadCrumb } from "../../components/partials/title-section"
import { GetAllCourseByPagination } from "../../core/services/api/get-data";
import { useDispatch, useSelector } from "react-redux";
import { CourseCard, FilterSide_Courses } from "../../components/pages/course"
import { setPageNumber, setRowsOfPage, setSortCal, setSortType } from "../../redux/slices/filter-box-slices/FilterCourses"
import MediaQuery, { useMediaQuery } from "react-responsive";
import { ChangeView, CreateModal, SectionTop, SortBox, SortBoxHolder, RenderItemsList, PaginatedItems, PaginateHolderItems } from "../../components/common";
import { IoFilter } from "react-icons/io5"
import { Tooltip, useDisclosure } from "@nextui-org/react";
import { CloseIcon } from "../../core/icon";
import { useEffect, useState } from "react";
import tooltipStyle from "../../core/constants/tooltip-style";
import { sortingOptionsType_Course_Fa, sortingOptionsType_Course_En, sortOptionCal_Fa, sortOptionCal_En } from "../../core/constants/sort";
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../core/hooks/react-query";

const Courses = () => {
    const { t, i18n } = useTranslation();
    const filterObj_Courses = useSelector(state => state.FilterCourses)
    const Dispatch = useDispatch();

    // MediaQueries
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' });

    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();

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
            <TitleSection title={'CoursesTitle'} >
                <BreadCrumb type="Div" text={'CoursesTitle'} />
            </TitleSection>
            <div className="main-container flex gap-7">
                <MediaQuery minWidth={"1050px"}><FilterSide_Courses /></MediaQuery>
                <div className="lg:w-[87%] sm:w-full  mx-auto">
                    <MediaQuery maxWidth={"1049px"}>
                        <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "ّFilters" : "فیلتر ها"}>
                            <div onClick={onOpen} className="fixed right-5 bottom-40 bg-VioletBlue dark:bg-LavenderMist bottomNav z-30">
                                <IoFilter color="#fff" />
                            </div>
                        </Tooltip>
                        <CreateModal isOpen={isOpen} onClose={onClose} header={t('filters')} size="xl" headerStyle="flex flex-col gap-1 text-white">
                            <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
                                <CloseIcon />
                            </div>
                            <FilterSide_Courses />
                        </CreateModal>
                    </MediaQuery>
                    <SectionTop
                        lengthAllData={coursesLengthFinished && coursesLength.totalCount}
                        lengthFilteredData={isSuccess && coursesData.totalCount}
                        setShowGrid={setShowGrid}
                    >
                        <SortBoxHolder>
                            <SortBox
                                setState={setSortCal}
                                options={i18n.language != "en" ? sortingOptionsType_Course_Fa : sortingOptionsType_Course_En}
                                placeholder={i18n.language != "en" ? "انتخاب کنید" : "Choose"}
                            />
                            <SortBox
                                setState={setSortType}
                                options={i18n.language != "en" ? sortOptionCal_Fa : sortOptionCal_En}
                                placeholder={i18n.language != "en" ? "نزولی" : "Descending"}
                            />
                        </SortBoxHolder>
                        <ChangeView setShowGrid={setShowGrid} />
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems setPage={setPageNumber} currentData={isSuccess && coursesData.totalCount} currentDataInOnePage={currentCourse}>
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
        </>
    )
}

export default Courses