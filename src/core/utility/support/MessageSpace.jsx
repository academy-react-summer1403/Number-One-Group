import messageBack from '../../../assets/images/chatRoom.png'
// import chatDark1 from '../../../assets/images/chatDark1.jpg'
import chatDark2 from '../../../assets/images/chatDark2.jpg'
import adminImage from '../../../assets/images/AdminSupport.jpg'
import { getItem } from '../../hooks/local-storage'
import { useSelector } from 'react-redux'

const MessageSpace = ({ userChatData }) => {
    const theme = getItem("theme")
    const userInfo = useSelector(state => state.UserInfo.info);

    console.log(userChatData)

    return (
        <div style={{
            backgroundImage: `url(${theme ? chatDark2 : messageBack})`,
            backgroundSize: `${theme ? "cover" : ""}`,
            backgroundPosition: 'center',
        }}
            className="h-[500px] overflow-y-auto relative flex flex-col py-2 px-2 gap-4" >
            {userChatData ? (userChatData.chatRoom?.map((message) => {
                return (
                    <div key={message.id} className='w-full'>
                        <div className={`flex gap-1 items-end ${message.sender === "admin" ? "flex-row-reverse" : ""}`}>
                            <img className='h-10 w-10 rounded-full' src={message.sender === "admin" ? adminImage : userInfo.currentPictureAddress} />
                            <div className={`bg-gradient-to-r  p-1 rounded-xl  
                                ${message.sender === "admin" ? "rounded-bl-none from-zinc-500 to-gray-700" : "rounded-br-none from-cyan-500 to-blue-600"} `}>
                                <h1 className='text-gray-100'>{message.text}</h1>
                                <h2 className='text-gray-300 mt-1'>{message.messageTime}</h2>
                            </div>
                        </div>
                    </div>
                )
            })
            ) : (
                <h1 className='text-center my-auto text-zinc-500'> برای شروع ارتباط با ادمین پیامی وارد کنید!</h1>
            )

            }
        </div>
    )
}

export default MessageSpace