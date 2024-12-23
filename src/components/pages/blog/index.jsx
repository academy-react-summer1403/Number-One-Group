import { useEffect, useState } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import BlogCard from "./BlogCard";
import FilterSide_Blogs from "./FilterSide_Blogs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import configVariants from "../../../config/page-transition";
import FilterButton from "../../common/bottom-nav/FilterButton";
import { ChangeView, PaginatedItems, PaginateHolderItems, RenderItemsList, SectionTop, SortBox, SortBoxHolder } from "../../common";
import { sortingColOptions_Blog_Fa, sortingColOptions_Blog_En, sortCurrentItem } from "../../../core/constants/sort";
import { setPageNumber, setSortingCol, setRowsOfPage } from "../../../redux/slices/filter-box-slices/FilterBlog";
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../../core/hooks/react-query";
import { GetNewsFilterPage } from "../../../core/services/api/get-data";
import { BreadCrumb, TitleSection } from "../../partials/title-section";
import { blogFilterParams } from "../../../core/constants/filter-params";

const BlogWrapperPage = () => {
    const { t, i18n } = useTranslation();
    const FilterBlogObj = useSelector(state => state.FilterBlog)
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()

    // MediaQueries
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })

    // View
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const [showGrid, setShowGrid] = useState(false);

    // Set the url filter parameters
    useEffect(() => {
        blogFilterParams.forEach(({ key, action }) => {
            console.log(action)
            const value = searchParams.get(key);
            if (value) {
                dispatch(action(value))
            }
        })
    }, [])
    const sortBoxData = [
        { setState: setSortingCol, sortItem: i18n.language != "en" ? sortingColOptions_Blog_Fa : sortingColOptions_Blog_En, placeholder: i18n.language != "en" ? "انتخاب کنید" : "Choose" },
        { setState: setRowsOfPage, sortItem: sortCurrentItem, width: '!w-24', placeholder: i18n.language != "en" ? "تعداد " : "Number" }
    ]

    // Pagination
    const currentBlog = isTabletOrMobile ? 6 : 12
    useEffect(() => { dispatch(setRowsOfPage(currentBlog)) }, [currentBlog])

    // Get blog list with filter
    const { data: blogData, isSuccess, isLoading, isError, refetch } = useQueryWithDependencies("GET_BLOGS_LIST", GetNewsFilterPage, FilterBlogObj, FilterBlogObj)

    // Get blog total count
    const { data: blogLength, isSuccess: blogLengthFinished } = useQueryWithoutDependencies("GET_BLOG-LENGTH", GetNewsFilterPage)

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <div>
                <TitleSection title={'BlogSection'} >
                    <BreadCrumb type="Div" text="BlogSection" />
                </TitleSection>
                <div className="main-container flex gap-7 relative">
                    <MediaQuery minWidth={"1024px"}><FilterSide_Blogs /></MediaQuery>
                    <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                        <MediaQuery maxWidth={"1023px"}>
                            <FilterButton>
                                <FilterSide_Blogs />
                            </FilterButton>
                        </MediaQuery>
                        <SectionTop
                            lengthAllData={blogLengthFinished && blogLength?.totalCount}
                            lengthFilteredData={isSuccess && blogData?.news?.length}
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
                            <PaginatedItems setPage={setPageNumber} currentData={isSuccess && blogData?.totalCount} currentDataInOnePage={FilterBlogObj.RowsOfPage}>
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
            </div>
        </motion.div>
    )
}

export default BlogWrapperPage
