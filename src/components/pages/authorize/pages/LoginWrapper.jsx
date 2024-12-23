import { FormInput, FormHolder, CustomButton, Captcha } from '../../../common'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Vector from '../../../../assets/images/SignIn.svg'
import { loginValidation } from "../../../../core/validations/Auth.Validations"
import { UserLogin } from '../../../../core/services/api/post-data'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setKeys } from '../../../../redux/slices/LoginInfo'
import { useDisclosure } from '@nextui-org/react'

const LoginWrapper = () => {
    const context = useOutletContext()
    const { t, i18n } = useTranslation()
    const initialValues = { phoneOrGmail: "", password: "", rememberMe: false }
    const fields = [
        { id: 1, type: "email", certificate: "phoneOrGmail", variant: "simple", placeholder: t("emailPlaceholder") },
        { id: 2, certificate: "password", variant: "password", placeholder: t("passwordPlaceholder"), eyeStyle: `bottom-4 ${i18n.language == "en" ? "" : "left-4 right-auto"}` },
    ]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isCaptcha, setIsCaptcha] = useState(false)
    const { onOpen, isOpen, onClose } = useDisclosure();

    useEffect(() => { context.setVector(Vector) }, [])

    const handleUserLogin = (user) => {
        if (isCaptcha) {
            UserLogin(user, navigate)
            dispatch(setKeys(user))
        } else {
            onOpen()
        }
    }

    return (
        <>
            <Captcha isOpen={isOpen} onClose={onClose} setCorrect={setIsCaptcha} />
            <FormHolder
                initialValues={initialValues}
                onSubmit={(event) => { handleUserLogin(event) }}
                validations={loginValidation}
            >
                <div className='w-full h-fit flex flex-wrap gap-y-5'>
                    <h1 className='boldStyle_text w-full'>{t("LoginCaption")}</h1>
                    <p className='mediumStyle_text'>{t("LoginDesc")}</p>
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
                        />
                    )
                    )}
                    <div className='w-full flex justify-between gap-x-2 text-nowrap text-DarkBlue'>
                        <label htmlFor="rememberMe" className={`w-fit flex gap-x-2 items-center cursor-pointer`}>
                            <FormInput certificate="twoStep" variants="checkbox" placeholder={t("RememberMe")} />
                        </label>
                        <Link to="/authorize/forgetPassword">{t("ForgetPassword")}</Link>
                    </div>
                    <CustomButton vType="button" vStyle="yellow" text={t("loginBtn")} style="w-full justify-center !py-2.5 h-auto" />
                    <div className='w-full flex gap-x-2 justify-center'>
                        <span className='text-DarkBlue'>{t("HaveAccount2")}</span>
                        <Link to="/authorize/register" className='text-[#5751E1] underline'>{t("signUp")}</Link>
                    </div>
                </div>
            </FormHolder></>
    )
}

export default LoginWrapper
