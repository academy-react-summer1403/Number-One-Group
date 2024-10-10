import { useTranslation } from "react-i18next"
import { FormInput, FormHolder, Button } from "../../../common"
import * as yup from "yup"
import { ResetPassword } from "../../../../core/services/api/post-data"

const SetNewPassword = ({ userId }) => {
    const { t, i18n } = useTranslation()
    const setNewPasswordValidation = yup.object().shape({
        password: yup.string().required("این فیلد الزامیست!")
    });

    const handleSubmit = async (event) => {
        const body = {
            userId: userId,
            newPassword: event.password,
            resetValue: event.resetValue
        }
        ResetPassword(body)
    }

    return (
        <FormHolder
            initialValues={{ password: "", }}
            onSubmit={(event) => { handleSubmit(event) }}
            validations={setNewPasswordValidation}
            style="w-full"
            additionParams={{ enableReinitialize: true }}
        >
            <h1 className='boldStyle_text w-full mb-5'>{t("SetNewPasswordCaption")}</h1>
            <p className='mediumStyle_text mb-5'>{t("SetNewPasswordDesc")}</p>
            <FormInput
                certificate="password"
                fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                placeholder={t("SetNewPasswordPlaceholder")}
                fullSize
                variants="password"
                eyeStyle={`bottom-9 ${i18n.language == "en" ? "" : "left-4 right-auto"}`}
                errorStyleComment="!bg-MainBg"
            />
            <Button vType="button" vStyle="yellow" text="SetNewPasswordBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default SetNewPassword
