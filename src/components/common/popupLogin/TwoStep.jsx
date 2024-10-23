import { useDispatch, useSelector } from 'react-redux'
import { LoginTwoStep } from '../../../core/services/api/post-data'
import { getCodeValidation } from '../../../core/validations/Auth.Validations'
import CustomButton from '../Button'
import FormHolder from '../form/FormHolder'
import FormInput from '../form/FormInput'
import { useTranslation } from 'react-i18next'

const TwoStep = () => {
    const { t } = useTranslation()
    const loginInfo = useSelector(state => state.LoginInfo.keys)
    const dispatch = useDispatch()

    const handleClick = (event) => LoginTwoStep(event.verifyCode, loginInfo, dispatch)

    return (
        <FormHolder
            initialValues={{ verifyCode: "" }}
            onSubmit={(event) => { handleClick(event) }}
            validations={getCodeValidation}
            style="w-full"
            additionParams={{ enableReinitialize: true }}
        >
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

export default TwoStep
