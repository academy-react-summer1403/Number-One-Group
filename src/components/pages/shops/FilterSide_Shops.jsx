import { useSelector } from "react-redux"
import { handleCategory, handleShopQuery } from "../../../redux/slices/filter-box-slices/FilterShops"
import { FilterRadio, FilterSearch } from "../../common"

const FilterSide_Shops = ({
}) => {
  const queryDefault = useSelector(state => state.FilterShops.Query)


  return (
    <div className='h-fit lg:w-72'>
      <FilterSearch setQuery={handleShopQuery} variant="Shop" holderDefault={queryDefault} />
     
    </div>

  )
}

export default FilterSide_Shops