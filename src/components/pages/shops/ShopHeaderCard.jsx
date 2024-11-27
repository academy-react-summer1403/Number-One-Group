import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/image-not-found.png"
import { useTranslation } from "react-i18next"

const ShopHeaderCard = ({ image, offer }) => {
    const { i18n } = useTranslation()
    return (
        <div className='w-full relative rounded-md overflow-hidden'>
            <ImageFallBack
                src={image?.href}
                fallback={fallback}
                className='w-full h-52'
            />
            {
                offer && <div className='absolute top-0 left-0 px-2 py-1 bg-VioletBlue text-white rounded-md'>
                    {i18n.language === 'fa' ? <p> حراج شگفت انکیز!</p> : <p>Amazing auction!</p>}
                </div>
            }
        </div>
    )
}

export default ShopHeaderCard