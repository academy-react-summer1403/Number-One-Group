import { useTranslation } from 'react-i18next'
import { CustomButton } from '../../common'

const ContactToTeacher = () => {
    const { t } = useTranslation()

    return (
        <div className='w-full xl:w-1/4 h-fit order-2 mt-32 md:mt-12 xl: xl:mt-0 xl:order-none flex flex-wrap gap-y-3 py-8 px-6 rounded-xl border border-neutral-300 shadow-lg'>
            <h1 className='boldStyle_text text-xl w-full'>{t("sideBarTitle")}</h1>
            <p className='mediumStyle_text text-sm w-full'>{t("sideBarDesc")}</p>
            <CustomButton arrowColor="#fff" text={t("sideBarBtn")} vStyle="purple" vType="button" style="xl:w-full justify-center" />
        </div>
    )
}

export default ContactToTeacher
