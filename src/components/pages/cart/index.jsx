import CreateCartItems from "./CreateCartItems"
import { useSelector, useDispatch } from "react-redux"
import { clearCartAction, handleQueryAction } from "../../../redux/slices/CartData"
import { CustomButton, DetailsBox, FilterSearch, PaginatedItems, PaginateHolderItems, SectionTop } from "../../common"
import { useEffect, useState } from "react"
import { LevelIcon, TrashCan, } from "../../../core/icon"
import { setItem } from "../../../core/hooks/local-storage"
import MediaQuery, { useMediaQuery } from "react-responsive"
import { BreadCrumb, TitleSection } from "../../partials/title-section"
import configVariants from "../../../config/page-transition"
import { motion } from "framer-motion";

const CartWrapper = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 430px)' })

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.CartData.value)

    // get total sum and item
    const [totalItems, setTotalItems] = useState(0)
    const [totalSum, setTotalSum] = useState(0)

    // Pagination
    const currentCart = 6;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + currentCart;

    useEffect(() => {
        totalNumberOfItems(cartItems)
        if (cartItems.length > 0) {
            setItem("cartItems", cartItems)
        }
    }, [cartItems])

    const totalNumberOfItems = (list) => {
        let totalAmount = 0
        let totalPrice = 0
        list.forEach(value => {
            totalAmount = totalAmount + value.amount
            totalPrice = totalPrice + (value.price * value.amount)
        });
        setTotalSum(totalPrice)
        setTotalItems(totalAmount)
    }

    const detailsCart = [{ titleDetail: "numberOfItemsInCart", countDetail: totalItems, iconDetail: LevelIcon }]

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={"cartTitle"}>
                <BreadCrumb type="Div" text={'cartTitle'} />
            </TitleSection>
            <div className="main-container flex gap-7 relative">
                <MediaQuery minWidth="750px">
                    <div className="w-72 h-fit">
                        <DetailsBox
                            variant="cart"
                            price={totalSum}
                            Detail={detailsCart}
                            arrowColor={"#fff"}
                            colorButton={"purple"}
                            btnText={"cartButton"}
                            shareBox={false}
                        />
                    </div>
                </MediaQuery>
                <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                    <SectionTop
                        lengthAllData={cartItems.length}
                        lengthFilteredData={cartItems.length}
                    >
                        <div className="flex gap-x-4 h-fit justify-between sm:justify-start items-center w-full sm:w-auto">
                            <CustomButton isClick={() => { dispatch(clearCartAction()) }} vType="button" vStyle="purple" text={!isMobile ? "clearBtn" : ""} Icon={TrashCan} style="order-2" />
                        </div>
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems currentData={cartItems.length} currentDataInOnePage={currentCart} setState={setItemOffset}>
                            <div className="flex flex-wrap relative gap-x-1 justify-center gap-y-5 w-full m-auto my-2">
                                {cartItems.length > 0 ? cartItems?.slice(itemOffset, endOffset)?.map(item => (
                                    <CreateCartItems
                                        key={item.id}
                                        amount={item.amount}
                                        description={item.miniDiscribe}
                                        picture={item.pictureList?.[0]}
                                        price={item.price}
                                        title={item.title}
                                        id={item.id}
                                    />
                                )) : <h1 className="text-gray-600 text-xl mt-40">سبد خرید خالی است</h1>}
                            </div>
                        </PaginatedItems>
                    </PaginateHolderItems>
                    <MediaQuery maxWidth="749px">
                        <div className="mt-4">
                            <DetailsBox
                                variant="cart"
                                price={totalSum}
                                Detail={detailsCart}
                                arrowColor={"#fff"}
                                colorButton={"purple"}
                                btnText={"cartButton"}
                                shareBox={false}
                            />
                        </div>
                    </MediaQuery>
                </div>
            </div>
        </motion.div>
    )
}

export default CartWrapper
