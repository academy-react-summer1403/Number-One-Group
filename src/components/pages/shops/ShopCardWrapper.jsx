import { Link } from "react-router-dom"
import ShopHeaderCard from "./ShopHeaderCard"
import ShopContentCard from "./ShopContentCard"
import ShopFooterCard from "./ShopFooterCard"

const ShopCardWrapper = ({ item ,loading}) => {

    const {
        id,
        img,
        offer,
        name,
        aboutUs,
        categoryId,
        rate,
        startTime,
        endTime
    } = item

    return (
        <Link
            to={"/shopDetails/" + id}
            className='w-[300px] h-fit flex flex-wrap gap-y-4 p-5 border border-LightGrayish rounded-lg hover:shadow-lg duration-200 relative cursor-pointer'
        >
            <ShopHeaderCard loading={loading} image={img} offer={offer} />
            <ShopContentCard loading={loading} name={name}  aboutUs={aboutUs} categoryId={categoryId} rate={rate}/>
            <ShopFooterCard loading={loading} startTime={startTime} endTime={endTime}/>
        </Link>
    )
}

export default ShopCardWrapper