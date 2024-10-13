import { useTranslation } from "react-i18next"
import { Search_TwoIcon } from "../../../core/icon";
import { useDispatch } from "react-redux";

const FilterSearch = ({ variant, setQuery, Style }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    
    const variantPlaceHolder = {
        "Courses": "PlaceHolder_Courses",
        "Blogs": "PlaceHolder_Blogs",
        "Shop": "PlaceHolder_Shop"
    }

    const SetFilterQuery = (e) => {
        if (e.target.value !== "") dispatch(setQuery(e.target.value))
        else dispatch(setQuery(undefined))
    }

    return (
        <div className={`flex items-center p-3 bg-LightGray rounded-lg mb-5 ${Style}`}>
            <input type="text" onChange={(e) => SetFilterQuery(e)} placeholder={t(variantPlaceHolder?.[variant])} className="text-sm w-11/12 bg-transparent outline-none" />
            <Search_TwoIcon />
        </div>
    )
}

export default FilterSearch
