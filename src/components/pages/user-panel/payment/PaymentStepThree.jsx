import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { StudentAddPeymentImage } from "../../../../core/services/api/post-data"
import { Camera, CancelIcon } from "../../../../core/icon"
import { CustomButton } from "../../../common"

const PaymentStepThree = () => {
    const { paymentId } = useParams()
    const [file, setFile] = useState("")
    const [preview, setPreview] = useState("")

    const handleChooseImage = (event) => {
        let pre = URL.createObjectURL(event.target.files[0]);
        setFile(event.target.files[0]);
        setPreview(pre)
    }

    const { mutate } = useMutation({
        mutationKey: ["ADD_PAYMENT_IMAGE"],
        mutationFn: () => {
            if (file != "") {
                const values = { Image: file, PaymentId: paymentId }
                StudentAddPeymentImage(values)
            }
        }
    })

    return (
        <div className="w-full flex flex-wrap justify-center gap-5 py-10">
            <div className="w-[90%] h-96 rounded-2xl overflow-hidden border-2 relative">
                {preview != "" && <img src={preview} className="w-full h-full" />}
                <label className="w-20 h-20 rounded-full cursor-pointer bg-black/50 flex items-center justify-center border-2 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                    <input
                        type="file"
                        className="hidden"
                        accept="image/png"
                        multiple
                        onChange={(e) => { handleChooseImage(e) }}
                    />
                    <Camera className="w-6 h-6" />
                </label>
            </div>
            <div className="w-full flex justify-center gap-x-5">
                <CustomButton isClick={() => { mutate() }} vStyle={"yellow"} vType={"button"} text={"submit"} arrowColor={"#000"} />
                <CustomButton Icon={CancelIcon} vType="link" vStyle={"yellow"} text="cancel" style="bg-neutral-200 text-[#161439]" href="/userPanel/myCourses" />
            </div>
        </div>
    )
}

export default PaymentStepThree
