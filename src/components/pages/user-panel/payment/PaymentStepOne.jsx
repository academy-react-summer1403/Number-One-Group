import { useTranslation } from "react-i18next"
import { CancelIcon } from "../../../../core/icon"
import { CustomButton, FormHolder, FormInput } from "../../../common"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetCourseDetails, StudentUserPayList } from "../../../../core/services/api/get-data"
import { CoursePayment } from "../../../../core/services/api/post-data"
import { useMutation } from "@tanstack/react-query"
import ChangeMoment from "../../../../core/utility/moment"
import * as yup from "yup";
import { useQueryWithDependencies } from "../../../../core/hooks/react-query"
import { Fragment } from "react"
import CreateTableStepOne from "./CreateTableStepOne"

const PaymentStepOne = () => {
    const { t } = useTranslation()
    const { id } = useParams()
    const navigate = useNavigate()

    // Validation
    const validation = yup.object().shape({
        PaymentInvoiceNumber: yup
            .string()
            .required("این فیلد الزامیست")
            .min(15, "شناسه پرداخت حداقل باید 15 رقم باشد")
            .max(15, "شناسه پرداخت حداکثر باید 15 رقم باشد"),
    });

    // Get Course Details
    const { data, isSuccess } = useQueryWithDependencies("GET_COURSE_DETAIL", GetCourseDetails, id, id)
    console.log(data)

    // Default Values For Course Payment
    const defaultValues = {
        CourseId: id,
        Paid: isSuccess && data.cost,
    }

    // Get Today Date
    const GetToday = () => {
        let date = new Date()
        let today = ChangeMoment(date, "YYYY/MM/DDTHH:mm:ss", "english")
        return today
    }

    // Course Payment
    const { mutate } = useMutation({
        mutationKey: ["COURSE_PAYMENT"],
        mutationFn: (values) => {
            let today = GetToday()

            values = { ...values, ...defaultValues, PeymentDate: today }
            CoursePayment(values, navigate)
        }
    })

    const { data: payId, isSuccess: paymentSuccess } = useQueryWithDependencies("GET_PAYMENT_ID", StudentUserPayList, id, id)

    return (
        <Fragment>
            <div className="w-full lg:w-1/2 h-[266px] max-lg:order-2 flex justify-center items-center flex-wrap gap-y-20 px-4">
                <FormHolder
                    initialValues={{ PaymentInvoiceNumber: "" }}
                    style="w-[300px] flex flex-wrap justify-center gap-4"
                    onSubmit={(event) => { mutate(event) }}
                    validations={validation}
                >
                    <FormInput type="PaymentInvoiceNumber" certificate="PaymentInvoiceNumber" sectionName={t("paymentLabelInput")} style="w-[300px]" variants="simple" />
                    <CustomButton vStyle={"yellow"} vType={"button"} text={"paymentNextBtn"} arrowColor={"#000"} />
                    <CustomButton Icon={CancelIcon} vType="link" vStyle={"yellow"} text="paymentCancelBtn" style="bg-neutral-200 text-[#161439]" href="/userPanel/myCourses" />
                    <div className="flex gap-x-2 mediumStyle_text mt-5">
                        <span>آیا رسید پرداخت دارید؟</span>
                        <Link to={paymentSuccess && `/userPanel/payment/step2/${payId.paymentId}`} className="text-VioletBlue">ارسال رسید</Link>
                    </div>
                </FormHolder>
            </div>
            <div className="w-full lg:w-1/2 h-full max-lg:border-b-2 py-8 lg:border-r-2 px-4">
                <CreateTableStepOne data={isSuccess && data} dateFunc={GetToday} />
            </div>
        </Fragment>
    )
}

export default PaymentStepOne
