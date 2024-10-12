import { useTranslation } from "react-i18next";
import { PaginatedItems, PaginateHolderItems } from "../../components/common/Paginate"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { GetAllCourseByPagination } from "../../core/services/api/get-data";
import { useDispatch, useSelector } from "react-redux";
import Course from "../../components/pages/course/Course";
import { setPageNumber, setRowsOfPage, setSortCal, setSortType } from "../../redux/slices/filter-box-slices/FilterCourses"
import MediaQuery, { useMediaQuery } from "react-responsive";
import { ChangeView, CreateModal, SectionTop, SortBox, SortBoxHolder } from "../../components/common";
import FilterSide_Courses from "../../components/pages/course/FilterSide_Courses";
import { IoFilter } from "react-icons/io5"
import { Tooltip, useDisclosure } from "@nextui-org/react";
import { CloseIcon } from "../../core/icon";
import { useEffect, useState } from "react";
import tooltipStyle from "../../core/constants/tooltip-style";
import { sortOptionCal, sortOptionType } from "../../core/constants/sorts/Sort";
import RenderItemsList from "../../components/common/RenderItemsList";
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../hooks/react-query";

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
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const [showGrid, setShowGrid] = useState(false);

    // data courses from api
    const coursesObj = useQueryWithDependencies("GET_COURSES", GetAllCourseByPagination, filterObj_Courses, filterObj_Courses);
    const coursesLength = useQueryWithoutDependencies("GET_COURSES_LENGTH", GetAllCourseByPagination)

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
                        lengthAllData={coursesLength.isSuccess && coursesLength.data.totalCount}
                        lengthFilteredData={coursesObj.isSuccess && coursesObj.data.totalCount}
                        setShowGrid={setShowGrid}
                    >
                        <SortBoxHolder>
                            <SortBox setState={setSortCal} options={sortOptionType} placeholder={["محبوبیت", "Popularity"]} />
                            <SortBox setState={setSortType} options={sortOptionCal} placeholder={["نزولی", "Descending"]} />
                        </SortBoxHolder>
                        <ChangeView setShowGrid={setShowGrid} />
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems setPage={setPageNumber} currentData={coursesObj.isSuccess && coursesObj.data?.totalCount} currentDataInOnePage={currentCourse}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2`}>
                                <RenderItemsList
                                    RenderComponent={Course}
                                    isLoading={coursesObj.isLoading}
                                    isSuccess={coursesObj.isSuccess}
                                    isError={coursesObj.isError}
                                    originalData={coursesObj.isSuccess && coursesObj.data?.courseFilterDtos}
                                    skeletonData={skeletonData}
                                    notFoundText={'course_NotFound'}
                                    refetchData={coursesObj.refetch}
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