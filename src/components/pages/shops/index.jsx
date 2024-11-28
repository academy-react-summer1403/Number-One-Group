import { motion } from "framer-motion";
import configVariants from "../../../config/page-transition";
import { BreadCrumb, TitleSection } from "../../partials/title-section";
import FilterSide_Shops from "./FilterSide_Shops";
import MediaQuery from "react-responsive";
import { PaginatedItems, PaginateHolderItems, RenderItemsList, SectionTop, SortBox, SortBoxHolder } from "../../common";
import { GetShopsLength, GetShopsList } from "../../../core/services/api/get-data";
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../../core/hooks/react-query";
import { handleRowsOfPage, handleShopPage, handleSortingCol } from "../../../redux/slices/filter-box-slices/FilterShops";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ShopCardWrapper from "./ShopCardWrapper";
import FilterButton from "../../common/bottom-nav/FilterButton";
import { sortCurrentItem, sortingColOptions_Shop_En, sortingColOptions_Shop_Fa } from "../../../core/constants/sort";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { shopsFilterParams } from "../../../core/constants/filter-params";

const ShopWrapper = () => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()

    // shops Params
    const shopParams = useSelector(state => state.FilterShops)
    const [searchParams, setSearchParams] = useSearchParams()

    // Get Shops List Length
    const { data: ShopsTotalCount, isSuccess: countSuccess } =
        useQueryWithoutDependencies("GET_SHOPS_LENGTH", GetShopsLength)

    // Get Shops List with Params
    const { data: ShopsData, isSuccess, isError, isLoading, refetch, isRefetching, } =
        useQueryWithDependencies("GET_SHOPS_LIST", GetShopsList, shopParams, shopParams)
    // Skeleton
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    const sortBoxData = [
        { setState: handleSortingCol, sortItem: i18n.language != "en" ? sortingColOptions_Shop_Fa : sortingColOptions_Shop_En, placeholder: i18n.language != "en" ? "انتخاب کنید" : "Choose" },
        { setState: handleRowsOfPage, sortItem: sortCurrentItem, width: '!w-24', placeholder: i18n.language != "en" ? "تعداد " : "Number" }
    ]

     // Set The Url Filter Parameters
     useEffect(() => {
        shopsFilterParams.forEach(({ key, action }) => {
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
            <TitleSection title={'ShopSection'} >
                <BreadCrumb type="Div" text="ShopSection" />
            </TitleSection>
            <div className="main-container flex gap-7 relative">
                <MediaQuery minWidth={"1024px"}>
                    <FilterSide_Shops />
                </MediaQuery>

                <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                    <MediaQuery maxWidth={"1023px"}>
                        <FilterButton>
                            <FilterSide_Shops />
                        </FilterButton>
                    </MediaQuery>
                    <SectionTop
                        lengthAllData={countSuccess && ShopsTotalCount}
                        lengthFilteredData={isSuccess && ShopsData.length}
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
                        <PaginatedItems setPage={handleShopPage} currentData={countSuccess && ShopsTotalCount} currentDataInOnePage={shopParams?.RowsOfPage}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2`}>
                                <RenderItemsList
                                    RenderComponent={ShopCardWrapper}
                                    isLoading={isLoading}
                                    isSuccess={isSuccess}
                                    isError={isError}
                                    originalData={isSuccess && ShopsData}
                                    skeletonData={skeletonData}
                                    notFoundText={i18n.language != "en" ? "متاسفانه فروشگاهی ای موجود نیست!" : "Unfortunately, there is no course available!"}
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

export default ShopWrapper