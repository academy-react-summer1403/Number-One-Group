import { PiSmileySticker } from "react-icons/pi";
import { MdOutlineAttachFile } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useSelector } from "react-redux";
import { AddUserMessageAdmin, AddUserMessageTeacher } from "../../services/api/put-data";
import { AddUserChatRoomTeacher, AddUserChatRoomAdmin } from "../../services/api/post-data";
import { useTranslation } from "react-i18next";
import { FaT } from "react-icons/fa6";
import ChooseTeacherToChat from "../../../components/common/ChooseTeacherToChat";
import { toast } from "react-toastify";
import AntiSwearingSystem from "../anti-swearing-system";
import RemoveConsecutiveDuplicates from "../remove-consecutive-duplicates";

const SendSection = ({ chatsData, refetch, section, setTeacherId, teacherId, allChats }) => {
    const { t } = useTranslation()
    const [sendStatus, setSendStatus] = useState(false)
    const [query, setQuery] = useState("")
    const userInfo = useSelector(state => state.UserInfo.info.userImage[0].userProfileId);

    // Show These Modal
    const [showTeachers, setShowTeachers] = useState(false)
    const [showEmoji, setShowEmoji] = useState(false)

    // Change the search status and change the send icon
    const handleOnChange = (value) => {
        if (value !== "") setSendStatus(true)
        else setSendStatus(false)
        setQuery(value)
    }

    // Get Now Time  
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Handle Send Message For Admin
    const handleAdminSendMessage = (value) => {
        if (value == null) setSendStatus(false)

        if (chatsData) {
            chatsData?.chatRoom?.push({
                id: chatsData?.chatRoom?.length + 1,
                text: value ? value.emoji : query,
                messageTime: time,
                sender: "user"
            })
            AddUserMessageAdmin(chatsData.id, { chatRoom: [...chatsData.chatRoom] }, refetch)
        }
        else {
            AddUserChatRoomAdmin({
                userId: userInfo,
                chatRoom: [{
                    id: 1, text: value ? value.emoji : query,
                    messageTime: time,
                    sender: "user"
                }]
            }, refetch)
        }
        setQuery("")
    }

    // Handle Send Message For Teacher
    const handleTeacherSendMessage = (value) => {
        if (!teacherId) {
            return toast.error("لطفا معلم مورد نظر خود را انتخاب کنید")
        }

        const queryOutput = RemoveConsecutiveDuplicates(query)

        const antiSwearing = AntiSwearingSystem(queryOutput)
        if (antiSwearing) {
            return toast.error("متن شما شامل کلامات ناپسند است لطفا آن زا عوض کنید!");
        }

        if (value == null) setSendStatus(false)

        if (allChats) {
            allChats?.push({
                id: allChats?.length + 1,
                text: value ? value.emoji : queryOutput,
                messageTime: time, sender: "user",
                teacherId: teacherId
            })
            AddUserMessageTeacher(chatsData.id, { chatRoom: [...allChats] }, refetch)
        }
        else {
            AddUserChatRoomTeacher({
                userId: userInfo,
                chatRoom: [{
                    id: 1,
                    text: value ? value.emoji : queryOutput,
                    messageTime: time,
                    sender: "user",
                    teacherId: teacherId
                }]
            }, refetch)
        }
        setQuery("")
    }

    return (
        <div className="py-3 px-3 bg-white dark:bg-zinc-600 flex justify-between items-center">
            <input
                type="text"
                placeholder={t('placeHolderChat')}
                className="text-sm w-[350px] outline-none bg-transparent font-IranSans"
                value={query}
                onChange={(e) => handleOnChange(e.target.value)}
            />
            <FaT
                className={`cursor-pointer ${section != "teacher" && "hidden"}`}
                size={18}
                onClick={() => { setShowTeachers(!showTeachers) }}
            />
            <PiSmileySticker
                onClick={() => setShowEmoji(!showEmoji)}
                className="cursor-pointer"
                size={25}
            />
            {sendStatus ? (
                <LuSend
                    onClick={() => {
                        section == "admin" ?
                            handleAdminSendMessage() :
                            handleTeacherSendMessage()
                    }}
                    className="cursor-pointer"
                    color={"blue"} size={20}
                />
            ) : (
                <MdOutlineAttachFile size={20} />
            )}
            <div className="absolute left-0 bottom-12">
                <EmojiPicker
                    width={447}
                    onEmojiClick={(value) => {
                        section == "admin" ?
                            handleAdminSendMessage(value) :
                            handleTeacherSendMessage(value)
                    }}
                    open={showEmoji ? true : false}
                />
            </div>
            {showTeachers && <ChooseTeacherToChat setTeacherId={setTeacherId} />}
        </div>
    )
}

export default SendSection