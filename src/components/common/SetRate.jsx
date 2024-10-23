import { useState } from "react"
import { useSelector } from "react-redux"
import { Rating } from 'react-simple-star-rating'
import { toast } from "react-toastify"

const SetRate = ({ action, Id, status, rateNumber }) => {
    const userInfo = useSelector(state => state.UserInfo.info)
    
    // Catch Rating value
    const handleRating = (rate) => {
        if (userInfo) {
            if (status) toast.error('نظر شما قبلا ثبت شد')
            else action(Id, rate)
        }
        else toast.error('لطفا لاگین کنید!')
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