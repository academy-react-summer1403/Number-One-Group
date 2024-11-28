import { Skeleton } from '@nextui-org/react';
import { useQueryWithDependencies } from '../../../core/hooks/react-query';
import { StarIcon } from '../../../core/icon'
import { GetShopCategory } from '../../../core/services/api/get-data';
import { HandleIdentityEditorJs, Label } from '../../common'

const ShopContentCard = ({
    name,
    aboutUs,
    categoryId,
    rate,
    loading
}) => {
    // Get Category For Shop
    const { data, isSuccess } = useQueryWithDependencies(
        "GET_SHOP_CATEGORY",
        GetShopCategory,
        categoryId,
        categoryId
    );
    return (
        <div className='w-full border-b border-gray-400/30 pb-4 flex flex-col gap-y-3'>
            <Skeleton isLoaded={!loading} className="rounded-xl">
                <h1 className='text-DarkBlue text-xl'>{name}</h1>
            </Skeleton>
            <Skeleton isLoaded={!loading} className="rounded-xl">
                <div className='text-gray-400 line-clamp-2 h-14'> <HandleIdentityEditorJs desc={aboutUs} /></div>
            </Skeleton>
            <div className='w-full flex justify-between'>
                <Skeleton isLoaded={!loading} className="rounded-xl">
                    <Label variant={'bgBlue'} text={data?.categoryName} style='px-6 py-1' />
                </Skeleton>
                <div className='flex gap-x-2 items-center h-full'>
                    <Skeleton isLoaded={!loading} className="rounded-xl">
                        <div className='mediumStyle_text flex gap-1  items-center'>
                            <span>{rate}</span>
                            <StarIcon />
                        </div>
                    </Skeleton>
                </div>
            </div>
        </div>
    )
}

export default ShopContentCard
