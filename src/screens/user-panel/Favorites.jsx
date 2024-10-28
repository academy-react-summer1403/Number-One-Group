import { FilterSection, Table, TableItem } from "../../components/pages/user-panel"
import { PaginatedItems, PaginateHolderItems, RenderItemsList } from "../../components/common"
import { useMutation, } from "@tanstack/react-query"
import { setQuery, setSortingCol, setSortingCurrent } from "../../redux/slices/userPanel-filter-slices/MyFavorite"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useMutationWithRefetch, useQueryWithoutDependencies } from "../../core/hooks/react-query"
import { GetMyFavoriteBlogs, GetMyFavoriteCourses } from "../../core/services/api/get-data"
import { MyBlogFavoriteHeader, MyBlogFavoriteKey, MyCourseFavoriteHeader, MyCourseFavoriteKey } from "../../core/constants/user-panel/HeaderTables"
import { DeleteBlogFavorite, DeleteCourseFavorite } from "../../core/services/api/delete-data"
import { sortCurrentOffset, sortOptionChooseList_En, sortOptionChooseList_Fa } from "../../core/constants/sort"
import { useTranslation } from "react-i18next"

const Favorites = () => {
  const { i18n } = useTranslation()
  const { sortingCol, Query, sortingCurrent } = useSelector(state => state.MyFavorite);
  const [count, setCount] = useState(0)
  const skeletonData = [{}, {}, {}, {}, {}, {}]

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + sortingCurrent;

  // Get Data with useQuery
  const {
    data: myCoursesData,
    isLoading: courseLoading,
    isSuccess: courseSuccess,
    isError: courseError,
    refetch: courseRefetch
  } = useQueryWithoutDependencies("GET_MY_FAVORITE_COURSES", GetMyFavoriteCourses)

  const {
    data: myBlogData,
    isLoading: blogLoading,
    isSuccess: blogSuccess,
    isError: blogError,
    refetch: blogRefetch
  } = useQueryWithoutDependencies("GET_MY_FAVORITE_BLOG", GetMyFavoriteBlogs)

  // Delete Data with useMutation
  const { mutate: courseMutate } = useMutationWithRefetch('DELETE_COURSE_FAVORITE',DeleteCourseFavorite,courseRefetch)
  const { mutate: blogMutate } = useMutationWithRefetch('DELETE_BLOG_FAVORITE',DeleteBlogFavorite,blogRefetch)

  // handle search filter for myFavorite Items
  const myFavoriteData = sortingCol === 'course' ? myCoursesData?.favoriteCourseDto.slice(itemOffset, endOffset)
    : myBlogData?.myFavoriteNews.slice(itemOffset, endOffset);
  const title = sortingCol === 'course' ? MyCourseFavoriteKey[0] : MyBlogFavoriteKey[0];
  const filteredData = myFavoriteData?.filter(item => item?.[title].indexOf(Query) != -1).slice(itemOffset, endOffset);
console.log(Query)
  const favoriteCoursesStatus = sortingCol === 'course';

  // params Object
  const params = {
    RenderComponent: TableItem,
    skeletonData: skeletonData,
    notFoundText: favoriteCoursesStatus ? 'course_NotFound' : 'blog_NotFound',
    refetchData: favoriteCoursesStatus ? courseRefetch : blogRefetch,
    variant: 'favorites',
    action: favoriteCoursesStatus ? courseMutate : blogMutate,
    keyVariant: favoriteCoursesStatus ? MyCourseFavoriteKey : MyBlogFavoriteKey,
    bet: favoriteCoursesStatus ? 'course' : 'blog',
    id: favoriteCoursesStatus ? 'courseId' : 'newsId'
  }

  useEffect(() => {
    if (favoriteCoursesStatus && courseSuccess) {
      setCount(myCoursesData.totalCount)
    } else if (!favoriteCoursesStatus && blogSuccess) {
      setCount(myBlogData.totalCount)
    }
  }, [favoriteCoursesStatus, courseSuccess, blogSuccess])

  const sortBox = [
    { defaultKey: 1, setState: setSortingCol, sortItem: i18n.language == "fa" ? sortOptionChooseList_Fa : sortOptionChooseList_En, label: "بخش مورد نظر" },
    { setState: setSortingCurrent, sortItem: sortCurrentOffset, label: "تعداد سطر" }
  ]

return (
  <div className="w-full flex flex-wrap h-fit">
    <FilterSection boxs={sortBox} query={setQuery} />
    <PaginateHolderItems style="justify-center h-[685px] border-t-2 border-gray-100 mt-3 pt-4">
      <PaginatedItems currentData={count} currentDataInOnePage={sortingCurrent} setState={setItemOffset} >
        <div className="overflow-x-auto w-full lg:overflow-x-hidden">
          <Table sectionHeader={favoriteCoursesStatus ? MyCourseFavoriteHeader : MyBlogFavoriteHeader} itemsWidth="23">
            <RenderItemsList
              isLoading={favoriteCoursesStatus ? courseLoading : blogLoading}
              isSuccess={favoriteCoursesStatus ? courseSuccess : blogSuccess}
              isError={favoriteCoursesStatus ? courseError : blogError}
              originalData={Query !== undefined ? filteredData : myFavoriteData}
              {...params}
            />
          </Table>
        </div>
      </PaginatedItems>
    </PaginateHolderItems>
  </div>
)
}

export default Favorites
