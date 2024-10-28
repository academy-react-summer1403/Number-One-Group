import { useState } from "react"
import { ErrorMessage, Field } from "formik"
import { UnEyeIcon, EyeIcon } from "../../../core/icon"
import "./FormDate.css"
import { useTranslation } from "react-i18next"
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import CustomDatePicker from "../../../core/utility/moment/CustomDatePicker"
import PasswordInput from "../../pages/user-panel/edit-information/PasswordInput"

const FormInput = ({ sectionName, certificate, options, fullSize, dir, style, variants, fieldStyle, eyeStyle, placeholder }) => {
    const [selectedOption, SetSelectedOption] = useState(null);
    const handleChange = (selected) => {
        console.log(selected)
        var findKey = options.find(obj => obj.id == selected)
        SetSelectedOption(findKey)
    }
    // console.log(isVisible)
    const { t, i18n } = useTranslation()
    const fieldVariants = {
        password: (
            <Field
                name={certificate}
                placeholder={placeholder}
                id={certificate}
                component={PasswordInput}
            />
        ),
        simple: (
            <Field name={certificate}>{({ field }) => (<Input {...field} placeholder={placeholder} />)}</Field>
        ),
        select: (
            // <Field as="select" name={certificate} id={certificate} className="fieldsStyle w-full min-h-10 max-h-40">
            //     {options != undefined ? i18n.language == "en" ? options[1].map((item, index) => (<option key={index} value={item}>{item}</option>)) : options[0].map((item, index) => (<option key={index} value={item}>{item}</option>)) : null}
            // </Field>
            <Field name={certificate}>
                {({ field }) => (
                    <Select {...field} radius='md' aria-label="select" items={i18n.language == "en" ? options[1] : options[0]}
                        placeholder={'انتخاب...'} className="mx-auto w-full min-h-10 max-h-40" value={field.value}
                        onChange={(e) => { handleChange(e) }}
                        classNames={{ listboxWrapper: `font-IranSans ${i18n.language != "en" && "select_dir"}` }}
                    >
                        {(selectedOption) => <SelectItem>{selectedOption.value}</SelectItem>}
                    </Select>
                )}
            </Field>
        ),
        area: (
            <Field name={certificate} >
                {({ field }) => (
                    <Textarea {...field} classNames={{ input: "resize-y min-h-[80px] max-h-48" }} />
                )}
            </Field>
        ),
        date: (
            <Field
                name={certificate}
                id={certificate}
                component={CustomDatePicker}
            />
        ),
        checkbox: (
            <label htmlFor={certificate} className={`w-fit flex gap-x-2 items-center cursor-pointer ${fieldStyle}`}>
                <Field type="checkbox" name={certificate} id={certificate} />
                {/* <Field name={certificate} id={certificate}>
                    {({ field }) => (
                        <Checkbox {...field} />
                    )}
                </Field> */}
                {placeholder}
            </label>
        )
    }
    return (
        <div className={`flex flex-wrap h-fit ${fullSize ? "w-full" : style ? style : "w-full sm:w-[45%]"}`}>
            <label htmlFor={certificate} className="text-base text-neutral-400">{t(sectionName)}</label>
            {fieldVariants?.[variants]}
            <span className={`w-full relative text-sm text-red-600 mt-1`}>
                <ErrorMessage name={certificate} />
            </span>
            <div className="!bg-black text-nowrap flex items-end gap-x-2 justify-between ">
            </div>
        </div>
    )
}

export default FormInput
