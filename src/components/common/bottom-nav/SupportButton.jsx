import { Button, useDisclosure } from '@nextui-org/react';
// import { useTranslation } from 'react-i18next';
import { BiSupport } from "react-icons/bi";
import CreateModal from '../CreateModal';
import { TiArrowBack } from "react-icons/ti";
import { useState } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import ChatRoom from '../../../core/utility/support/ChatRoom';

const SupportButton = () => {
    // const { t, i18n } = useTranslation();
    const [option, setOption] = useState(undefined)
    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <div onClick={onOpen} className="bottomNav">
                <BiSupport size={20} />
            </div>
            <CreateModal isOpen={isOpen} onClose={onClose} modalStyle={`sm:absolute sm:right-12 !p-0 bg-LavenderMist duration-500 ${option ? "bottom-1" : "bottom-0"}`} bodyStyle={`rounded-lg ${option ? "p-0" : ""}`} size="md" headerStyle="flex flex-col gap-1 text-white" backdrop={option ? "blur" : "opaque"}>
                <div onClick={() => setOption(undefined)} className={`closeButton_modal bg-neutral-200/65 top-2 left-2 ${option ? "" : "hidden"}`}>
                    <TiArrowBack />
                </div>
                <Button onClick={() => setOption("admin")} radius="full" className={`bg-gradient-to-tr from-VioletBlue to-blue-900  text-white shadow-lg ${option ? "hidden" : ""}`}>
                    <span> پشتیبانی و ارتباط با ادمین</span>
                    <BiSupport size={20} />
                </Button>
                <Button onClick={() => setOption("teacher")} radius="full" className={`bg-gradient-to-tr from-VioletBlue to-blue-400 text-white shadow-lg ${option ? "hidden" : ""}`}>
                    <span> ارتباط با اساتید</span>
                    <FaChalkboardTeacher size={20} />
                </Button>
                {option === "admin" && <ChatRoom/>}
                {option === "teacher" && <p>Teacher</p>}
                {/* {children} */}
            </CreateModal>

        </>
    );
}

export default SupportButton