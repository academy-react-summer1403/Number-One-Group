import { useState } from "react"
import { ErrorMessage, Field } from "formik"
import { UnEyeIcon, EyeIcon } from "../../../core/icon"
import "./FormDate.css"
import { useTranslation } from "react-i18next"
import { Input, Textarea } from "@nextui-org/react";
import CustomDatePicker from "../../../core/utility/moment/CustomDatePicker"
import ChangeGender from "../../pages/user-panel/edit-information/ChangeGender"

const FormInput = ({ sectionName, certificate, fullSize, dir, style, variants, fieldStyle, eyeStyle, placeholder }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation()

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
            <Field name={certificate}>
                {({ field }) => (
                    <Input
                        {...field}
                        placeholder={placeholder}
                        label={t(sectionName)}
                        classNames={{ input: "!text-[#5751E1]" }}
                    />
                )}
            </Field>
        ),
        select: (
            <Field name={certificate} id={certificate} component={ChangeGender} />
        ),
        area: (
            <Field name={certificate} >
                {({ field }) => (
                    <Textarea {...field} label={t(sectionName)} classNames={{ input: "resize-y min-h-[80px] max-h-48 !text-[#5751E1]" }} />
                )}
            </Field>
        ),
        date: (
            <Field name={certificate} id={certificate} component={CustomDatePicker} />
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
