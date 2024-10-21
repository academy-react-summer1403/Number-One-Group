import { SearchInput, SortBox } from "../../../common"
import { useTranslation } from "react-i18next"

const FilterSection = ({ boxs, query }) => {
    const { i18n } = useTranslation()

    return (
        <div className='w-full flex justify-between'>
            <SearchInput setQueryProp={query} maxResponsiveValue={709} minResponsiveValue={710} showSearchFilter={false} inputStyle="py-2.5 w-72 lg:w-[400px]" />
            <div className="flex gap-x-2">
                {boxs.map((item, index) => (
                    <SortBox
                        key={index}
                        radius="full"
                        aria-label="select"
                        setState={item.setState}
                        options={item.sortItem}
                        placeholder={i18n.language == "en" ? "Choose" : "انتخاب کنید"}
                        defaultKey={item.defaultKey}
                        classNames={{
                            base: "!w-auto",
                            trigger: "bg-transparent border border-LightGrayish hover:!bg-transparent duration-500 h-[47px] w-[180px]",
                            selectorIcon: "stroke-[#5751E1]",
                            value: `border-LightGrayish`,
                            listboxWrapper: `font-IranSans ${i18n.language != "en" && "select_dir"}`
                        }}
                    />
                ))}

            </div>
        </div>
    )
}

export default FilterSection
