import { Skeleton } from "@nextui-org/react"
import { SeparationPrice, UnitPrice } from "../../../core/utility/SeparationPrice"

const ProductFooterCard = ({ discount, price, loading }) => {
    return (
        <Skeleton isLoaded={!loading} className="w-full">
            <div className='w-full flex justify-between mediumStyle_text'>
                <span className='line-through font-Pop_Med'>{SeparationPrice(discount)}</span>
                <div>
                    <span className='text-VioletBlue text-lg ml-1'>{UnitPrice(price)}</span>
                    <span>تومان</span>
                </div>
            </div>
        </Skeleton>
    )
}

export default ProductFooterCard
