import { Button } from "@nextui-org/react"
import { useTranslation } from "react-i18next"
import { BiSupport } from "react-icons/bi"
import { FaChalkboardTeacher } from "react-icons/fa"
import { getItem } from "../../hooks/local-storage"
import messageBack from '../../../assets/images/chatRoom.png'
import chatDark2 from '../../../assets/images/chatDark2.jpg'

const NoSelect = ({ setOption }) => {
    const { t } = useTranslation()
    const theme = getItem("theme")

    return (
        <div className="h-[550px] flex items-center justify-center" style={{
            backgroundImage: `url(${theme ? chatDark2 : messageBack})`,
            backgroundSize: `${theme ? "cover" : ""}`,
            backgroundPosition: 'center',
        }}>
            <div className="flex flex-wrap gap-y-4 -mt-32">
                <Button onClick={() => setOption("admin")} radius="full" className="w-3/4 mx-auto bg-black/10 dark:bg-white/40 text-black font-IranSans">
                    <span>{t('supportBtn')}</span>
                    <BiSupport size={20} />
                </Button>
                <Button onClick={() => setOption("teacher")} radius="full" className="w-3/4 mx-auto bg-black/10 dark:bg-white/40 text-black font-IranSans">
                    <span>{t('supportTeacherBtn')}</span>
                    <FaChalkboardTeacher size={20} />
                </Button>
            </div>
        </div>
    )
}

export default NoSelect
