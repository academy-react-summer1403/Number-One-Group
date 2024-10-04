import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Button, FormHolder, FormInput } from "../../../common";
import ForgetPass from "../../../../core/services/api/post-data/ForgetPass";
import { emailValidation } from "../../../../core/validations/Auth.Validations";

const FirstStepPassword = ({ title, description, setUserEmail, userEmail }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const body = {
            email: event.email,
            baseUrl: "http://localhost:5173/authorize/forgetPassword"
        };
        ForgetPass(body, dispatch)
        setUserEmail(event.email)
    }

    return (
        <FormHolder
            initialValues={{ email: userEmail }}
            onSubmit={(event) => { handleSubmit(event) }}
            validations={emailValidation}
            style="w-full"
            additionParams={{ enableReinitialize: true }}
        >
            <h1 className='boldStyle_text w-full mb-5'>{title}</h1>
            <p className='mediumStyle_text mb-5'>{description}</p>
            <FormInput
                certificate="email"
                fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                placeholder={t("emailPlaceholder")}
                fullSize
                variants="simple"
                type="email"
                errorStyleComment="!bg-MainBg"
            />
            <Button vType="button" vStyle="yellow" text="ChangePasswordBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default FirstStepPassword
