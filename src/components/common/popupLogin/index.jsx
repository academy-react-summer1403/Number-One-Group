import { useEffect, useState } from "react";
import CreateModal from "../CreateModal"
import Login from "./Login";
import TwoStep from "./TwoStep";
import { CloseIcon } from "../../../core/icon";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { setStatusModal } from "../../../redux/slices/LoginPopup";

const PopupLoginWrapper = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loginModal, setLoginModal] = useState(true)
    const isModal = useSelector(state => state.LoginPopup.status)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isModal === true) onOpen()
        else onClose()
    }, [isModal])

    return (
        <CreateModal
            header={t("login")}
            size="md"
            scroll={false}
            isOpen={isOpen}
            onClose={() => { onClose(); dispatch(setStatusModal(false)) }}
            headerStyle="flex justify-center text-3xl text-[#FFC224]"
        >
            <div onClick={() => { dispatch(setStatusModal(false)); }} className="closeButton_modal bg-neutral-200/65 top-2 right-2">
                <CloseIcon />
            </div>

            {loginModal ? <Login modalState={setLoginModal} /> : <TwoStep />}
        </CreateModal>
    )
}

export default PopupLoginWrapper
