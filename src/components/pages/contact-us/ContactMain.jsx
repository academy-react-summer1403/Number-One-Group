import { useTranslation } from "react-i18next"
import { CustomButton, FormHolder, FormInput } from "../../common"
import { ContactValidation } from "../../../core/validations/Contact.Validations"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { useQueryWithoutDependencies } from "../../../core/hooks/react-query"
import { GetUserChatInAdmin } from "../../../core/services/api/get-data"
import { useEffect, useState } from "react"
import { AddUserMessageAdmin } from "../../../core/services/api/put-data"
import { AddUserChatRoomAdmin } from "../../../core/services/api/post-data"

const ContactMain = () => {
    const { t } = useTranslation()
    const initialValues = { description: "" }
    const UserInfo = useSelector(state => state.UserInfo.info)
    const [adminChatData, setAdminChatData] = useState([])
    const userInfo = useSelector(state => state.UserInfo.info?.userImage?.[0]?.userProfileId);

    // Get Admin Chats
    const {
        data: adminChats,
        refetch: adminRefetch,
        isLoading: adminLoading,
        isRefetching: adminRefetching,
        isSuccess
    } = useQueryWithoutDependencies("GET_ALL_CHATS", GetUserChatInAdmin)

    // Get This User Chats From All Chats For Admin
    const getMyAdminMessage = () => {
        const myAdminMessage = adminChats?.find(item => item.userId == userInfo)
        setAdminChatData(myAdminMessage)
    }
    useEffect(() => {
        if (isSuccess) {
            getMyAdminMessage()
        }
    }, [adminLoading, adminRefetching, isSuccess])

    // Get Now Time  
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const handleSubmit = (ev) => {
        if (!UserInfo) return toast.error(
            "لطفا برای دسترسی به امکانات سایت ابتدا وارد حساب کاربری خود شوید"
        )

        if (adminChatData) {
            adminChatData?.chatRoom?.push({
                id: adminChatData?.chatRoom?.length + 1,
                text: ev.description,
                messageTime: time,
                sender: "user"
            })
            AddUserMessageAdmin(adminChatData.id, { chatRoom: [...adminChatData.chatRoom] }, adminRefetch)
        }
        else {
            AddUserChatRoomAdmin({
                userId: userInfo,
                chatRoom: [{
                    id: 1,
                    text: ev.description,
                    messageTime: time,
                    sender: "user"
                }]
            }, adminRefetch)
        }
    }

    return (
        <div className="w-full xl:w-4/6 xl:h-full flex items-center bg-LightLavender border-2 border-LightGrayish rounded-lg p-4 xl:p-8">
            <FormHolder
                initialValues={initialValues}
                onSubmit={(event) => { handleSubmit(event) }}
                style="w-full h-fit flex flex-wrap gap-y-4"
                validations={ContactValidation}
            >
                <h1 className="w-full boldStyle_text">{t("contactUsCaption")}</h1>
                <p className="w-full text-sm text-neutral-500">{t("contactUsDescription")}</p>
                <FormInput certificate="description" variants="area" fullSize fieldStyle="max-h-none min-h-[230px]" errorStyleComment="!bg-LightLavender" color={'bg-white'} />
                <CustomButton arrowColor="#000" vStyle="yellow" text="submit" vType="button" />
            </FormHolder>
        </div>
    )
}

export default ContactMain