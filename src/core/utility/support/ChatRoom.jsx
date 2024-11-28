import { useEffect, useState } from "react"
import { useQueryWithoutDependencies } from "../../hooks/react-query"
import { GetUserChatInAdmin, GetUserChatInTeacher } from "../../services/api/get-data"
import MessageSpace from "./MessageSpace"
import ProfileSection from "./ProfileSection"
import SendSection from "./SendSection"
import { useSelector } from "react-redux"
import { getItem } from "../../hooks/local-storage"

const ChatRoom = ({ section }) => {
  const userInfo = useSelector(state => state.UserInfo.info);

  // Get This User Chats From Api
  const [adminChatData, setAdminChatData] = useState([])
  const [teacherChatData, setTeacherChatData] = useState([])

  // Get Teacher Id
  const [teacherId, setTeacherId] = useState()

  // Get These User And Teacher Chats
  const [userTeacherChats, setUserTeacherChats] = useState([])

  // Get Admin Chats
  const {
    data: adminChats,
    refetch: adminRefetch,
    isLoading: adminLoading,
    isRefetching: adminRefetching,
  } = useQueryWithoutDependencies("GET_ALL_CHATS", GetUserChatInAdmin)

  // Get This User Chats From All Chats For Admin
  const getMyAdminMessage = () => {
    const myAdminMessage = adminChats?.find(item => item.userId == userInfo.userImage[0].userProfileId)
    setAdminChatData(myAdminMessage)
  }
  useEffect(() => {
    getMyAdminMessage()
  }, [adminLoading, adminRefetching])

  // Get Teacher Chats
  const {
    data: teacherChats,
    refetch: teacherRefetch,
    isLoading: teacherLoading,
    isRefetching: teacherRefetching,
    isSuccess
  } = useQueryWithoutDependencies("GET_TEACHER_CHATS", GetUserChatInTeacher)

  // Get This User Chats From All Chats For Teacher
  const getMyTeacherMessage = () => {
    const myTeacherMessage = teacherChats?.find(item => item.userId == userInfo.userImage[0].userProfileId)
    setTeacherChatData(myTeacherMessage)
  }

  // Get This Teacher Chat From This User Chats
  const fetchChatsBetweenUserAndTeacher = () => {
    const fetchChats = {
      userId: teacherChatData?.userId,
      chatRoom: teacherChatData?.chatRoom?.filter(chat => chat.teacherId == teacherId),
      id: teacherChatData?.id
    }

    setUserTeacherChats(fetchChats)
  }

  useEffect(() => {
    getMyTeacherMessage()
  }, [teacherLoading, teacherRefetching])

  useEffect(() => {
    if (teacherChatData) {
      fetchChatsBetweenUserAndTeacher()
    }
  }, [teacherChatData, teacherRefetching])

  // When Teacher Id Exists
  useEffect(() => {
    if (getItem("teacherIdChat") && !teacherId) {
      setTeacherId(getItem("teacherIdChat"))
    } else {
      teacherRefetch()
    }
  }, [teacherId])

  return (
    <div className="rounded-xl overflow-hidden">
      <ProfileSection />
      <MessageSpace userChatData={section == "admin" ? adminChatData : userTeacherChats} />
      <SendSection
        chatsData={section == "admin" ? adminChatData : userTeacherChats}
        refetch={section == "admin" ? adminRefetch : teacherRefetch}
        section={section}
        setTeacherId={setTeacherId}
        teacherId={teacherId}
        allChats={teacherChatData?.chatRoom}
      />
    </div>
  )
}

export default ChatRoom