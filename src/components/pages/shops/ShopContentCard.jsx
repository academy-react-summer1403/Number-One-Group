import { useQueryWithDependencies } from '../../../core/hooks/react-query';
import { StarIcon } from '../../../core/icon'
import { GetShopCategory } from '../../../core/services/api/get-data';
import { Label } from '../../common'

const ShopContentCard = ({
    name,
    aboutUs,
    categoryId,
    rate
}) => {
    // Get Category For Shop
    const { data, isSuccess } = useQueryWithDependencies(
        "GET_SHOP_CATEGORY",
        GetShopCategory,
        categoryId,
        categoryId
    );
    return (
        <div className='w-full border-b border-gray-400/30 pb-4 flex flex-wrap gap-y-3'>
            <h1 className='text-DarkBlue text-xl'>{name}</h1>
            <h2 className='text-gray-400 line-clamp-2'>{aboutUs}</h2>
            <div className='w-full flex justify-between'>
                <Label variant={'bgBlue'} text={data?.categoryName} style='px-6 py-1' />
                <div className='flex gap-x-2 items-center h-full'>
                    <div className='mediumStyle_text flex gap-1  items-center'>
                        <span>{rate}</span>
                        <StarIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopContentCard
