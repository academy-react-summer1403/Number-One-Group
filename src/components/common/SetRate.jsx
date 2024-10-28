import { useDispatch, useSelector } from "react-redux"
import { Rating } from 'react-simple-star-rating'
import { toast } from "react-toastify"
import { setStatusModal } from "../../redux/slices/LoginPopup"

const SetRate = ({ action, Id, status, rateNumber }) => {
    const userInfo = useSelector(state => state.UserInfo.info)
    const dispatch = useDispatch()

    // Catch Rating value
    const handleRating = (rate) => {
        if (userInfo) {
            if (status) toast.error('نظر شما قبلا ثبت شد')
            else action(Id, rate)
        }
        else {
            toast.error("لطفاً برای دسترسی به امکانات سایت، ابتدا وارد حساب کاربری خود شوید.");
            dispatch(setStatusModal(true));
        }
    }
    return (
        <div>
            <Rating
                SVGstyle={{ display: "inline-flex" }}
                onClick={handleRating}
                initialValue={rateNumber}
            />
        </div >
    )
}

export default SetRate