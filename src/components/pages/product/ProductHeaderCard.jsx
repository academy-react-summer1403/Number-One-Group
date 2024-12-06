import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/products.png"
import { Skeleton } from "@nextui-org/react"

const ProductHeaderCard = ({ image, special, loading }) => {
    return (
        <div className='w-full relative rounded-md overflow-hidden'>
            <Skeleton isLoaded={!loading}>
                <ImageFallBack
                    src={image?.href}
                    fallback={fallback}
                    className='w-full h-64'
                />
            </Skeleton>
            {
                special && <div className='absolute top-0 left-0 px-2 py-1 bg-VioletBlue text-white rounded-md'>فروش ویژه</div>
            }
        </div>
    )
}

export default ProductHeaderCard
