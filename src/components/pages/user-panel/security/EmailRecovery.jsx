import { useTranslation } from "react-i18next"
import { FormHolder, FormInput } from "../../../common"

const EmailRecovery = () => {
    const { t } = useTranslation()

    return (
        <FormHolder
            initialValues={{ email: "" }}
            style="w-full flex justify-evenly my-6"
            onSubmit={(event) => { console.log(event) }}
            // validations={emailValidation}
        >
            <FormInput type="email" certificate="email" sectionName={t("newEmail")} dir="ltr" style="w-[300px]" variants="simple" />
        </FormHolder>
    )
}

export default EmailRecovery