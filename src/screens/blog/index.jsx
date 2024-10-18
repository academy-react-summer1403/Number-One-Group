import { useEffect, useState } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { BlogCard, FilterSide_Blogs } from "../../components/pages/blog"
import { Button, useDisclosure } from "@nextui-org/react";
import { ChangeView, CreateModal, PaginatedItems, PaginateHolderItems, RenderItemsList, SectionTop, SortBox, SortBoxHolder } from "../../components/common";
import { CloseIcon } from "../../core/icon";
import { useTranslation } from "react-i18next";
import { sortingColOptions_Blog_Fa, sortingColOptions_Blog_En } from "../../core/constants/sort";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber, setSortingCol, setRowsOfPage } from "../../redux/slices/filter-box-slices/FilterBlog";
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../core/hooks/react-query";
import { GetNewsFilterPage } from "../../core/services/api/get-data";
import { BreadCrumb, TitleSection } from "../../components/partials/title-section";

const Blog = () => {
    const { t, i18n } = useTranslation();
    const FilterBlogObj = useSelector(state => state.FilterBlog)
    const dispatch = useDispatch()

    // MediaQueries
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })

    // View
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const [showGrid, setShowGrid] = useState(false);

    // Pagination
    const currentBlog = isTabletOrMobile ? 6 : 12
    useEffect(() => { dispatch(setRowsOfPage(currentBlog)) }, [currentBlog])

    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Get blog list with filter
    const { data: blogData, isSuccess, isLoading, isError, refetch } = useQueryWithDependencies("GET_BLOGS_LIST", GetNewsFilterPage, FilterBlogObj, FilterBlogObj)

    // Get blog total count
    const { data: blogLength, isSuccess: blogLengthFinished } = useQueryWithoutDependencies("GET_BLOG-LENGTH", GetNewsFilterPage)

    return (
        <>
            <TitleSection title={'BlogSection'} >
                <BreadCrumb type="Div" text="BlogSection" />
            </TitleSection>
            <div className="main-container flex gap-7 relative">
                <MediaQuery minWidth={"1024px"}><FilterSide_Blogs /></MediaQuery>
                <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                    <MediaQuery maxWidth={"1023px"}>
                        <Button onPress={onOpen} className="sticky top-3 z-30">{t('openFilter')}</Button>
                        <CreateModal isOpen={isOpen} onClose={onClose} header={t('filters')} size="xl" headerStyle="flex flex-col gap-1 text-white">
                            <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
                                <CloseIcon />
                            </div>
                            <FilterSide_Blogs />
                        </CreateModal>
                    </MediaQuery>
                    <SectionTop
                        lengthAllData={blogLengthFinished && blogLength.totalCount}
                        lengthFilteredData={isSuccess && blogData.news.length}
                        setShowGrid={setShowGrid}
                    >
                        <SortBoxHolder>
                            <SortBox
                                setState={setSortingCol}
                                options={i18n.language != "en" ? sortingColOptions_Blog_Fa : sortingColOptions_Blog_En}
                                placeholder={i18n.language != "en" ? "انتخاب کنید" : "Choose"}
                            />
                        </SortBoxHolder>
                        <ChangeView setShowGrid={setShowGrid} />
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems setPage={setPageNumber} currentData={isSuccess && blogData?.totalCount} currentDataInOnePage={currentBlog}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}>
                                <RenderItemsList
                                    RenderComponent={BlogCard}
                                    isLoading={isLoading}
                                    isSuccess={isSuccess}
                                    isError={isError}
                                    originalData={isSuccess && blogData?.news}
                                    skeletonData={skeletonData}
                                    notFoundText={i18n.language != "en" ? "متاسفانه وبلاگی موجود نیست!" : "Unfortunately, there is no blog available!"}
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

export default Blog
