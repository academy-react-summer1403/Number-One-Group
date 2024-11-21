import { PiSmileySticker } from "react-icons/pi";
import { MdOutlineAttachFile } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useSelector } from "react-redux";
import { AddUserMessage } from "../../services/api/put-data";
import { AddUserChatRoom } from "../../services/api/post-data";
import { useTranslation } from "react-i18next";
const SendSection = ({ chatsData, refetch }) => {
    const { t } = useTranslation()
    const [sendStatus, setSendStatus] = useState(false)
    const [query, setQuery] = useState("")
    const [showEmoji, setShowEmoji] = useState(false)
    const userInfo = useSelector(state => state.UserInfo.info.userImage[0].userProfileId);
    // Change the search status and change the send icon
    const handleOnChange = (value) => {
        // console.log(value)
        if (value !== "") setSendStatus(true)
        else setSendStatus(false)
        setQuery(value)

    }
    // console.log(query)

    // Now Time  
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    const handleSendMessage = (value) => {
        if (value == null) setSendStatus(false)
        const user = chatsData.find(user => user.userId == userInfo)
        if (user) {
            user?.chatRoom?.push({ id: user.chatRoom.length + 1, text: value ? value.emoji : query, messageTime: time, sender: "user" })
            // console.log(user?.chatRoom)
            AddUserMessage(user.id, { chatRoom: user.chatRoom }, refetch)
        }
        else {
            AddUserChatRoom({ userId: userInfo, chatRoom: [{ id: 1, text: value ? value.emoji : query, messageTime: time, sender: "user" }] }, refetch)
        }

    }

    return (
        <div className="py-3 px-3 bg-white dark:bg-zinc-600 flex justify-between ">
            <input
                type="text"
                placeholder={t('placeHolderChat')}
                className="text-sm w-[350px] outline-none bg-transparent"
                value={query}
                onChange={(e) => handleOnChange(e.target.value)}
            />
            <div onClick={() => setShowEmoji(!showEmoji)} className="cursor-pointer"> <PiSmileySticker size={25} /> </div>
            <div className="absolute left-0 bottom-12">
                <EmojiPicker
                    width={447}
                    onEmojiClick={(value) => handleSendMessage(value)}
                    open={showEmoji ? true : false} />
            </div>
            {sendStatus ? (<div onClick={() => handleSendMessage()} className="cursor-pointer"> <LuSend color={"blue"} size={25} /> </div>)
                : (<div> <MdOutlineAttachFile size={25} /> </div>)}


        </div>
    )
}

export default SendSection