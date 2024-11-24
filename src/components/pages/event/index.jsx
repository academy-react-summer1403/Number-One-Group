import React, { Fragment } from 'react'
import { motion } from "framer-motion";
import { BreadCrumb, TitleSection } from '../../partials/title-section';
import configVariants from '../../../config/page-transition';
import EventCard from './EventCard';
import { useTranslation } from 'react-i18next';
import { useQueryWithDependencies, useQueryWithoutDependencies } from '../../../core/hooks/react-query';
import { GetAllEvents, GetEventsLength } from '../../../core/services/api/get-data';
import { FilterSearch, PaginatedItems, PaginateHolderItems, RenderItemsList, SectionTop, SortBox, SortBoxHolder } from '../../common';
import { useSelector } from 'react-redux';
import { handlePageNumber, handleRowsOfPage, handleQuery, handleSortingCol } from '../../../redux/slices/filter-box-slices/FilterEvents';
import { sortCurrentItem, sortingColOptions_Event_En, sortingColOptions_Event_Fa } from '../../../core/constants/sort';

const EventWrapper = () => {
    const { i18n } = useTranslation()
    const params = useSelector(state => state.FilterEvent)

    // Skeleton
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    // Get Event List From Mock Api 
    const { data: eventData, isLoading, isSuccess, isError, refetch } = useQueryWithDependencies("GET_ALL_EVENTS", GetAllEvents, params, params)

    // Get Total Count
    const { data: totalCount, isSuccess: countSuccess, } = useQueryWithoutDependencies("GET_EVENTS_COUNT", GetEventsLength)

    // Sort Data
    const sortBoxData = [
        { setState: handleSortingCol, sortItem: i18n.language != "en" ? sortingColOptions_Event_Fa : sortingColOptions_Event_En, placeholder: i18n.language != "en" ? "انتخاب کنید" : "Choose" },
        { setState: handleRowsOfPage, sortItem: sortCurrentItem, width: '!w-24', placeholder: i18n.language != "en" ? "تعداد " : "Number" }
    ]

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <Fragment transitionSpeed={2500}>
                <TitleSection title={'Events'} >
                    <BreadCrumb type="Div" text="Events" />
                </TitleSection>
                <div className='main-container'>
                    <div className='flex w-full items-center justify-between'>
                        <FilterSearch Style="w-[470px] mb-0" setQuery={handleQuery} variant="Event" />
                        <SectionTop
                            lengthAllData={countSuccess && totalCount}
                            lengthFilteredData={isSuccess && eventData?.length}
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
                    </div>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems setPage={handlePageNumber} currentData={params.Query ? eventData?.length : totalCount} currentDataInOnePage={params.RowsOfPage}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2`}>
                                <RenderItemsList
                                    RenderComponent={EventCard}
                                    isLoading={isLoading}
                                    isSuccess={isSuccess}
                                    isError={isError}
                                    originalData={isSuccess && eventData}
                                    skeletonData={skeletonData}
                                    notFoundText={i18n.language != "en" ? "متاسفانه وبلاگی موجود نیست!" : "Unfortunately, there is no blog available!"}
                                    refetchData={refetch}
                                />
                            </div>
                        </PaginatedItems>
                    </PaginateHolderItems>
                </div>
            </Fragment>
        </motion.div>
    )
}

export default EventWrapper
