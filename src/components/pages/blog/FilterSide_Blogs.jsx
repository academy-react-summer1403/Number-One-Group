import { FilterRadio, FilterSearch } from "../../common"
import { setNewsCategoryId, setQueryBlog } from "../../../redux/slices/filter-box-slices/FilterBlog"
import { GetListNewsCategory } from "../../../core/services/api/get-data"
import { useQueryWithoutDependencies } from "../../../core/hooks/react-query"
import { useSelector } from "react-redux"

const FilterSide_Blogs = () => {
    const { data: newsCategory, isRefetching, refetch } = useQueryWithoutDependencies("GET_NEW_CATEGORY", GetListNewsCategory)
    const queryDefault = useSelector(state => state.FilterBlog.Query)

    return (
        <div className='h-fit lg:w-72'>
            <FilterSearch setQuery={setQueryBlog} variant="Blogs" holderDefault={queryDefault} />
            <FilterRadio
                title={"category"}
                setInputID={setNewsCategoryId}
                inputData={newsCategory}
                titleKey={"categoryName"}
                fetchStatus={isRefetching}
                refetch={refetch}
            />
        </div>
    )
}

export default FilterSide_Blogs