import FilterSection from "../header-section/FilterSection"
import Table from "../table"
import TableItem from "../table/TableItems"
import { PaginatedItems, PaginateHolderItems, RenderItemsList } from "../../../common"
import { useMutation } from "@tanstack/react-query"
import { ReserveHeader } from "../../../../core/constants/user-panel/HeaderTables"
import { useQueryWithoutDependencies } from "../../../../core/hooks/react-query"
import { GetMyCoursesReserve } from "../../../../core/services/api/get-data"
import { DeleteReserveCourse } from "../../../../core/services/api/delete-data"
import { useState } from "react"
import { sortCurrentOffset } from "../../../../core/constants/sort"
import { setQuery, setSortingCurrent } from "../../../../redux/slices/userPanel-filter-slices/MyReserved"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

const ReservedWrapper = () => {
  const ReservedState = useSelector(state => state.MyReserved)
  const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]
  const { i18n } = useTranslation()
  // Get reserved course
  const { data, isLoading, isError, isSuccess, refetch } = useQueryWithoutDependencies("MY_RESERVED_LIST", GetMyCoursesReserve)

  const { mutate } = useMutation({
    mutationKey: ['DELETE_RESERVED_COURSE'],
    mutationFn: (id) => { return DeleteReserveCourse(id) },
    onSuccess: () => { refetch() }
  })

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ReservedState.sortingCurrent;

  const filteredData = data?.filter(item => item.courseName.indexOf(ReservedState.Query) != -1).slice(itemOffset, endOffset)

  const sortBox = [
    { setState: setSortingCurrent, sortItem: sortCurrentOffset, label: "تعداد سطر" }
  ]

  return (
    <div className="w-full flex flex-wrap h-fit">
      <FilterSection boxs={sortBox} query={setQuery} />
      <PaginateHolderItems style="justify-center">
        <PaginatedItems currentData={ReservedState.Query == undefined ? data?.length : filteredData.length} currentDataInOnePage={ReservedState.sortingCurrent} setState={setItemOffset} >
          <div className='overflow-x-auto lg:overflow-x-hidden w-full h-[590px]'>
            <Table sectionHeader={ReserveHeader} itemsWidth="33" style="border-t border-LightGrayish mt-3 pt-5">
              <RenderItemsList
                RenderComponent={TableItem}
                isLoading={isLoading}
                isSuccess={isSuccess}
                isError={isError}
                originalData={ReservedState.Query == undefined ? data?.slice(itemOffset, endOffset) : filteredData}
                skeletonData={skeletonData}
                variant="reserved"
                action={mutate}
                notFoundText={i18n.language == "fa" ? "موردی یافت نشد" : "No items found"}
              />
            </Table>
          </div>
        </PaginatedItems>
      </PaginateHolderItems>
    </div>
  )
}

export default ReservedWrapper
