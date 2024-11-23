import { useTranslation } from 'react-i18next'
import { CustomButton, FormHolder, FormInput } from '../../common'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { GetUserChatInTeacher } from '../../../core/services/api/get-data';
import { useQueryWithoutDependencies } from '../../../core/hooks/react-query';
import { useEffect, useState } from 'react';
import { AddUserMessageTeacher } from '../../../core/services/api/put-data';
import { AddUserChatRoomTeacher } from '../../../core/services/api/post-data';
import { setItem } from '../../../core/hooks/local-storage';

const ContactToTeacher = ({ teacherId }) => {
    const { t } = useTranslation()
    const userInfo = useSelector(state => state.UserInfo.info);
    const [teacherChatData, setTeacherChatData] = useState([])

    // Get Now Time  
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Create Chat To Teacher
    const CreateChat = (ev, allChat) => {
        if (allChat) {
            allChat.chatRoom?.push({
                id: allChat.chatRoom?.length + 1,
                text: ev.describe,
                messageTime: time,
                sender: "user",
                teacherId: teacherId
            })
            AddUserMessageTeacher(allChat.id, { chatRoom: [...allChat.chatRoom] }, refetch)
        }
        else {
            AddUserChatRoomTeacher({
                userId: userInfo.userImage[0].userProfileId,
                chatRoom: [{
                    id: 1,
                    text: ev.describe,
                    messageTime: time,
                    sender: "user",
                    teacherId: teacherId
                }]
            }, refetch)
        }
    }

    // Get Teacher Chats
    const { data: teacherChats, refetch } = useQueryWithoutDependencies("GET_TEACHER_CHATS", GetUserChatInTeacher)

    // Get This User Chats From All Chats For Teacher
    const getMyTeacherMessage = (ev) => {
        const myTeacherMessage = teacherChats?.find(item => item.userId == userInfo.userImage[0].userProfileId)
        CreateChat(ev, myTeacherMessage)
    }

    // Handle For Submit
    const handleSubmit = (ev) => {
        if (!userInfo) {
            return toast.error("لطفا برای دسترسی به امکانات سایت ابتدا وارد حساب کاربری خود شوید")
        } else {
            getMyTeacherMessage(ev)
            setItem("teacherIdChat", teacherId)
        }
    }

    return (
        <div className='w-full xl:w-1/4 min-w-[240px] h-fit order-2 mt-32 md:mt-12 xl: xl:mt-0 xl:order-none flex flex-wrap gap-y-3 py-8 px-6 rounded-xl border border-neutral-300 shadow-lg'>
            <h1 className='boldStyle_text text-xl w-full'>{t("sideBarTitle")}</h1>
            <p className='mediumStyle_text text-sm w-full'>{t("sideBarDesc")}</p>
            <FormHolder
                initialValues={{ describe: "" }}
                style="w-full flex flex-wrap gap-2"
                onSubmit={(ev) => { handleSubmit(ev) }}
            >
                <FormInput fullSize variants={"area"} certificate="describe" placeholder="متن خود را وارد کنید" />
                <CustomButton arrowColor="#fff" text={t("sideBarBtn")} vStyle="purple" vType="button" style="xl:w-full justify-center" />
            </FormHolder>
        </div>
    )
}

export default ContactToTeacher
