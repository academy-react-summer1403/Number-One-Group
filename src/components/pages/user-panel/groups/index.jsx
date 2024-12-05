import { PaginatedItems, PaginateHolderItems, RenderItemsList } from "../../../common"
import FilterSection from "../header-section/FilterSection"
import { MyGroupsHeader } from "../../../../core/constants/user-panel/HeaderTables"
import { useQueryWithoutDependencies } from "../../../../core/hooks/react-query"
import { GetListMyCourseUser } from "../../../../core/services/api/get-data"
import TableItem from "../table/TableItems"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleData, setQuery, setSortingCurrent } from "../../../../redux/slices/userPanel-filter-slices/MyGroup"
import { sortCurrentOffset } from "../../../../core/constants/sort"
import { useTranslation } from "react-i18next"
import Table from "../table"

const GroupsWrapper = () => {
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]
    const dispatch = useDispatch()
    const params = useSelector(state => state.MyGroups)
    const { i18n } = useTranslation()

    const { data, isSuccess, isError, isLoading } =
        useQueryWithoutDependencies("GET_MY_GROUPS", GetListMyCourseUser)

    useEffect(() => {
        if (isSuccess) {
            dispatch(handleData(data))
        }
    }, [isSuccess])

    // Pagination
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + params.sortingCurrent;

    const sortBox = [
        { setState: setSortingCurrent, sortItem: sortCurrentOffset, label: "تعداد سطر" }
    ]

    return (
        <div className='w-full flex flex-wrap h-fit'>
            <FilterSection boxs={sortBox} query={setQuery} />
            <PaginateHolderItems style="justify-center">
                <PaginatedItems currentData={isSuccess && params.FilteredData?.length} currentDataInOnePage={params.sortingCurrent} setPage={setItemOffset} >
                    <div className='overflow-x-auto lg:overflow-hidden h-[590px] w-full'>
                        <Table sectionHeader={MyGroupsHeader} itemsWidth="48" style="border-t border-LightGrayish mt-3 pt-5">
                            <RenderItemsList
                                RenderComponent={TableItem}
                                isLoading={isLoading}
                                isSuccess={isSuccess}
                                isError={isError}
                                originalData={params.FilteredData ? params.FilteredData.slice(itemOffset, endOffset) : []}
                                skeletonData={skeletonData}
                                variant="myGroups"
                                notFoundText={i18n.language == "en" ? "Course not found" : "دوره ای یافت نشد"}
                            />
                        </Table>
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>
        </div>
    )
}

export default GroupsWrapper
