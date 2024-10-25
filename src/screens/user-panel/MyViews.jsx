import { FilterSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, RenderItemsList } from "../../components/common"
import { useEffect, useState } from "react"
import { MyViewsHeader } from "../../core/constants/user-panel/HeaderTables"
import { useQueryWithoutDependencies } from "../../core/hooks/react-query"
import { GetMyBlogViews, GetMyCourseViews } from "../../core/services/api/get-data"
import { useTranslation } from "react-i18next"
import { sortCurrentOffset, sortOptionChooseList_En, sortOptionChooseList_Fa } from "../../core/constants/sort"
import { useSelector } from "react-redux"
import { setQuery, setSortingCol, setSortingCurrent } from "../../redux/slices/userPanel-filter-slices/MyViews"

const MyViews = () => {
  const { i18n } = useTranslation()
  const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}]
  const [count, setCount] = useState(0)
  const params = { RenderComponent: TableItem, skeletonData: skeletonData, variant: "myViews", notFoundText: i18n.language == "fa" ? "موردی یافت نشد" : "No items found" }
  const { sortingCurrent, sortingCol, Query } = useSelector(state => state.MyViews)

  const {
    data: courseViews,
    isSuccess: courseSuccess,
    isLoading: courseLoading,
    isError: courseError
  } = useQueryWithoutDependencies("GET_MY_COURSE_VIEWS", GetMyCourseViews)

  const {
    data: blogViews,
    isSuccess: blogSuccess,
    isLoading: blogLoading,
    isError: blogError
  } = useQueryWithoutDependencies("GET_MY_BLOG_VIEWS", GetMyBlogViews)

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + sortingCurrent;

  const myViewsData = sortingCol === 'course' ? courseViews?.myCommentsDtos.slice(itemOffset, endOffset)
    : blogViews?.myNewsCommetDtos.slice(itemOffset, endOffset);
  const filteredData = myViewsData?.filter(item => item.courseTitle.indexOf(Query) != -1).slice(itemOffset, endOffset)

  useEffect(() => {
    if (sortingCol == "course" && courseSuccess && !Query) {
      setCount(courseViews.totalCount)
    } else if (sortingCol == "course" && courseSuccess && Query) {
      setCount(filteredData.length)
    } else if (sortingCol == "blog" && blogSuccess && !Query) {
      setCount(blogViews.totalCount)
    } else if (sortingCol == "blog" && blogSuccess && Query) {
      setCount(filteredData.length)
    }
  }, [sortingCol, courseSuccess, blogSuccess, filteredData])

  const sortBox = [
    { defaultKey: 1, setState: setSortingCol, sortItem: i18n.language == "fa" ? sortOptionChooseList_Fa : sortOptionChooseList_En, label: "بخش مورد نظر" },
    { setState: setSortingCurrent, sortItem: sortCurrentOffset, label: "تعداد سطر" }
  ]

  return (
    <div className="w-full flex flex-wrap h-fit">
      <FilterSection boxs={sortBox} query={setQuery} />
      <PaginateHolderItems style="justify-center">
        <PaginatedItems currentData={count} currentDataInOnePage={sortingCurrent} setState={setItemOffset} >
          <div className='overflow-x-auto lg:overflow-x-hidden h-[590px] w-full'>
            <Table sectionHeader={MyViewsHeader} itemsWidth="23" style="border-t border-LightGrayish mt-3 pt-5">
              <RenderItemsList
                isError={sortingCol === "course" ? courseError : blogLoading}
                isLoading={sortingCol === "course" ? courseLoading : blogError}
                isSuccess={sortingCol === "course" ? courseSuccess : blogSuccess}
                originalData={Query === undefined ? myViewsData : filteredData}
                {...params}
              />
            </Table>
          </div>
        </PaginatedItems>
      </PaginateHolderItems>
    </div>
  )
}

export default MyViews
