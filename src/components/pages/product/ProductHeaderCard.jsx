import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/image-not-found.png"

const ProductHeaderCard = ({ image, special }) => {
    return (
        <div className='w-full relative rounded-md overflow-hidden'>
            <ImageFallBack
                src={image?.href}
                fallback={fallback}
                className='w-full h-64'
            />
            {
                special && <div className='absolute top-0 left-0 px-2 py-1 bg-VioletBlue text-white rounded-md'>فروش ویژه</div>
            }
        </div>
    )
}

export default ProductHeaderCard
