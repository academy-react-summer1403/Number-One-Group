import { useTranslation } from "react-i18next"
import { CustomButton, FormHolder, FormInput } from "../../common"
import { ContactValidation } from "../../../core/validations/Contact.Validations"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"

const ContactMain = () => {
    const { t } = useTranslation()
    const initialValues = { description: "" }
    const UserInfo = useSelector(state => state.UserInfo.info)

    const handleSubmit = (ev) => {
        if (!UserInfo) toast.error("لطفا برای دسترسی به امکانات سایت ابتدا وارد حساب کاربری خود شوید")
        console.log(ev)
    }

    return (
        <div className="w-full xl:w-4/6 xl:h-full flex items-center bg-LightLavender border-2 border-LightGrayish rounded-lg p-4 xl:p-8">
            <FormHolder
                initialValues={initialValues}
                onSubmit={(event) => { handleSubmit(event) }}
                style="w-full h-fit flex flex-wrap gap-y-4"
                validations={ContactValidation}
            >
                <h1 className="w-full boldStyle_text">{t("contactUsCaption")}</h1>
                <p className="w-full text-sm text-neutral-500">{t("contactUsDescription")}</p>
                <FormInput certificate="description" variants="area" fullSize fieldStyle="max-h-none min-h-[230px]" errorStyleComment="!bg-LightLavender" color={'bg-white'} />
                <CustomButton arrowColor="#000" vStyle="yellow" text="submit" vType="button" />
            </FormHolder>
        </div>
    )
}

export default ContactMain