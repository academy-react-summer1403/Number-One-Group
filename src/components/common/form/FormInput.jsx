import { useState } from "react"
import { ErrorMessage, Field } from "formik"
import { UnEyeIcon, EyeIcon } from "../../../core/icon"
import "./FormDate.css"
import { useTranslation } from "react-i18next"
import CustomDatePicker from "../../../core/utility/moment/CustomDatePicker"

const FormInput = ({ sectionName, certificate, type, options, fullSize, dir, style, variants, fieldStyle, eyeStyle, placeholder, errorStyleComment }) => {
    const [visible, setVisible] = useState(false)
    const { t, i18n } = useTranslation()
    const fieldVariants = {
        password: (
            <div className="w-full relative">
                <Field dir={dir} type={visible ? "text" : "password"} placeholder={placeholder} name={certificate} id={certificate} className={`fieldsStyle ${fieldStyle}`} />
                <div onClick={() => { setVisible(!visible) }} className={`w-6 h-4 cursor-pointer absolute bottom-3 right-4 ${eyeStyle}`}>
                    {visible ? <EyeIcon /> : <UnEyeIcon width="20" />}
                </div>
            </div>
        ),
        simple: (
            <Field dir={dir} placeholder={t(placeholder)} type={type} name={certificate} id={certificate} className={`fieldsStyle ${fieldStyle}`} />
        ),
        select: (
            <Field as="select" name={certificate} id={certificate} className="fieldsStyle w-full min-h-10 max-h-40">
                {options != undefined ? i18n.language == "en" ? options[1].map((item, index) => (<option key={index} value={item}>{item}</option>)) : options[0].map((item, index) => (<option key={index} value={item}>{item}</option>)) : null}
            </Field>
        ),
        area: (
            <Field as="textarea" placeholder={t(placeholder)} name={certificate} id={certificate} className={`fieldsStyle w-full min-h-10 max-h-64 h-36 ${fieldStyle}`} />
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
