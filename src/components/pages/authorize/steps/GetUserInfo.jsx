import { useTranslation } from "react-i18next"
import { FormInput, FormHolder, CustomButton } from "../../../common"
import { UserRegister } from "../../../../core/services/api/post-data"

const GetUserInfo = ({ phone }) => {
    const { t, i18n } = useTranslation()
    const fields = [
        { id: 1, type: "email", certificate: "gmail", variant: "simple", placeholder: t("emailPlaceholder") },
        { id: 2, certificate: "password", variant: "password", placeholder: t("passwordPlaceholder"), eyeStyle: `bottom-9 ${i18n.language == "en" ? "" : "left-4 right-auto"}` },
    ]

    const handleSubmit = (event) => {
        console.log(event)
        const body = { password: event.password, gmail: event.gmail, phoneNumber: phone }
        const api = "/Sign/Register"
        UserRegister(api, body)
    }

    return (
        <FormHolder
            initialValues={{ gmail: "", password: "" }}
            onSubmit={(event) => { handleSubmit(event) }}
            validations=""
            style="w-full"
            additionParams={{ enableReinitialize: true }}
        >
            <h1 className='boldStyle_text w-full mb-5'>{t("GetUserInfoCaption")}</h1>
            <p className='mediumStyle_text mb-5'>{t("GetUserInfoDesc")}</p>
            {fields.map(item => (
                <FormInput
                    key={item.id}
                    certificate={item.certificate}
                    placeholder={item.placeholder}
                    eyeStyle={item.eyeStyle}
                    fullSize
                    type={item.type}
                    fieldStyle="rounded-full py-2.5 h-auto mb-5"
                    variants={item.variant}
                    errorStyleComment="!bg-MainBg"
                />)
            )}
            <CustomButton vType="button" vStyle="yellow" text="GetUserInfoBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default GetUserInfo
