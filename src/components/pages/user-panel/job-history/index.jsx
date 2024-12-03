import FilterSection from "../header-section/FilterSection"
import Table from "../table"
import TableItem from "../table/TableItems"
import { RenderItemsList, PaginatedItems, PaginateHolderItems } from "../../../common"
import { useQueryWithoutDependencies } from "../../../../core/hooks/react-query"
import { GetMyJobHistories } from "../../../../core/services/api/get-data"
import { MyJobHistoryHeader } from "../../../../core/constants/user-panel/HeaderTables"
import { setQuery } from "../../../../redux/slices/userPanel-filter-slices/MyJob"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const JobHistoryWrapper = () => {
  const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]
  const { i18n } = useTranslation()

  const { data, isError, isSuccess, isLoading } =
    useQueryWithoutDependencies("GET_JOB_HISTORY", GetMyJobHistories)

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 8;

  return (
    <div className='w-full flex flex-wrap h-fit'>
      <FilterSection boxs={[]} query={setQuery} />
      <PaginateHolderItems style="justify-center">
        <PaginatedItems currentData={isSuccess && data.length} currentDataInOnePage={8} setPage={setItemOffset} >
          <div className='overflow-x-auto lg:overflow-hidden h-[590px] w-full'>
            <Table sectionHeader={MyJobHistoryHeader} itemsWidth="25" style="border-t border-LightGrayish mt-3 pt-5">
              <RenderItemsList
                RenderComponent={TableItem}
                isLoading={isLoading}
                isSuccess={isSuccess}
                isError={isError}
                originalData={isSuccess && data.slice(itemOffset, endOffset)}
                skeletonData={skeletonData}
                variant="myJobs"
                notFoundText={i18n.language == "en" ? "Job not found" : "شغلی یافت نشد"}
              />
            </Table>
          </div>
        </PaginatedItems>
      </PaginateHolderItems>
    </div>
  )
}

export default JobHistoryWrapper
