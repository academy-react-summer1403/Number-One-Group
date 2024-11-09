import { Fragment, useRef } from "react"
import { CustomButton } from "../../../common"
import { CancelIcon } from "../../../../core/icon"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useQueryWithDependencies } from "../../../../core/hooks/react-query"
import { GetCourseDetails, StudentUserPayList } from "../../../../core/services/api/get-data"
import html2canvas from "html2canvas"
import ChangeMoment from "../../../../core/utility/moment"
import { SeparationPrice } from "../../../../core/utility/SeparationPrice"

const PaymentStepTwo = () => {
    const invoiceRef = useRef()
    const { id, payment } = useParams()
    const profile = useSelector(state => state.UserInfo.info)
    const navigate = useNavigate()

    // Get User Payment List
    const { data } = useQueryWithDependencies("GET_PAYMENT_DETAIL", StudentUserPayList, id, id)

    // Get Course Details
    const { data: CourseName } = useQueryWithDependencies("GET_COURSE_DETAIL", GetCourseDetails, data?.courseId, data?.courseId)

    // Get Screenshot From Invoice
    const captureScreenshot = () => {
        html2canvas(invoiceRef.current).then((canvas) => {
            const link = document.createElement("a")
            link.download = "invoice.png"
            link.href = canvas.toDataURL()
            link.click()
        })
        navigate(`/userPanel/payment/step2/${data.paymentId}`)
    }

    // All Keys For Invoice
    const keys = [
        { label: "تاریخ", value: ChangeMoment(data?.insertDate, "YYYY/MM/DD", "persian") },
        { label: "زمان", value: data?.peymentDate.slice(11, 29) },
        { label: "شماره ارجاع / پیگیری", value: "12345" },
        { label: "نام پزیرنده", value: "سپهر آکادمی" },
        { label: "نام پرداخت کننده", value: profile?.fName + " " + profile?.lName },
        { label: "نام دوره", value: CourseName?.title },
        { label: "شناسه پرداخت", value: payment },
    ]

    return (
        <div className="flex flex-wrap gap-y-5 w-full">
            <div ref={invoiceRef} className="w-full px-10 flex justify-center">
                <table className="w-[80%] h-fit flex flex-wrap">
                    <thead className="w-full flex flex-wrap justify-center">
                        <tr className="text-3xl text-green-500">پرداخت موفق</tr>
                        <tr className="mt-4 w-full text-center mediumStyle_text text-xl font-Mitra">{SeparationPrice(data?.paid)} تومان</tr>
                    </thead>
                    <tbody className="w-full mt-8">
                        {keys.map((item, index) => (
                            <tr key={index} className="border-b-1 w-full flex py-2 mediumStyle_text">
                                <td className="w-1/2 px-3">{item.label} :</td>
                                <td className="w-1/2 px-3 text-end font-Mitra">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-full flex justify-center gap-x-5">
                <CustomButton isClick={() => { captureScreenshot() }} vStyle={"yellow"} vType={"button"} text={"paymentNextBtn"} arrowColor={"#000"} />
                <CustomButton Icon={CancelIcon} vType="link" vStyle={"yellow"} text="paymentCancelBtn" style="bg-neutral-200 text-[#161439]" href="/userPanel/myCourses" />
            </div>
        </div>
    )
}

export default PaymentStepTwo
