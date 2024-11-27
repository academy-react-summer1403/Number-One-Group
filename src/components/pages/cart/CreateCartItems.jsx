import { TrashCan } from "../../../core/icon"
import { ImageFallBack, Spinner } from "../../common"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeFromCartAction, changeAmountItemAction } from "../../../redux/slices/CartData"
import { useEffect, useState } from "react"
import { SeparationPrice } from "../../../core/utility/SeparationPrice";
import fallback from "../../../assets/images/image-not-found.png"

const CreateCartItems = ({ title, description, price, amount, picture, id }) => {
    const [productAmount, setProductAmount] = useState(amount)
    const [totalPrice, setTotalPrice] = useState(price)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeFromCartAction(id))
    }

    useEffect(() => {
        dispatch(changeAmountItemAction({ id, productAmount, price }))
        setTotalPrice(price * productAmount)
    }, [productAmount])

    return (
        <div className='w-full h-fit xl:h-28 flex flex-wrap justify-between items-center border-2 border-LightGrayish rounded-xl p-4 gap-y-4'>
            <Link to={`/shopDetails/${id}`} className="w-full xl:w-80 h-full flex gap-3 over">
                <ImageFallBack 
                    className='xl:h-full min-w-32 w-32 h-32 rounded-lg'
                    src={picture}
                    fallback={fallback}
                />
                <div className='flex flex-wrap'>
                    <h1 className='w-full text-DarkBlue text-lg h-fit line-clamp-1'>{title}</h1>
                    <p className='line-clamp-2 mediumStyle_text text-sm h-[44px]'>{description}</p>
                </div>
            </Link>
            <div className='w-full xl:w-fit h-fit flex justify-end gap-x-4 border-t xl:border-none pt-2 xl:pt-0'>
                <div className='flex gap-x-2 items-center mediumStyle_text'>
                    <span className='text-VioletBlue text-xl'>{SeparationPrice(totalPrice)}</span>
                    <span>تومان</span>
                </div>
                <Spinner
                    height="40px"
                    value={productAmount}
                    setAmount={setProductAmount}
                    setTotalPrice={setTotalPrice}
                    price={price}
                />
                <button onClick={() => { handleDelete(id) }}>
                    <TrashCan width="25px" height="25px" stroke="#5751E1" />
                </button>
            </div>
        </div>
    )
}

export default CreateCartItems
