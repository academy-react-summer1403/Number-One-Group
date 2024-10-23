import { useTranslation } from "react-i18next";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const Encouragement = ({ title, description, icon, arrow = true }) => {
    const { i18n } = useTranslation()
    return (
        <>
            <li className="sm:w-1/2 xl:w-1/4 h-fit py-4 px-8 flex justify-center flex-wrap gap-y-4">
                <div className="w-20 h-20">
                    <img className="w-full h-full" src={icon} alt="icon" />
                </div>
                <h1 className="w-full text-center text-white mobile:text-lg sm:text-xl">{title}</h1>
                <p className="mediumStyle_text w-full text-center mobile:text-sm text-neutral-400">{description}</p>
            </li>
            {arrow && <TfiArrowCircleLeft size={40} color="#fff" className={`my-auto ${i18n.language === 'en' ? 'rotate-180' : ''}`} />}
        </>
    )
}

export default Encouragement