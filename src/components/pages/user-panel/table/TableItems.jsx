import { useTranslation } from "react-i18next"
import { Skeleton, Tooltip } from "@nextui-org/react"
import { EyeIcon, TrashCan } from "../../../../core/icon"
import tooltipStyle from "../../../../core/constants/tooltip-style"
import { UnitPrice } from "../../../../core/utility/SeparationPrice"
import { useNavigate } from "react-router-dom"
import ChangeTime from "../../../../core/utility/time"
import ChangeMoment from "../../../../core/utility/moment"
import { ImageFallBack } from "../../../common"
import fallback from "../../../../assets/images/image-not-found.png"
import { MdPayment, MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


const TableItem = ({ item, variant, loading: isLoading, action, keyVariant, bet }) => {
    const navigate = useNavigate();
    const { i18n } = useTranslation()
    const differentSection = {
        myCourses: {
            pic: item.tumbImageAddress,
            sections: [
                { section: item.courseTitle },
                { section: item.fullName },
                { section: ChangeMoment(item.lastUpdate, "YYYY/MM/DD", "persian"), dir: "ltr" },
                { section: `${UnitPrice(item.cost)} تومان` }
            ],
            width: "25",
            actions: [
                { Icon: MdPayment, tooltip: ["پرداخت", "Payment"], function: () => { navigate(`/userPanel/payment/${item.courseId}`) } },
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"], function: () => { navigate(`/CourseDetails/${item.courseId}`) } },
            ]
        },
        reserved: {
            sections: [
                { section: item.courseName },
                { section: ChangeMoment(item.reserverDate, "YYYY/MM/DD", "persian"), dir: "ltr" },
                { section: i18n.language == "en" ? (item.accept ? "Confirmed" : "Waiting") : (item.accept ? "تایید شده" : "در انتظار تایید"), color: item.accept ? "#128E5A" : "#DE5204" },
            ],
            width: "33",
            actions: [
                { Icon: TrashCan, tooltip: ["حذف", "Delete"], function: () => { action(item.reserveId) }, accept: item.accept },
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"], function: () => { navigate(`/CourseDetails/${item.courseId}`) } },
            ]
        },
        myViews: {
            sections: [
                { section: item.courseTitle },
                { section: item.title },
                { section: i18n.language == "en" ? (item.accept ? "Confirmed" : "Waiting") : (item.accept ? "تایید شده" : "در انتظار تایید"), color: item.accept ? "#128E5A" : "#DE5204" },
                { section: [ChangeMoment(item.insertDate, "YYYY/MM/DD", "persian"), " , ", ChangeTime(item.insertDate)], dir: "ltr" },
            ],
            width: "25",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"], function: () => { navigate(`${bet == "course" ? `/CourseDetails/${item.courseId}` : `/BlogDetails/${item.newsId}`}`) } },
                { Icon: TrashCan, tooltip: ["حذف", "Delete"], function: () => { action(item.reserveId) }, accept: item.accept },
            ]
        },
        favorites: {
            pic: bet == "course" ? item.tumbImageAddress : item.currentImageAddressTumb,
            sections: [
                { section: item?.[keyVariant?.[0]] },
                { section: item?.[keyVariant?.[1]] },
                { section: [ChangeMoment(item?.[(keyVariant?.[2])], "YYYY/MM/DD", "persian"), " , ", ChangeTime(item?.[(keyVariant?.[2])])], dir: "ltr" },
                { section: item?.[keyVariant?.[3]] },
            ],
            width: "25",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"], function: () => { navigate(`${bet == "course" ? `/CourseDetails/${item.courseId}` : `/BlogDetails/${item.newsId}`}`) } },
                { Icon: TrashCan, tooltip: ["حذف", "Delete"], function: () => { action(item.favoriteId) } },
            ]
        },
        myJobs: {
            sections: [
                { section: item.jobTitle },
                { section: item.aboutJob },
                { section: item.companyName },
                { section: [ChangeMoment(item.workStartDate, "YYYY/MM/DD", "persian"), " تا ", ChangeMoment(item.workEndDate, "YYYY/MM/DD", "persian")], dir: "rtl" }
            ],
            width: "25",
            actions: [
                { Icon: MdDelete, tooltip: ["حذف", "Delete"], function: () => { action(item.id) } },
                { Icon: FaRegEdit, tooltip: ["ویرایش", "Edit"], function: () => { navigate(`/userPanel/updateJob/${item.id}`) } },
            ]
        },
        myGroups: {
            sections: [
                { section: item.groupName },
                { section: i18n.language == "en" ? (item.payment ? "Confirmed" : "Waiting") : (item.payment ? "پرداخت شده" : "پرداخت نشده"), color: item.payment ? "#128E5A" : "#DE5204" },
            ],
            width: "48",
            actions: [
                { Icon: EyeIcon, tooltip: ["جزئیات", "Details"], function: () => { navigate(`/CourseDetails/${item.courseId}`) } },
            ]
        },
    }

    return (
        <tr className="min-w-[830px] w-full h-fit text-center text-sm flex items-center odd:bg-[#C8C1ED]/30 dark:odd:bg-[#C8C1ED]/10 justify-around p-1.5 rounded-lg shadow-md hover:shadow-xl duration-200">
            <Skeleton isLoaded={!isLoading}>
                {!differentSection?.[variant].id ? (
                    <td className="ml-2 overflow-hidden">
                        <ImageFallBack
                            fallback={fallback}
                            src={differentSection?.[variant].pic}
                            className="min-w-8 w-8 h-8 rounded-full"
                        />
                    </td>
                ) : (
                    <td className="min-w-8 w-8 h-8 flex gap-x-1 flex-row-reverse items-center text-DarkBlue text-lg">
                        <span>#</span>
                        <span className="font-Number text-xl">{differentSection?.[variant].id}</span>
                    </td>
                )}
            </Skeleton>
            {differentSection?.[variant].sections.map((item, index) => (
                <Skeleton style={{ width: differentSection?.[variant].width + "%" }} isLoaded={!isLoading} key={index}>
                    <td className={`line-clamp-1 h-fit text-DarkBlue`} dir={item.dir} style={{ color: item.color }}>
                        {item.section}
                    </td>
                </Skeleton>
            ))}
            <Skeleton isLoaded={!isLoading}>
                <td className="w-12 h-6 flex items-center justify-end gap-x-3">
                    {differentSection?.[variant].actions.map((item, index) => (
                        <Tooltip key={index} {...tooltipStyle} content={i18n.language == "en" ? item.tooltip[1] : item.tooltip[0]}>
                            <span style={{ display: !item.accept ? "block" : "none" }} onClick={item.function} className="cursor-pointer bg-re hover:scale-110">
                                <item.Icon stroke="#5751E1" size={20} fill="#5751E1" />
                            </span>
                        </Tooltip>
                    ))}
                </td>
            </Skeleton>
        </tr>
    )
}

export default TableItem
