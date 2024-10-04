import { useTranslation } from 'react-i18next'
import SocialNetworks from './SocialNetworks'

const LinkSections = ({ title, links, showSocialNetworks }) => {
    const { t } = useTranslation()
    return (
        <div className="h-fit lg:w-[30%] md:w-[48%] sm:w-[32%] w-52">
            <h1 className="text-white sm:text-xl text-lg" >{t(title)}</h1>
            <div className="border-b-4 border-VioletBlue my-3 w-[12%] rounded-xl"></div>
            {links.map((item, index) => (
                <h1 key={index} className="w-fit text-neutral-400 max-sm:text-[14px] leading-8 duration-100">
                    <span className="hover:text-white cursor-pointer">{t(item)}</span>
                </h1>
            ))}
            <SocialNetworks show={showSocialNetworks} />
        </div>
    )
}

export default LinkSections
