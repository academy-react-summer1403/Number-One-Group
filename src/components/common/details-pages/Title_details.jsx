import { useTranslation } from "react-i18next"
import { DateIcon, StarIcon, TotalIcon } from "../../../core/icon";
import Label from "../Label";
import creatorImg from '../../../assets/images/creator.png'

export const boxTitle_variant = {
    "course-detail": 'w-full',
}

export const categoryItems_variant = {
    "course-detail": 'bgTextGray',
}
export const icon_variant = {
    "course-detail": <DateIcon width={18} fill={'gray'} />,
}

const Title_details = ({
    title,
    NumberStudents,
    creator,
    Score,
    category,
    differentDetail,
    variant,
}) => {
    const { t, i18n } = useTranslation();
    return (
        <div  className={`my-4 py-4  ${boxTitle_variant?.[variant]}`}>
            <div className=" flex max-sm:justify-between flex-wrap gap-2 items-center ">
                {/* Category Box */}
                <div className="flex gap-2 max-sm:mx-auto">
                    {category?.map((item, index) => (
                        <Label key={index} variant={categoryItems_variant?.[variant]} text={item} style=' py-1 px-8 text-sm hover:scale-110 duration-200 ' />
                    ))}
                </div>
                {/* Score Box */}
                <div className="flex gap-1 max-sm:mx-auto max-sm:mt-2">
                    <StarIcon />
                    <span className="mediumStyle_text text-sm ">({Score} {t('Reviews')})</span>
                </div>
            </div>
            <h1 className="my-4 max-sm:text-center max-sm:mx-auto text-DarkBlue boldStyle_text">{t(title)} </h1>
            {/* other details */}
            <div className="sm:flex items-center text-sm gap-3">
                {/* Creator detail */}
                <div className="flex items-center w-fit  max-sm:mx-auto">
                    <img src={creatorImg} className="h-11" />
                    <span className="mx-3 text-DarkBlue"><span className="mediumStyle_text">{t('By')}</span> {creator}</span>
                </div>
                <div className="flex w-fit gap-5 max-sm:mx-auto max-sm:mt-3">
                    <div className="flex items-center mediumStyle_text">
                        {icon_variant?.[variant]}
                        <span dir={i18n.language === 'fa' ? 'ltr' : 'rtl'} className="mx-1">{differentDetail}</span>
                    </div>
                    .
                    <div className="flex items-center mediumStyle_text">
                        <TotalIcon />
                        <span className="mx-1 mt-0.5">{NumberStudents} {t('student')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title_details