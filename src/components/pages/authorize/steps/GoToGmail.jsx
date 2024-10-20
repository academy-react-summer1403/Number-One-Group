import { useTranslation } from "react-i18next"
import { CustomButton } from "../../../common"

const GoToGmail = ({ userEmail }) => {
    const { t } = useTranslation()
    return (
        <>
            <h1 className='boldStyle_text w-full mb-5'>{t("GoToEmailCaption")}</h1>
            <p className='mediumStyle_text mb-5'>
                {t("GoToEmailDesc1")}
                <span className="text-VioletBlue"> {userEmail} </span>
                {t("GoToEmailDesc2")}
            </p>
            <CustomButton vType="link" href={"https://mail.google.com/"} vStyle="yellow" text="GoToEmailBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </>
    )
}

export default GoToGmail
