import { useState } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useTranslation } from 'react-i18next'
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
// import {DatePicker} from "@nextui-org/react";

const CustomDatePicker = ({ field, form, ...props }) => {
    const { i18n } = useTranslation()
    const { name } = field;
    const { setFieldValue } = form;
    const [value, setValue] = useState(new Date())

    const handleChange = (date) => {
        const gregorianDate = new DateObject(date).convert(gregorian, gregorian_en).format("M/D/YYYY HH:mm:ss A")
        setFieldValue(name, gregorianDate)
        setValue(date)
    }

    return (
        <DatePicker
            calendar={persian}
            locale={persian_fa}
            containerStyle={{ width: "100%", direction: i18n.language == "en" ? "ltr" : "ltr" }}
            value={value}
            format='YYYY/MM/DD'
            onChange={handleChange}
            {...props}
        />
    )
}

export default CustomDatePicker
