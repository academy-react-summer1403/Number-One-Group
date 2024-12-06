import { Button, useDisclosure } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { BiSupport } from "react-icons/bi";
import CreateModal from '../CreateModal';
import { TiArrowBack } from "react-icons/ti";
import { Fragment, useState } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import ChatRoom from '../../../core/utility/support/ChatRoom';
import { useSelector } from 'react-redux';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { toast } from 'react-toastify';

const SupportButton = () => {
    const { t, i18n } = useTranslation();
    const [option, setOption] = useState(undefined)
    const userInfo = useSelector(state => state.UserInfo.info);

    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Fragment>
            <div
                onClick={() => {
                    userInfo ?
                        onOpen() :
                        toast.error("لطفا برای دسترسی به امکانات سایت ابتدا وارد حساب کاربری خود شوید")
                }}
                className={`bottomNav step-support`}
            >
                <IoChatbubbleEllipsesOutline size={23} />
            </div>
            <CreateModal
                isOpen={isOpen}
                onClose={onClose}
                modalStyle={`sm:absolute sm:right-12 !p-0 bg-LavenderMist duration-500 bottom-5`}
                bodyStyle={`p-0`}
                size="md"
                headerStyle="flex flex-col gap-1 text-white"
                backdrop={"opaque"}
            >
                <div onClick={() => setOption(undefined)} className={`closeButton_modal bg-neutral-200/65 top-2 ${i18n.language === 'fa' ? "left-2" : "right-2"}  ${option ? "" : "hidden"} `}>
                    <TiArrowBack />
                </div>
                <ChatRoom section={option} setOption={setOption} />
            </CreateModal>
        </Fragment>
    );
}

export default SupportButton