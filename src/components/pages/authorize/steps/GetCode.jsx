import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { FormInput, FormHolder, Button } from "../../../common"
import { getCodeValidation } from "../../../../core/validations/Auth.Validations"
import { VerifyMessage } from "../../../../core/services/api/post-data";

const GetCode = ({ phone }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const handleClick = (event) => {
        const body = { phoneNumber: phone, verifyCode: event.verifyCode };
        const api = "/Sign/VerifyMessage";
        VerifyMessage(api, body, dispatch)
    }

    return (
        <FormHolder
            initialValues={{ verifyCode: "" }}
            onSubmit={(event) => { handleClick(event) }}
            validations={getCodeValidation}
            style="w-full"
            additionParams={{ enableReinitialize: true }}
        >
            <h1 className='boldStyle_text w-full mb-5'>{t("GetCodeCaption")}</h1>
            <p className='mediumStyle_text mb-5'>{t("GetCodeDesc1")} <span className="text-VioletBlue">{phone}</span> {t("GetCodeDesc2")}</p>
            <FormInput
                certificate="verifyCode"
                fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                placeholder={t("GetCodePlaceholder")}
                fullSize
                variants="simple"
                errorStyleComment="!bg-MainBg"
            />
            <Button vType="button" vStyle="yellow" text="GetCodeBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default GetCode
