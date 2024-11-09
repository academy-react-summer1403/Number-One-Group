import { useTranslation } from "react-i18next"
import { SecurityIcon } from "../../core/icon"
import { TitleSection } from "../../components/pages/user-panel"
import { Outlet } from "react-router-dom"


const Payment = () => {
    const { t } = useTranslation()

    return (
        <div className='w-[90%] h-[600px] border-t border-LightGrayish flex relative justify-center mt-8'>
            <TitleSection Icon={SecurityIcon} name={t("paymentTitle")} />
            <div className="w-full h-fit flex max-lg:flex-wrap justify-center p-10 payment_shadow mt-16">
                <Outlet />
            </div>
        </div>
    )
}

export default Payment
