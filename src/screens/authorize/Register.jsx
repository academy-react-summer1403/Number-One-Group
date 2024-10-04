import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import Vector from "../../assets/images/SignIn.svg"
import { Stepper, GetCode, GetPhoneNumber, GetUserInfo } from '../../components/pages/authorize'
import { useOutletContext } from 'react-router-dom'

const Register = () => {
    const context = useOutletContext()
    const [phone, setPhone] = useState("")
    const { t, i18n } = useTranslation()
    const stepsFa = ["شماره تماس", "دریافت کد", "مشخصات کاربری"]
    const stepsEn = ["Phone", "Code", "Information"]
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
                return <GetCode phone={phone} />
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

export default Register
