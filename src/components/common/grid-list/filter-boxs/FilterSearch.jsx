import { useTranslation } from "react-i18next"
import { Search_TwoIcon } from "../../../../core/icon";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const FilterSearch = ({ variant, setQuery, Style, holderDefault }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams({ Query: holderDefault });
    // console.log(holderDefault)


    const variantPlaceHolder = {
        "Courses": "PlaceHolder_Courses",
        "Blogs": "PlaceHolder_Blogs",
        "Shop": "PlaceHolder_Shop"
    }

    const SetFilterQuery = (e) => {
        if (e.target.value !== "") { dispatch(setQuery(e.target.value)); searchParams.set("Query", e.target.value) }
        else { dispatch(setQuery(undefined)); searchParams.delete("Query") }
        setSearchParams(searchParams);
    }
    useEffect(() => {
        if (holderDefault !== undefined) {
            searchParams.set("Query", holderDefault);
            setSearchParams(searchParams);
        }
    }, [])

    return (
        <div className={`flex items-center p-3 bg-LightGray rounded-lg mb-5 ${Style}`}>
            <input type="text" defaultValue={holderDefault} onChange={(e) => SetFilterQuery(e)} placeholder={t(variantPlaceHolder?.[variant])} className="text-sm w-11/12 bg-transparent outline-none" />
            <Search_TwoIcon />
        </div>
    )
}

export default FilterSearch
