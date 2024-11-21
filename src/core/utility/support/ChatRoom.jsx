import { useEffect, useState } from "react"
import { useQueryWithDependencies } from "../../hooks/react-query"
import { GetAllChat } from "../../services/api/get-data"
import MessageSpace from "./MessageSpace"
import ProfileSection from "./ProfileSection"
import SendSection from "./SendSection"
import { useSelector } from "react-redux"

const ChatRoom = () => {
  const userInfo = useSelector(state => state.UserInfo.info);
  const [userChatData, setUserChatData] = useState([])
  // Getting data from Api with use Query
  const { data: chatsData, refetch , isLoading , isRefetching} = useQueryWithDependencies("GET_ALL_CHATS", GetAllChat, null, null)

  // Getting user message data if any
  const getMyMessage = () => {
    // alert()
    const myMessage = chatsData?.find(item => item.userId == userInfo.userImage[0].userProfileId)
    setUserChatData(myMessage)
  }
  useEffect(() => {
    getMyMessage()
  }, [isLoading,isRefetching])

  return (
    <div className="rounded-lg">
      <ProfileSection />
      <MessageSpace userChatData={userChatData}/>
      <SendSection chatsData={chatsData} refetch={refetch} />
    </div>
  )
}

export default ChatRoom