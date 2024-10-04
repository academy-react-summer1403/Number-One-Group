import { useTranslation } from "react-i18next";
import SearchBtn from "./SearchBtn";
import { CategoryIcon, EventIcon, ShopIcon, TopicsIcon } from "../../../core/icon";
import { Select, SelectItem, } from "@nextui-org/react";
import { useState } from "react";

const SearchInput = ({ showSearchFilter = true, inputStyle, holderStyle }) => {
    const { t, i18n } = useTranslation();
    const selectItems = [
        { id: 1, label: "دوره ها", value: "course", icon: CategoryIcon },
        { id: 2, label: "وبلاگ ها", value: "blog", icon: TopicsIcon },
        { id: 3, label: "فروشگاه", value: "shop", icon: ShopIcon },
        { id: 4, label: "ایونت ها", value: "event", icon: EventIcon },
    ]

    const [SearchValue, setSearchValue] = useState("1")

    return (
        <div className={`w-fit border border-LightGrayish py-0.5 overflow-hidden px-px text-sm flex justify-between items-center rounded-full ${holderStyle}`}>
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
                <input type="text" placeholder={t('PlaceHolder_Courses')} className={`w-[200px] h-fit outline-none px-4 ${inputStyle} bg-transparent`} />
            </div>
            <SearchBtn />
        </div>
    )
}

export default SearchInput