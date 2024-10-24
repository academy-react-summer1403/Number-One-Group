import { useTranslation } from "react-i18next";
import { FormInput, FormHolder, CustomButton } from "../../../common"
import { getCodeValidation } from "../../../../core/validations/Auth.Validations"

const GetCode = ({ phone, handleClick }) => {
    const { t } = useTranslation()

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
            <CustomButton vType="button" vStyle="yellow" text="GetCodeBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default GetCode
