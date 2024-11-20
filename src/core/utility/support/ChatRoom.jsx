import MessageSpace from "./MessageSpace"
import ProfileSection from "./ProfileSection"
import SendSection from "./SendSection"

const ChatRoom = () => {
  return (
    <div className="overflow-y-hidden rounded-lg">
        <ProfileSection/>
        <MessageSpace/>
        <SendSection/>
    </div>
  )
}

export default ChatRoom