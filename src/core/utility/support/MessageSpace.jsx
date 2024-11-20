import messageBack from '../../../assets/images/chatRoom.png'
import chatDark1 from '../../../assets/images/chatDark1.jpg'
import chatDark2 from '../../../assets/images/chatDark2.jpg'
import { getItem } from '../../hooks/local-storage'

const MessageSpace = () => {
    const theme = getItem("theme")
    return (
        <div style={{
            backgroundImage: `url(${theme ? chatDark2 : messageBack})`,
            backgroundSize: `${theme ? "cover" : ""}`,

            backgroundPosition: 'center',
            // height: '100vh',
        }}
            className="h-[500px] overflow-y-auto" >
            MessageSpace
        </div>
    )
}

export default MessageSpace