import { Spinner, FavoriteBtn, CustomButton } from "../../common"
import { BasketIcon } from "../../../core/icon"
import KeyDetails from "./KeyDetails";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
// import { addToCartAction } from "../../../redux/slices/CartData";
import { useEffect, useState } from "react";
import { UnitPrice } from "../../../core/utility/SeparationPrice";
import { useQueryWithDependencies } from "../../../core/hooks/react-query";
import { GetProductCategory, GetProductShop } from "../../../core/services/api/get-data";

const Details = ({ item }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [productAmount, setProductAmount] = useState(1)

    // Get Product Category
    const { data: category } =
        useQueryWithDependencies("GET_PRODUCTS_CATEGORY", GetProductCategory, item.categoryId, item.categoryId)

    // Get Product Shop
    const { data: shop } =
        useQueryWithDependencies("GET_PRODUCTS_SHOP", GetProductShop, item.shopId, item.shopId)

    // Handle Add To Cart
    const handleAdd = (item) => {
        let obj = { ...item, amount: productAmount }
        // dispatch(addToCartAction(obj))
    }

    return (
        <div className="w-full xl:w-1/2 h-fit flex flex-wrap gap-y-3 text-center xl:text-start">
            <h1 className="w-full boldStyle_text">{item.title}</h1>
            <div className="w-full flex flex-wrap gap-y-2">
                <span className="w-full">
                    <span className="text-VioletBlue text-xl">{UnitPrice(item.price)}</span>
                    <span className="mediumStyle_text mx-2">{t("priceCount")}</span>
                </span>
                <span className="w-full line-through mediumStyle_text font-Pop_Med">% {item.discount}</span>
            </div>
            <p className="mediumStyle_text line-clamp-3">{item.miniDiscribe}</p>
            <div className="w-full flex gap-x-3 mt-5 justify-center xl:justify-start flex-wrap sm:flex-none gap-y-8">
                <div className="w-full sm:w-auto flex justify-center order-2 sm:order-none">
                    <Spinner height="50px" value={productAmount} setAmount={setProductAmount} />
                </div>
                <div className="w-full sm:w-auto flex justify-center order-3 sm:order-none">
                    <CustomButton isClick={() => { handleAdd(item) }} vStyle="purple" vType="button" text="AddToCart" Icon={BasketIcon} />
                </div>
                <FavoriteBtn variantStyle="other" />
            </div>
            <ul className="w-full flex flex-wrap gap-y-2 mt-10">
                <KeyDetails label={t("ShopDetailExist")} value={item.exist} dir="ltr" />
                <KeyDetails label={t("category")} value={category?.categoryName} />
                <KeyDetails label={t("ShopDetailShop")} value={shop?.name} />
            </ul>
        </div>
    )
}

export default Details
