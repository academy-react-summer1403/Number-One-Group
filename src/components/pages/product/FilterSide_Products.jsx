import { useSelector } from 'react-redux'
import { FilterRadio, FilterSearch } from '../../common'
import { handleProductQuery, handleCategory, handleShop } from '../../../redux/slices/filter-box-slices/FilterProducts'
import { useQueryWithoutDependencies } from '../../../core/hooks/react-query'
import { GetAllShops, GetProductCategoryList } from '../../../core/services/api/get-data'

const FilterSide_Products = () => {
    const queryDefault = useSelector(state => state.FilterProducts.Query)

    // Get Shop List
    const { data, isSuccess, isRefetching, refetch } =
        useQueryWithoutDependencies("GET_SHOPS", GetAllShops)

    // Get Category List
    const {
        data: category,
        isRefetching: categoryRefetching,
        refetch: categoryRefetch,
        isSuccess: categorySuccess
    } = useQueryWithoutDependencies("GET_CATEGORY", GetProductCategoryList)

    return (
        <div className='h-fit lg:w-72'>
            <FilterSearch setQuery={handleProductQuery} variant="Product" holderDefault={queryDefault} />
            <FilterRadio
                title={"category"}
                setInputID={handleCategory}
                inputData={categorySuccess && category}
                titleKey={"categoryName"}
                fetchStatus={categoryRefetching}
                refetch={categoryRefetch}
            />
            <FilterRadio
                title={"shopList"}
                setInputID={handleShop}
                inputData={isSuccess && data}
                titleKey={"name"}
                fetchStatus={isRefetching}
                refetch={refetch}
            />
        </div>
    )
}

export default FilterSide_Products
