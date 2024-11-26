import ProductHeaderCard from './ProductHeaderCard'
import ProductContentCard from './ProductContentCard'
import ProductFooterCard from './ProductFooterCard'
import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt';

const ProductCardWrapper = ({ item }) => {
    const {
        id,
        pictureList,
        categoryId,
        exist,
        title,
        discount,
        price,
        special
    } = item

    return (
        <Tilt transitionSpeed={2500}>
            <Link
                to={`/productDetails/${id}`}
                className='w-[300px] h-fit flex flex-wrap gap-y-4 p-5 border border-LightGrayish rounded-lg hover:shadow-lg duration-200 relative cursor-pointer'
            >
                <ProductHeaderCard image={pictureList?.[0]} special={special} />
                <ProductContentCard
                    category={categoryId}
                    exist={exist}
                    title={title}
                />
                <ProductFooterCard discount={discount} price={price} />
            </Link>
        </Tilt>
    )
}

export default ProductCardWrapper
