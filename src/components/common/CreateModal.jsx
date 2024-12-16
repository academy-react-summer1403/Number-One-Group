import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react"
import { useTranslation } from "react-i18next"

const CreateModal = ({
    children,
    isOpen,
    onClose,
    size,
    header,
    headerStyle,
    bodyStyle,
    modalStyle,
    backdrop,
    scroll = true
}) => {
    const { i18n } = useTranslation()
    return (
        <Modal
            size={size}
            // backdrop={backdrop ? backdrop : "blur"}
            isOpen={isOpen}
            onClose={onClose}
            // hideCloseButton
            // scrollBehavior={scroll && "outside"}
            dir={i18n.language === 'fa' ? "rtl" : "ltr"}
            className={`${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'} `}
        >
            <ModalContent>
                {header ? <ModalHeader className={headerStyle}>{header}</ModalHeader> : null}
                <ModalBody className={bodyStyle}>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CreateModal
