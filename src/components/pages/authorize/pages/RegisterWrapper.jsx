import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import Vector from "../../../../assets/images/SignIn.svg"
import { GetCode, GetPhoneNumber, GetUserInfo } from '../steps'
import Stepper from '../Stepper'
import { useOutletContext } from 'react-router-dom'
import { VerifyMessage } from '../../../../core/services/api/post-data'
import { useDispatch } from 'react-redux'

const RegisterWrapper = () => {
    const context = useOutletContext()
    const [phone, setPhone] = useState("")
    const { t, i18n } = useTranslation()
    const stepsFa = ["شماره تماس", "دریافت کد", "مشخصات کاربری"]
    const stepsEn = ["Phone", "Code", "Information"]
    const dispatch = useDispatch()

    const handleClick = (event) => {
        const body = { phoneNumber: phone, verifyCode: event.verifyCode };
        const api = "/Sign/VerifyMessage";
        VerifyMessage(api, body, dispatch)
    }

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return (
                    <GetPhoneNumber
                        setPhone={setPhone}
                        phone={phone}
                        title={t("SignUpCaption")}
                        description={t("SignUpDesc")}
                    />
                )
            case 2:
                return <GetCode phone={phone} handleClick={handleClick} />
            case 3:
                return <GetUserInfo phone={phone} />
        }
    }

    useEffect(() => { context.setVector(Vector) }, [])

    return (
        <Stepper
            steps={i18n.language == "en" ? stepsEn : stepsFa}
            contents={displayStep}
        />
    )
}

export default RegisterWrapper
