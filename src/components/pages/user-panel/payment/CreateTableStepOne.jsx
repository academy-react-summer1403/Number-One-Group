import ChangeMoment from "../../../../core/utility/moment"
import { SeparationPrice } from "../../../../core/utility/SeparationPrice"

const CreateTableStepOne = ({ data, dateFunc }) => {
    // Table Keys
    const keys = [
        { label: "نام دوره", value: data.title },
        { label: "نام استاد", value: data.teacherName },
        { label: "نام فروشگاه", value: "آکادمی سپهر" },
        { label: "تاریخ شروع دوره", value: ChangeMoment(data.startTime, "YYYY/MM/DD", "persian") },
        { label: "مبلغ قابل پرداخت (ريال)", value: SeparationPrice(data.cost) },
    ]

    return (
        <table className="w-full">
            <thead className="flex justify-center mb-4">
                <td className="text-xl">اطلاعات دوره</td>
            </thead>
            <tbody>
                {keys.map((item, index) => (
                    <tr key={index} className="border-b-1 w-full flex py-2 mediumStyle_text">
                        <td className="w-full px-3">{item.label} :</td>
                        <td className="w-full px-3 text-end">{item.value}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default CreateTableStepOne
