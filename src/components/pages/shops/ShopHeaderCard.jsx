import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/shops.png"
import { useTranslation } from "react-i18next"
import { Skeleton } from "@nextui-org/react"

const ShopHeaderCard = ({ loading, image, offer }) => {
    const { i18n } = useTranslation()
    return (
        <div className='w-full relative rounded-md overflow-hidden'>
            <Skeleton isLoaded={!loading} className="rounded-xl">
                <ImageFallBack
                    src={image?.href}
                    fallback={fallback}
                    className='w-full h-52'
                />
            </Skeleton>
            {
                offer && <div className='absolute top-0 left-0 px-2 py-1 bg-VioletBlue text-white rounded-md'>
                    {i18n.language === 'fa' ? <p> حراج شگفت انکیز!</p> : <p>Amazing auction!</p>}
                </div>
            }
        </div>
    )
}

export default ShopHeaderCard
