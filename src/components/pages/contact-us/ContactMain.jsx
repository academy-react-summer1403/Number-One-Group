import { useTranslation } from "react-i18next"
import { CustomButton, FormHolder, FormInput } from "../../common"
import { ContactValidation } from "../../../core/validations/Contact.Validations"

const ContactMain = () => {
    const { t, i18n } = useTranslation()
    const fields = [
        { id: 1, certificate: "name", variants: "simple", placeholder: ["نام *", "Name *"] },
        { id: 2, certificate: "email", variants: "simple", type: "email", placeholder: ["پست الکترونیک *", "E-mail *"] },
        { id: 3, certificate: "webSite", variants: "simple", placeholder: ["سایت اینترنتی *", "Website *"] },
    ]

    const initialValues = { description: "", name: "", email: "", webSite: "" }

    return (
        <div className="w-full xl:w-4/6 xl:h-full flex items-center bg-LightLavender border-2 border-LightGrayish rounded-lg p-4 xl:p-8">
            <FormHolder
                initialValues={initialValues}
                onSubmit={(event) => { console.log(event) }}
                style="w-full h-fit flex flex-wrap gap-y-4"
                validations={ContactValidation}
            >
                <h1 className="w-full boldStyle_text">{t("contactUsCaption")}</h1>
                <p className="w-full text-sm text-neutral-500">{t("contactUsDescription")}</p>
                <FormInput certificate="description" variants="area" fullSize fieldStyle="max-h-none min-h-[230px]" errorStyleComment="!bg-LightLavender"  color={'bg-white'} />
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-4">
                    {fields.map(item => (
                        <FormInput
                            certificate={item.certificate}
                            variants={item.variants}
                            type={item.type}
                            placeholder={i18n.language == "en" ? item.placeholder[1] : item.placeholder[0]}
                            key={item.id}
                            fieldStyle="h-[50px]"
                            errorStyleComment="!bg-LightLavender"
                            color={'bg-white'}
                        />
                    ))}
                </div>
                <CustomButton arrowColor="#000" vStyle="yellow" text="submit" vType="button" />
            </FormHolder>
        </div>
    )
}

export default ContactMain