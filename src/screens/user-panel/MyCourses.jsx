import { FilterSection, Table, TableItem } from '../../components/pages/user-panel'
import { RenderItemsList, PaginatedItems, PaginateHolderItems } from "../../components/common"
import { useSelector } from 'react-redux'
import { setPageNumber, setSortingCol, setQuery } from '../../redux/slices/userPanel-filter-slices/MyCourses'
import { MyCourseHeader } from '../../core/constants/user-panel/HeaderTables'
import { useQueryWithDependencies } from '../../core/hooks/react-query'
import { GetMyCourses } from '../../core/services/api/get-data'
import { sortColOptions_MyCourses_En, sortColOptions_MyCourses_Fa } from '../../core/constants/sort'
import { useTranslation } from 'react-i18next'

const MyCourses = () => {
  const MyCoursesFilter = useSelector(state => state.MyCourses)
  const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]
  const { i18n } = useTranslation()

  const { data, isSuccess, isError, isLoading } = useQueryWithDependencies("MY_COURSE_LIST", GetMyCourses, MyCoursesFilter, MyCoursesFilter)

  const sortBox = [
    { setState: setSortingCol, sortItem: i18n.language == "en" ? sortColOptions_MyCourses_En : sortColOptions_MyCourses_Fa },
  ]

  return (
    <div className='w-full flex flex-wrap h-fit -mt-8'>
      <FilterSection boxs={sortBox} query={setQuery} />
      <PaginateHolderItems style="justify-center">
        <PaginatedItems currentData={isSuccess && data.totalCount} currentDataInOnePage={8} setPage={setPageNumber} >
          <div className='overflow-x-auto lg:overflow-hidden h-[590px] w-full'>
            <Table sectionHeader={MyCourseHeader} itemsWidth="25" style="border-t border-LightGrayish mt-3 pt-5">
              <RenderItemsList
                RenderComponent={TableItem}
                isLoading={isLoading}
                isSuccess={isSuccess}
                isError={isError}
                originalData={isSuccess && data.listOfMyCourses}
                skeletonData={skeletonData}
                variant="myCourses"
                notFoundText={i18n.language == "en" ? "Course not found" : "دوره ای یافت نشد"}
              />
            </Table>
          </div>
        </PaginatedItems>
      </PaginateHolderItems>
    </div>
  )
}

export default MyCourses
