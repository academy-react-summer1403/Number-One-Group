import { Skeleton } from '@nextui-org/react'
import { useQueryWithDependencies } from '../../../core/hooks/react-query'
import { GetProductCategory } from '../../../core/services/api/get-data'
import { Label } from '../../common'

const ProductContentCard = ({ title, category, exist, loading }) => {
    // Get Category For Products
    const { data, isSuccess } = useQueryWithDependencies(
        "GET_PRODUCT_CATEGORY",
        GetProductCategory,
        category,
        category
    )

    return (
        <div className='w-full border-b border-gray-400/30 pb-4 flex flex-wrap gap-y-4'>
            <Skeleton isLoaded={!loading} className='w-full'>
                <h1 className='w-full text-DarkBlue text-xl'>{title}</h1>
                <div className='w-full flex justify-between'>
                    <Label variant={'bgBlue'} text={isSuccess && data.categoryName} style='px-6 py-1' />
                    <div className='flex gap-x-2 items-center h-full'>
                        <div className='mediumStyle_text flex gap-1'>
                            <span className='text-VioletBlue'>{exist}</span>
                            <span>موجود</span>
                        </div>
                    </div>
                </div>
            </Skeleton>
        </div>
    )
}

export default ProductContentCard
