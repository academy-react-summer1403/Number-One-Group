import { useState } from 'react';
import "./SortStyle.css"
import { useTranslation } from 'react-i18next';
import { Select, SelectItem } from '@nextui-org/react';
import { useDispatch } from 'react-redux';

const SortBox = ({ options, defaultKey, placeholder, setState, ...props }) => {
    const [selectedOption, SetSelectedOption] = useState(null);
    const dispatch = useDispatch()

    const handleChange = (selected) => {
        var findKey = options.find(obj => obj.id == selected)
        SetSelectedOption(findKey)
        dispatch(setState(findKey.value))
    }

    const { i18n, } = useTranslation()

    return (
        <Select
            radius='md'
            aria-label="select"
            items={options}
            placeholder={placeholder}
            className="w-[180px] mx-auto"
            onChange={(e) => { handleChange(e.target.value) }}
            defaultSelectedKeys={defaultKey ? [defaultKey] : null}
            classNames={{
                trigger: "bg-transparent border border-LightGrayish hover:!bg-transparent duration-500",
                selectorIcon: "stroke-[#5751E1]",
                value: `${i18n.language != "en" ? "border-l" : "border-r"} border-LightGrayish`,
                listboxWrapper: `font-IranSans ${i18n.language != "en" && "select_dir"}`
            }}
            {...props}
        >
            {(selectedOption) => <SelectItem>{selectedOption.label}</SelectItem>}
        </Select>
    )
}

export default SortBox