import React from 'react'
import FormHolder from '../form/FormHolder'
import { loginValidation } from '../../../core/validations/Auth.Validations'
import { ExitAccount } from '../../pages/authorize'
import { UserLogin } from '../../../core/services/api/post-data'
import { useDispatch, useSelector } from 'react-redux'
import { setKeys } from '../../../redux/slices/LoginInfo'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FormInput from '../form/FormInput'
import CustomButton from '../Button'
import { setStatusModal } from '../../../redux/slices/LoginPopup'

const Login = ({ modalState }) => {
    const { t, i18n } = useTranslation()
    const initialValues = { phoneOrGmail: "", password: "", rememberMe: false }
    const fields = [
        { id: 1, type: "email", certificate: "phoneOrGmail", variant: "simple", placeholder: t("emailPlaceholder") },
        { id: 2, certificate: "password", variant: "password", placeholder: t("passwordPlaceholder"), eyeStyle: `bottom-4 ${i18n.language == "en" ? "" : "left-4 right-auto"}` },
    ]

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isModal = useSelector(state => state.LoginPopup.status)

    const handleUserLogin = (user) => {
        UserLogin(user, navigate, modalState, dispatch, isModal)
        dispatch(setKeys(user))
    }

    return (
        <FormHolder
            initialValues={initialValues}
            onSubmit={(event) => { handleUserLogin(event) }}
            validations={loginValidation}
            style="flex flex-wrap gap-y-5 mt-8 font-IranSans"
        >
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
                    errorStyleComment="!bg-transparent mb-2"
                />)
            )}
            <div className='w-full flex justify-between gap-x-2 text-nowrap text-DarkBlue'>
                <FormInput certificate="twoStep" variants="checkbox" placeholder={t("RememberMe")} />
                <Link onClick={() => { dispatch(setStatusModal(false)) }} to="/authorize/forgetPassword">{t("ForgetPassword")}</Link>
            </div>
            <CustomButton vType="button" vStyle="yellow" text={t("loginBtn")} style="w-full justify-center !py-2.5 h-auto mt-8" />
            <ExitAccount question="HaveAccount2" answer="signUp" />
        </FormHolder>
    )
}

export default Login
