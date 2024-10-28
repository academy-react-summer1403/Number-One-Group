import { useState } from "react"
import { ErrorMessage, Field } from "formik"
import { UnEyeIcon, EyeIcon } from "../../../core/icon"
import "./FormDate.css"
import { useTranslation } from "react-i18next"
import { Checkbox, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import CustomDatePicker from "../../../core/utility/moment/CustomDatePicker"

const FormInput = ({ sectionName, certificate, options, fullSize, dir, style, variants, fieldStyle, eyeStyle, placeholder }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedOption, SetSelectedOption] = useState(null);
    const handleChange = (selected) => {
        console.log(selected)
        var findKey = options.find(obj => obj.id == selected)
        SetSelectedOption(findKey)
    }
    const { t, i18n } = useTranslation()
    const fieldVariants = {
        password: (
            <div className="w-full relative">
                <Field dir={dir} type={isVisible ? "text" : "password"} placeholder={placeholder} name={certificate} id={certificate} className={`fieldsStyle ${fieldStyle}`} />
                <div onClick={() => { setIsVisible(!isVisible) }} className={`w-6 h-4 cursor-pointer absolute bottom-3 right-4 ${eyeStyle}`}>
                    {isVisible ? <EyeIcon /> : <UnEyeIcon width="20" />}
                </div>
            </div>
            // <Field>
            //     {({ field }) => (
            //         <Input
            //             {...field}
            //             // variant="bordered"
            //             placeholder="Enter your password"
            //             endContent={
            //                 <button className="focus:outline-none" type="button" onClick={setIsVisible(!isVisible)}>
            //                     {isVisible ? (
            //                         <EyeIcon />
            //                     ) : (
            //                         <UnEyeIcon width={'20'} />
            //                     )}
            //                 </button>
            //             }
            //             type={isVisible ? "text" : "password"}
            //             className="max-w-xs"
            //         />
            //     )}
            // </Field>
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
