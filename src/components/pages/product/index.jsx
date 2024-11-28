import { motion } from "framer-motion";
import { BreadCrumb, TitleSection } from "../../partials/title-section";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import FilterButton from "../../common/bottom-nav/FilterButton";
import { PaginatedItems, PaginateHolderItems, RenderItemsList, SectionTop, SortBox, SortBoxHolder } from "../../common";
import ProductCardWrapper from "./ProductCardWrapper";
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../../core/hooks/react-query";
import { GetAllProducts, GetProductsLength } from "../../../core/services/api/get-data";
import { useDispatch, useSelector } from "react-redux";
import configVariants from "../../../config/page-transition";
import { handleProductPage, handleRowsOfPage, handleSortingCol } from "../../../redux/slices/filter-box-slices/FilterProducts"
import { sortCurrentItem, sortingColOptions_Product_En, sortingColOptions_Product_Fa } from "../../../core/constants/sort";
import FilterSide_Products from "./FilterSide_Products";
import { useEffect } from "react";
import { productFilterParams } from "../../../core/constants/filter-params";
import { useSearchParams } from "react-router-dom";

const ProductWrapper = () => {
    const { i18n } = useTranslation()
    const params = useSelector(state => state.FilterProducts)
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()

    // Get Products List From Mock Api
    const { data: productData, isSuccess, isError, isLoading, refetch } =
        useQueryWithDependencies("GET_PRODUCTS", GetAllProducts, params, params)

    // Get Products List Length
    const { data: totalCount, isSuccess: countSuccess } =
        useQueryWithoutDependencies("GET_PRODUCTS_LENGTH", GetProductsLength)

    // Skeleton
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    const sortBoxData = [
        { setState: handleSortingCol, sortItem: i18n.language != "en" ? sortingColOptions_Product_Fa : sortingColOptions_Product_En, placeholder: i18n.language != "en" ? "انتخاب کنید" : "Choose" },
        { setState: handleRowsOfPage, sortItem: sortCurrentItem, width: '!w-24', placeholder: i18n.language != "en" ? "تعداد " : "Number" }
    ]

    // Set The Url Filter Parameters
    useEffect(() => {
        productFilterParams.forEach(({ key, action }) => {
            const value = searchParams.get(key);
            if (value) {
                dispatch(action(value))
            }
        })
    }, [])

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={'ProductSection'} >
                <BreadCrumb type="Div" text="ProductSection" />
            </TitleSection>
            <div className="main-container flex gap-7 relative">
                <MediaQuery minWidth={"1024px"}>
                    <FilterSide_Products />
                </MediaQuery>
                <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                    <MediaQuery maxWidth={"1023px"}>
                        <FilterButton>
                            <FilterSide_Products />
                        </FilterButton>
                    </MediaQuery>
                    <SectionTop
                        lengthAllData={countSuccess && totalCount.length}
                        lengthFilteredData={isSuccess && productData.length}
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
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems setPage={handleProductPage} currentData={countSuccess && totalCount.length} currentDataInOnePage={params.RowsOfPage}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2`}>
                                <RenderItemsList
                                    RenderComponent={ProductCardWrapper}
                                    isLoading={isLoading}
                                    isSuccess={isSuccess}
                                    isError={isError}
                                    originalData={isSuccess && productData}
                                    skeletonData={skeletonData}
                                    notFoundText={i18n.language != "en" ? "متاسفانه وبلاگی موجود نیست!" : "Unfortunately, there is no blog available!"}
                                    refetchData={refetch}
                                />
                            </div>
                        </PaginatedItems>
                    </PaginateHolderItems>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductWrapper
