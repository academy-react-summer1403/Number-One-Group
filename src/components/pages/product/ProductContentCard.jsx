import { useQueryWithDependencies } from '../../../core/hooks/react-query'
import { GetProductCategory } from '../../../core/services/api/get-data'
import { Label } from '../../common'

const ProductContentCard = ({ title, category, exist }) => {
    // Get Category For Products
    const { data, isSuccess } = useQueryWithDependencies(
        "GET_PRODUCT_CATEGORY",
        GetProductCategory,
        category,
        category
    )

    return (
        <div className='w-full border-b border-gray-400/30 pb-4 flex flex-wrap gap-y-4'>
            <h1 className='text-DarkBlue text-xl'>{title}</h1>
            <div className='w-full flex justify-between'>
                <Label variant={'bgBlue'} text={isSuccess && data.categoryName} style='px-6 py-1' />
                <div className='flex gap-x-2 items-center h-full'>
                    <div className='mediumStyle_text flex gap-1'>
                        <span className='text-VioletBlue'>{exist}</span>
                        <span>موجود</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContentCard
