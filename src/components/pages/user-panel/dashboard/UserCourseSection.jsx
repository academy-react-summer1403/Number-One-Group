import { Link } from 'react-router-dom'
import { ArrowIcon } from '../../../../core/icon'
import { useTranslation } from 'react-i18next'

const UserCourseSection = ({ sectionName, children, href, holderStyle }) => {
    const { t } = useTranslation()

    return (
        <div className={`w-full lg:w-[480px] flex flex-wrap justify-center ${holderStyle}`}>
            <h1 className='w-full text-xl text-center lg:text-start text-neutral-400'>{sectionName}</h1>
            <div className='w-full h-[180px] mt-6 flex justify-center lg:justify-start flex-wrap gap-4'>
                {children}
            </div>
            <Link to={href} className='text-neutral-400 text-sm flex items-center gap-x-4 mt-2'>
                <span>{t("viewAll")}</span>
                <ArrowIcon className={'rotate-90 mx-2'} fill={"#555555"} />
            </Link>
        </div>
    )
}

export default UserCourseSection
