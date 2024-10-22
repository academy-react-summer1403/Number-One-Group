import { useTranslation } from "react-i18next";
import SearchBtn from "./SearchBtn";
import { Select, SelectItem} from "@nextui-org/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQueryCourse } from "../../../redux/slices/filter-box-slices/FilterCourses";
import { setQueryBlog } from "../../../redux/slices/filter-box-slices/FilterBlog";
import { useLocation, useNavigate } from "react-router-dom";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { selectItems_EN, selectItems_FA } from "../../../core/constants/sort";

const SearchInput = ({ showSearchFilter = true, inputStyle, holderStyle, setQuery }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const [SearchValue, setSearchValue] = useState("1")
    const [statusSearch, setStatusSearch] = useState(false)
    const Navigate = useNavigate()
    const selectItems = i18n.language === 'fa' ? selectItems_FA : selectItems_EN

    // Find the searched item
    const location = useLocation()
    const Path = SearchValue && selectItems.find(el => el.id == SearchValue)
    const pageSearch = selectItems.find(el => el.path == location.pathname)

    // Select the desired setQuery
    const setHeaderQuery = SearchValue == 1 ? setQueryCourse : setQueryBlog;
    const setQuerySel = setQuery ?? setHeaderQuery;
    const [status, setStatus] = useState(false)


    // Set the search input value to the desired query
    const SetFilterQuery = (e) => {
        if (statusSearch) {
            if (e.target.value !== "") { dispatch(setQuerySel(e.target.value)); setStatus(true) }
            else { dispatch(setQuerySel(undefined)); setStatus(false) }
        }
    }

    return (
        <div className={`w-fit border border-LightGrayish py-0.5 overflow-hidden px-px text-sm 
        flex justify-between items-center rounded-full ${holderStyle} ${pageSearch ? "hidden" : ""}`}>
            <div className="w-[90%] flex items-center">
                {/* category Section */}
                {showSearchFilter && (
                    <Select
                        radius="none"
                        items={selectItems}
                        selectedKeys={[SearchValue]}
                        className={`w-[130px] ${i18n.language == "en" ? "border-r-2" : "border-l-2"} border-LightGrayish h-[25px] flex items-center`}
                        classNames={{
                            trigger: "bg-transparent min-h-[25px] h-[25px] hover:!bg-transparent duration-500",
                            listboxWrapper: "font-IranSans select_dir",
                        }}
                        onChange={(event) => { setSearchValue(event.target.value) }}
                        renderValue={(items) => {
                            return items.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <item.data.icon className="fill-VioletBlue max-w-[20px] max-h-[20px]" />
                                    <span>{item.data.label}</span>
                                </div>
                            ));
                        }}
                    >
                        {(selectItems) => (
                            <SelectItem key={selectItems.id} textValue={selectItems.label}>
                                {selectItems.label}
                            </SelectItem>
                        )}
                    </Select>
                )}
                {/* Search Input */}
                <input onChange={(e) => SetFilterQuery(e)} type="text" placeholder={t(Path.placeHolder)} className={`w-[200px] h-fit outline-none px-4 ${inputStyle} bg-transparent`} />
            </div>
            <Popover placement="bottom" showArrow={true} className={`${status ? 'hidden' : ''}`}>
                <PopoverTrigger>
                    <button onClick={() => { if (status) Navigate(Path.path); setStatusSearch(true)}}>
                        <SearchBtn />
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <h1 className="font-semibold ">{t('headerSearchText')}</h1>
                    </div>
                </PopoverContent>
            </Popover>

        </div>
    )
}

export default SearchInput