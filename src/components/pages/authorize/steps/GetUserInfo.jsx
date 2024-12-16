import { useTranslation } from "react-i18next"
import { FormInput, FormHolder, CustomButton, Captcha } from "../../../common"
import { UserRegister } from "../../../../core/services/api/post-data"
import { useState } from "react"
import { useDisclosure } from "@nextui-org/react"

const GetUserInfo = ({ phone }) => {
    const { t, i18n } = useTranslation()
    const fields = [
        { id: 1, type: "email", certificate: "gmail", variant: "simple", placeholder: t("emailPlaceholder") },
        { id: 2, certificate: "password", variant: "password", placeholder: t("passwordPlaceholder"), eyeStyle: `bottom-9 ${i18n.language == "en" ? "" : "left-4 right-auto"}` },
    ]
    const [isCaptcha, setIsCaptcha] = useState(false)
    const { onOpen, isOpen, onClose } = useDisclosure();

    const handleSubmit = (event) => {
        if (isCaptcha) {
            const body = { password: event.password, gmail: event.gmail, phoneNumber: phone }
            const api = "/Sign/Register"
            UserRegister(api, body)
        } else {
            onOpen()
        }
    }

    return (
        <Fragment>
            <Captcha isOpen={isOpen} onClose={onClose} setCorrect={setIsCaptcha} />
            <FormHolder
                initialValues={{ gmail: "", password: "" }}
                onSubmit={(event) => { handleSubmit(event) }}
                validations=""
                style="w-full flex flex-wrap gap-y-5"
                additionParams={{ enableReinitialize: true }}
            >
                <h1 className='boldStyle_text w-full'>{t("GetUserInfoCaption")}</h1>
                <p className='mediumStyle_text'>{t("GetUserInfoDesc")}</p>
                {fields.map(item => (
                    <FormInput
                        key={item.id}
                        certificate={item.certificate}
                        placeholder={item.placeholder}
                        eyeStyle={item.eyeStyle}
                        fullSize
                        type={item.type}
                        fieldStyle="rounded-full py-2.5 h-auto"
                        variants={item.variant}
                        errorStyleComment="!bg-MainBg"
                    />)
                )}
                <CustomButton vType="button" vStyle="yellow" text="GetUserInfoBtn" style="w-full justify-center !py-2.5 h-auto" />
            </FormHolder>
        </Fragment>
    )
}

export default GetUserInfo
