import { useSelector } from "react-redux"
import { handleCategory, handleShopQuery } from "../../../redux/slices/filter-box-slices/FilterShops"
import { FilterRadio, FilterSearch } from "../../common"
import { useQueryWithoutDependencies } from "../../../core/hooks/react-query"
import { GetShopCategories } from "../../../core/services/api/get-data"

const FilterSide_Shops = ({
}) => {
  const queryDefault = useSelector(state => state.FilterShops.Query)

  // Get Shop Categories List
  const {
    data: category,
    isRefetching: categoryRefetching,
    refetch: categoryRefetch,
    isSuccess: categorySuccess
  } = useQueryWithoutDependencies("GET_SHOP_CATEGORIES", GetShopCategories)


  return (
    <div className='h-fit lg:w-72'>
      <FilterSearch setQuery={handleShopQuery} variant="Shop" holderDefault={queryDefault} />
      <FilterRadio
        title={"category"}
        setInputID={handleCategory}
        inputData={categorySuccess && category}
        titleKey={"categoryName"}
        fetchStatus={categoryRefetching}
        refetch={categoryRefetch}
      />
    </div>

  )
}

export default FilterSide_Shops