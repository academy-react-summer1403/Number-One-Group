import { motion } from "framer-motion";
import configVariants from "../../../config/page-transition";
import { BreadCrumb, TitleSection } from "../../partials/title-section";
import FilterSide_Shops from "./FilterSide_Shops";
import MediaQuery from "react-responsive";
import { PaginatedItems, PaginateHolderItems, RenderItemsList } from "../../common";
import { GetShopsLength, GetShopsList } from "../../../core/services/api/get-data";
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../../core/hooks/react-query";
import { handleShopPage } from "../../../redux/slices/filter-box-slices/FilterShops";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ShopCardWrapper from "./ShopCardWrapper";
import FilterButton from "../../common/bottom-nav/FilterButton";

const ShopWrapper = () => {
    const { i18n } = useTranslation()

    // shops Params
    const shopParams = useSelector(state => state.FilterShops)

    // Get Shops List Length
    const { data: ShopsTotalCount, isSuccess: countSuccess } =
        useQueryWithoutDependencies("GET_SHOPS_LENGTH", GetShopsLength)

    // Get Shops List with Params
    const { data: ShopsData, isSuccess, isError, isLoading, refetch } =
        useQueryWithDependencies("GET_SHOPS_LIST", GetShopsList, shopParams, shopParams)
    // Skeleton
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    console.log(shopParams)

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