import FilterSection from "../header-section/FilterSection"
import Table from "../table"
import TableItem from "../table/TableItems"
import { RenderItemsList, PaginatedItems, PaginateHolderItems, CustomButton } from "../../../common"
import { useQueryWithoutDependencies } from "../../../../core/hooks/react-query"
import { GetMyJobHistories } from "../../../../core/services/api/get-data"
import { MyJobHistoryHeader } from "../../../../core/constants/user-panel/HeaderTables"
import { handleData, setQuery } from "../../../../redux/slices/userPanel-filter-slices/MyJob"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useMutation } from "@tanstack/react-query"
import { DeleteJobHistory } from "../../../../core/services/api/delete-data"
import { useDispatch, useSelector } from "react-redux"
import { FaPlus } from "react-icons/fa6";

const JobHistoryWrapper = () => {
  const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]
  const { i18n } = useTranslation()
  const dispatch = useDispatch()
  const params = useSelector(state => state.MyJobs)

  const { data, isError, isSuccess, isLoading, refetch, isRefetching } =
    useQueryWithoutDependencies("GET_JOB_HISTORY", GetMyJobHistories)

  useEffect(() => {
    if (isSuccess) {
      dispatch(handleData(data))
    }
  }, [isSuccess, isRefetching])

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 8;

  // Delete Job
  const { mutate } = useMutation({
    mutationKey: ["DELETED_JOB"],
    mutationFn: (data) => {
      DeleteJobHistory(data, refetch)
    }
  })

  return (
    <div className='w-full flex flex-wrap h-fit'>
      <div className="w-full flex justify-between items-center">
      <FilterSection boxs={[]} query={setQuery} />
      <CustomButton vStyle={"yellow"} vType={"link"} text={"افزودن شغل"} Icon={FaPlus} href={"/userPanel/createJob"}  />
      </div>
      <PaginateHolderItems style="justify-center">
        <PaginatedItems currentData={isSuccess && params.FilteredData?.length} currentDataInOnePage={8} setPage={setItemOffset} >
          <div className='overflow-x-auto lg:overflow-hidden h-[590px] w-full'>
            <Table sectionHeader={MyJobHistoryHeader} itemsWidth="25" style="border-t border-LightGrayish mt-3 pt-5">
              <RenderItemsList
                RenderComponent={TableItem}
                isLoading={isLoading}
                isSuccess={isSuccess}
                isError={isError}
                originalData={params.FilteredData ? params.FilteredData.slice(itemOffset, endOffset) : []}
                skeletonData={skeletonData}
                variant="myJobs"
                notFoundText={i18n.language == "en" ? "Job not found" : "شغلی یافت نشد"}
                action={mutate}
              />
            </Table>
          </div>
        </PaginatedItems>
      </PaginateHolderItems>
    </div>
  )
}

export default JobHistoryWrapper
