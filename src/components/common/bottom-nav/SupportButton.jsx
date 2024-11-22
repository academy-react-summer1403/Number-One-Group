import { Button, useDisclosure } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { BiSupport } from "react-icons/bi";
import CreateModal from '../CreateModal';
import { TiArrowBack } from "react-icons/ti";
import { useState } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import ChatRoom from '../../../core/utility/support/ChatRoom';
import { useSelector } from 'react-redux';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const SupportButton = () => {
    const { t, i18n } = useTranslation();
    const [option, setOption] = useState(undefined)
    const userInfo = useSelector(state => state.UserInfo.info);

    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className={`${userInfo ? "" : "hidden"}`}>
            <div onClick={onOpen} className="bottomNav">
                <IoChatbubbleEllipsesOutline size={23} />
            </div>
            <span className='w-10 h-3 bottomNav_shadow'></span>
            <CreateModal
                isOpen={isOpen}
                onClose={onClose}
                modalStyle={`sm:absolute sm:right-12 !p-0 bg-LavenderMist duration-500 ${option ? "top-1" : "top-[500px]"}`}
                bodyStyle={` ${option ? "p-0" : ""}`}
                size="md"
                headerStyle="flex flex-col gap-1 text-white"
                backdrop={option ? "blur" : "opaque"}
            >
                <div onClick={() => setOption(undefined)} className={`closeButton_modal bg-neutral-200/65 top-2 ${i18n.language === 'fa' ? "left-2" : "right-2"}  ${option ? "" : "hidden"}`}>
                    <TiArrowBack />
                </div>
                <Button onClick={() => setOption("admin")} radius="full" className={`bg-gradient-to-tr from-VioletBlue to-blue-900  text-white shadow-lg font-IranSans ${option ? "hidden" : ""}`}>
                    <span>{t('supportBtn')}</span>
                    <BiSupport size={20} />
                </Button>
                <Button onClick={() => setOption("teacher")} radius="full" className={`bg-gradient-to-tr from-VioletBlue to-blue-400 text-white shadow-lg font-IranSans ${option ? "hidden" : ""}`}>
                    <span>{t('supportTeacherBtn')}</span>
                    <FaChalkboardTeacher size={20} />
                </Button>
                {option === "admin" && <ChatRoom />}
                {option === "teacher" && <p>Teacher</p>}
                {/* {children} */}
            </CreateModal>

        </div>
    );
}

export default SupportButton